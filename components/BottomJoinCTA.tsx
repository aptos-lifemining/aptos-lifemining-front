import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/router';

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { AptosClient, Types } from 'aptos';
import styled from 'styled-components';

import HttpClient from '../network/httpClient';
import Aptos from '../public/svg/aptos.svg';
import ChallengeRepositoryImpl from '../repository/challenge';
import ChallengeUseCase from '../usecase/challenge';
import BorderButton from './BorderButton';

const aptosClient = new AptosClient(process.env.NEXT_PUBLIC_APTOS_NODE_ADDRESS);

export default function BottomJoinCTA({ challenge, totalRecord }: any) {
  const { signAndSubmitTransaction } = useWallet();
  const router = useRouter();
  const challengeID = router.query.id;
  const hostAddress = challenge.creator.address;

  // isJoined useState
  const [isJoined, setIsJoined] = useState(false);
  const [dayNumber, setDayNumber] = useState(0);

  useEffect(() => {
    setIsJoined(totalRecord ? true : false);
    setDayNumber(totalRecord ? totalRecord.participationDays + 1 : 0);
  }, [totalRecord]);

  const handleJoinClick = async () => {
    // challenge join
    try {
      const serverResponse = await new ChallengeUseCase(
        new ChallengeRepositoryImpl(HttpClient),
      ).joinChallenge(challenge.id);

      if (serverResponse) {
        // aptos join
        const payload: Types.TransactionPayload = {
          type: 'entry_function_payload',
          function: `${process.env.NEXT_PUBLIC_CONTRACT_RESOURCE_ADDRESS}::Challenge::join_challenge`,
          type_arguments: [],
          arguments: [hostAddress, String(challengeID)],
        };
        const response = await signAndSubmitTransaction(payload);
        console.log(response);
        // if you want to wait for transaction
        await aptosClient.waitForTransaction(response?.hash || '');
        response?.hash &&
          Router.push(
            `/join_complete?name=${challenge.title}&fee=${challenge.stakingAPT}&handler=${challenge.creator.handle}`,
          );
      }
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const handleRecordClick = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      Router.push(
        {
          pathname: '/video/upload',
          query: {
            videoUrl: reader.result as string,
            fileName: file.name,
            challengeID: challenge.id,
            hostAddress: hostAddress,
          },
        },
        'video/upload',
      );
    };

    reader.readAsDataURL(file);
  };

  return (
    <React.Fragment>
      <FixedMargin />
      <BottomBar>
        <ContentBox>
          <div className="join-fee">
            {challenge.stakingAPT}
            <AptosLogo />
            <div className="typo-unit">APT</div>
          </div>
          {!isJoined ? (
            <BorderButton
              width={180}
              height={33}
              borderRadius={24}
              buttonColor={!isJoined ? '#3733ff' : '#000000'}
              textColor="#ffffff"
              onClick={handleJoinClick}
            >
              Join now!
            </BorderButton>
          ) : (
            <>
              <label htmlFor="upload-input">
                <BorderButton
                  width={180}
                  height={33}
                  borderRadius={24}
                  buttonColor={!isJoined ? '#3733ff' : '#000000'}
                  textColor="#ffffff"
                >
                  {`Record Day ${dayNumber}`}
                </BorderButton>
              </label>
              <input
                id="upload-input"
                type="file"
                onChange={(e) => handleRecordClick(e)}
                accept="video/*, image/gif, image/jpeg, image/png"
                style={{
                  display: 'none',
                }}
              />
            </>
          )}
        </ContentBox>
      </BottomBar>
    </React.Fragment>
  );
}

const FixedMargin = styled.div`
  width: 100%;
  height: 94px;
`;

const ContentBox = styled.div`
  padding: 16px 24px 0;
  display: flex;
  justify-content: space-between;

  .join-fee {
    display: flex;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #3733ff;
    align-items: center;

    .typo-unit {
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #3733ff;
    }
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  height: 94px;
  width: 100%;
  background: #ffffff;
  border-top: 0.1px solid rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-width: 768px;
`;

const AptosLogo = styled(Aptos)`
  margin: 0 4px 0 3px;
  width: 13px;
  height: 13px;

  g {
    fill: #3733ff;
  }
`;
