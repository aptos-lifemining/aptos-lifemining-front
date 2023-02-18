import React, { useEffect } from 'react';
import Image from 'next/image';
import Router from 'next/router';

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { Types } from 'aptos';
import styled, { css } from 'styled-components';

import BorderButton from '../components/BorderButton';
import BottomNavigation from '../components/BottomNavigation';
import BottomSheet from '../components/BottomSheet';
import { aptosClient } from '../network/aptos';
import HttpClient from '../network/httpClient';
import ChallengeRepositoryImpl from '../repository/challenge';
import UserRepositoryImpl from '../repository/user';
import ChallengeUseCase from '../usecase/challenge';
import UserUseCase from '../usecase/user';

export default function ProfileTemplate() {
  const {
    connect,
    account,
    network,
    connected,
    disconnect,
    wallet,
    wallets,
    signAndSubmitTransaction,
    signTransaction,
    signMessage,
  } = useWallet();

  // useState user
  const [user, setUser] = React.useState({
    id: 1,
    handle: 'june',
    profileImageUrl:
      'https://dev-static-files.uzumeta.com/lifemining/profile-images/사무실_앞모습_정방형.jpg',
    roomImageUrl: '',
    address: '0xb8542ced3b91535ec569a537a7eff91bec498f25bca349473b6e2856529787bas',
    description: 'Hello, world! I am june.',
  });

  const [totalRecords, setTotalRecords] = React.useState([]);
  const [isUpdatedRoom, setIsUpdatedRoom] = React.useState(false);

  async function getRecords() {
    const recordsResponse = await new ChallengeUseCase(
      new ChallengeRepositoryImpl(HttpClient),
    ).getTotalRecords();
    console.log('recordsResponse >>>>>>> ', recordsResponse);
    setTotalRecords(recordsResponse);
  }

  async function getUser() {
    const userResponse = await new UserUseCase(new UserRepositoryImpl(HttpClient)).getUser();
    console.log('userResponse >>>>>>> ', userResponse);
    setUser(userResponse);
  }

  // useEffect
  useEffect(() => {
    getUser();
    getRecords();
  }, []);

  const handleClaim = async (id: number) => {
    try {
      const hostInfoResponse = await new ChallengeUseCase(
        new ChallengeRepositoryImpl(HttpClient),
      ).getChallenge(id);

      const serverResponse = await new ChallengeUseCase(
        new ChallengeRepositoryImpl(HttpClient),
      ).claim(id);
      console.log('response >>>>>>> ', serverResponse);
      console.log('hostAddress >>>>>>> ', hostInfoResponse);
      console.log('id >>>>>>> ', id);

      if (serverResponse && hostInfoResponse) {
        // aptos join
        const payload: Types.TransactionPayload = {
          type: 'entry_function_payload',
          function: `${process.env.NEXT_PUBLIC_CONTRACT_RESOURCE_ADDRESS}::Challenge::claim_for_challenge_reward`,
          type_arguments: [],
          arguments: [hostInfoResponse.creator.address, String(id)],
        };
        const response = await signAndSubmitTransaction(payload);
        console.log(response);
        // if you want to wait for transaction
        await aptosClient.waitForTransaction(response?.hash || '');
        if (response?.hash) {
          getUser();
          getRecords();
        }
      }
    } catch (err) {
      console.log('error', err);
    }
  };

  return (
    <Container roomImageUrl={isUpdatedRoom ? '' : ''}>
      <div className="background">
        {totalRecords?.filter((record) => record.claimable).length > 0 && (
          <ButtonContainer>
            <BorderButton
              width={181}
              height={41}
              buttonColor="#000000"
              onClick={async () => {
                setUser(await new UserUseCase(new UserRepositoryImpl(HttpClient)).upgradeUser());
              }}
            >
              Upgrade My room
            </BorderButton>
          </ButtonContainer>
        )}
      </div>
      <BottomSheet>
        <SheetContent>
          <div className="edit">Edit</div>
          <ProfileContainer>
            <div className="image-wrapper">
              <Image src={user.profileImageUrl} width={64} height={64} alt="" />
            </div>
            <div className="name">@{user.handle}</div>
            <div className="description">{user.description}</div>
            <BorderButton
              width={101}
              height={41}
              buttonColor="#3733FF"
              onClick={() => {
                Router.push('life_mint');
              }}
            >
              Mine Life.
            </BorderButton>
            <div className="follower-box">
              <div className="content">
                <div className="number">128</div>
                <div className="unit">Day Logs</div>
              </div>
              <div className="content">
                <div className="number">4</div>
                <div className="unit">Created Challenges</div>
              </div>
              <div className="content">
                <div className="number">102</div>
                <div className="unit">Joiners</div>
              </div>
            </div>
          </ProfileContainer>
          <ChallengesConatiner>
            {totalRecords.map((record) => (
              <ChallengeCard>
                <div className="head-flex-box">
                  <div className="challenge-name">
                    <div className="challenge-title">{record.challenge.title}</div>
                    <div
                      className="detail"
                      onClick={() => {
                        Router.push(`challenge/${record.challenge.id}`);
                      }}
                    >
                      View detail
                    </div>
                  </div>
                  <BorderButton
                    width={72}
                    height={31}
                    buttonColor="#000000"
                    disabled={!record.claimable}
                    onClick={() => handleClaim(record.challenge.id)}
                  >
                    {record.claimed ? 'Claimed' : 'Claim'}
                  </BorderButton>
                </div>
                <ProgressContainer divideNum={3}>
                  {Array.from({ length: record.participationDays }, () => 0).map(() => (
                    <div className="progress-bar-filled" />
                  ))}
                  {Array.from(
                    { length: record.challenge.totalDays - record.participationDays },
                    () => 0,
                  ).map(() => (
                    <div className="progress-bar" />
                  ))}
                </ProgressContainer>
                <div className="typo-days">
                  {record.participationDays}/{record.challenge.totalDays}
                </div>
              </ChallengeCard>
            ))}
          </ChallengesConatiner>
        </SheetContent>
      </BottomSheet>
    </Container>
  );
}

