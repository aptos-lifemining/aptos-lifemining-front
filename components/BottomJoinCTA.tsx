import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { AptosClient, Types } from 'aptos';
import Router, { useRouter } from 'next/router';
import React, { useState } from 'react';

import styled from 'styled-components';
import Aptos from '../public/svg/aptos.svg';
import BorderButton from './BorderButton';

const aptosClient = new AptosClient(process.env.NEXT_PUBLIC_APTOS_NODE_ADDRESS);

export default function BottomJoinCTA({ challenge }: any) {
  const router = useRouter();
  // const challengeID = router.query.id;
  const challengeID = '0x00123';
  // const hostAddress = router.query['host_address'];
  const hostAddress = '470ea80201980ec4f5fa86239a14e4ce36c73f502908edd81292e57da4a77359';

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

  const signStaking = async () => {
    const payload: Types.TransactionPayload = {
      type: 'entry_function_payload',
      function: `${process.env.NEXT_PUBLIC_CONTRACT_RESOURCE_ADDRESS}::Challenge::join_challenge`,
      type_arguments: [],
      arguments: [hostAddress, challengeID],
    };
    try {
      const response = await signAndSubmitTransaction(payload);
      console.log(response);
      // if you want to wait for transaction
      await aptosClient.waitForTransaction(response?.hash || '');
      console.log(response?.hash);
    } catch (error: any) {
      console.log('error', error);
    }
  };

  const handleJoinButtonClicked = async () => {
    const payload: Types.TransactionPayload = {
      type: 'entry_function_payload',
      function: `${process.env.NEXT_PUBLIC_CONTRACT_RESOURCE_ADDRESS}::Challenge::join_challenge`,
      type_arguments: [],
      arguments: [hostAddress, challengeID],
    };
    try {
      const response = await signAndSubmitTransaction(payload);
      console.log(response);
      // if you want to wait for transaction
      await aptosClient.waitForTransaction(response?.hash || '');

      if (response?.hash) {
        router.push(
          `/join_complete?name=${challenge.title}?fee=${challenge.stakingAPT}?handler=${challenge.creater.handle}`,
        );
      }
    } catch (error: any) {
      console.log('error', error);
    }
  };

  return (
    <React.Fragment>
      <FixedMargin />
      <BottomBar>
        <ContentBox>
          <div className="join-fee">
            2.50
            <AptosLogo />
            <div className="typo-unit">APT</div>
          </div>
          <BorderButton
            width={180}
            height={33}
            borderRadius={24}
            buttonColor="#3733ff"
            textColor="#ffffff"
            onClick={handleJoinButtonClicked}
          >
            Join now!
          </BorderButton>
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
