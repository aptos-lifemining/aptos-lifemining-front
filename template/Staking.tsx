import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styled, { css, keyframes } from 'styled-components';

import AptosUnit from '../components/AptosUnit';
import BorderButton from '../components/BorderButton';
import BottomJoinCTA from '../components/BottomJoinCTA';
import DefaultLayout from '../components/DefaultLayout';
import HeaderNavigation from '../components/HeaderNavigation';
import ProfileIcon from '../components/ProfileIcon';
import { division } from '../util/list';
import Router, { useRouter } from 'next/router';
import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { AptosClient, Types } from 'aptos';
import Aptos from '../public/svg/aptos.svg';
import Peace from '../public/svg/peace.svg';

const aptosClient = new AptosClient(process.env.NEXT_PUBLIC_APTOS_NODE_ADDRESS);

export default function StakingTemplate() {
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

  const handleSignStaking = async () => {
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

  useEffect(() => {
    // connect(wallets[0]?.name);
    console.log(account);
    console.log(connected);
    if (connected) {
      handleSignStaking();
    }
  }, []);

  return (
    <DefaultLayout>
      <HeaderNavigation stroked position="relative" />
      <ContentContainer>
        <div className="title">Staking →</div>
        <div className="price">
          2.50
          <AptosIcon />
          <div style={{ fontSize: 24, fontWeight: 400 }}>APT</div>
        </div>
        <div className="noti">Refund upon completion of staking</div>
        <div className="after-claim">2.80 APT</div>
        <div className="icon-wrapper">
          <PeaceIcon />
        </div>
      </ContentContainer>
    </DefaultLayout>
  );
}

const ContentContainer = styled.div`
  padding: 20px 24px 0;

  .title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
  }

  .price {
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
    margin-top: 16px;
  }

  .noti {
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: #000000;
    padding-top: 20px;
  }

  .after-claim {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding-top: 10px;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  }
`;

const AptosIcon = styled(Aptos)`
  width: 28px;
  height: 28px;
  margin: 0 6px 0;
  g {
    fill: #000;
  }
`;

const PeaceIcon = styled(Peace)`
  width: 170px;
  height: 170px;
`;