const Container = styled.div<{ roomImageUrl: string }>`
  height: 100vh;
  width: 100%;

  .background {
    height: calc(100% - 250px); // 100% - 270px
    width: 100%;
    background-image: url(${({ roomImageUrl }) => roomImageUrl});
    background-size: cover;
    background-position: center;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 286px;
`;

const SheetContent = styled.div`
  width: 100%;

  .edit {
    display: flex;
    justify-content: end;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
    color: #56aeff;
    padding: 0 24px 0;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-wrapper {
    padding: 5px 0 0;
    img {
      border-radius: 50%;
    }
  }

  .name {
    padding: 8px 0 0;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #000000;
  }

  .description {
    padding: 8px 0 18px;
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    opacity: 0.5;
  }

  .follower-box {
    width: 100%;
    padding: 0 24px 0;
    margin-top: 30px;
    display: flex;
    height: 72px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
    border-top: 0.1px solid rgba(0, 0, 0, 0.1);

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .number {
        font-family: InterTight;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #000000;
      }

      .unit {
        font-family: InterTight;
        font-family: 'Inter Tight';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #000000;
        opacity: 0.5;
      }
    }
  }
`;

const ChallengesConatiner = styled.div`
  width: 100%;
  padding: 36px 0 0;

  .title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    text-align: left;
    color: #000000;
    padding: 0 24px 16px;
  }
`;

const ChallengeCard = styled.div`
  margin: 0 24px 8px;
  background: #f4f4f4;
  border-radius: 20px;
  padding: 16px;

  .head-flex-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .challenge-name {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */

      .challenge-title {
        font-family: InterTight;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      }

      .detail {
        font-family: InterTight;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        opacity: 0.5;
        padding-top: 8px;
      }
    }
  }

  .typo-days {
    font-family: InterTight;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #000000;
    padding: 16px 0 0;
  }
`;

const ProgressContainer = styled.div<{ divideNum: number }>`
  display: flex;
  justify-content: space-between;
  padding: 16px 0 0;

  .progress-bar-filled {
    margin: 0 2px 0;
    height: 2.5px;
    background: #000000;
    ${({ divideNum }) =>
      css`
        width: ${100 / divideNum}%;
      `}
  }

  .progress-bar {
    margin: 0 2px 0;
    height: 2.5px;
    background: #000000;
    opacity: 0.1;
    ${({ divideNum }) =>
      css`
        width: ${100 / divideNum}%;
      `}
  }
`;
