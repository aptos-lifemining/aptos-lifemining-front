import React, { useEffect } from 'react';

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import styled from 'styled-components';

import BorderButton from '../components/BorderButton';
import BottomNavigation from '../components/BottomNavigation';
import BottomSheet from '../components/BottomSheet';
import Challenges from '../components/Challenges';
import CreateChallenge from '../components/CreateChallenge';
import DefaultLayout from '../components/DefaultLayout';
import Header from '../components/Header';
import Stories from '../components/Stories';
import { Challenge } from '../entity/challenge';
import { User } from '../entity/user';
import Logo from '../public/svg/lifemining_logo.svg';

interface Props {
  challenges: Challenge[];
  users: User[];
}

export default function HomeTemplate({ challenges, users }: Props) {
  const { connect, account, connected, wallets } = useWallet();
  const petraWallet = wallets[0];

  const handleWalletConnect = async () => {
    connect(petraWallet.name);
  };

  useEffect(() => {
    if (connected) {
      sessionStorage.setItem('wallet_address', account.address);
    }
  }, [connected]);

  return (
    <DefaultLayout>
      {connected ? (
        <>
          <Header />
          <Stories users={users} />
          <Challenges
            challenges={challenges.filter((obj) => obj.type === 'develop')}
            title="Develop 🧑‍💻"
          />
          <Challenges
            challenges={challenges.filter((obj) => obj.type === 'excercise')}
            title="Excercise 🏃‍♀️"
          />
          <Challenges challenges={challenges.filter((obj) => obj.type === 'art')} title="Art 👩‍🎨" />
          <CreateChallenge />
          <BottomNavigation />
        </>
      ) : (
        <>
          <WelcomeConatiner></WelcomeConatiner>
          <BottomSheet>
            <RegistrationContainer>
              <SmallLogo />
              <div className="title">
                Challenge, Certify and Collect
                <br />
                Start you life mining today
              </div>
              <div className="button-container">
                <BorderButton
                  onClick={handleWalletConnect}
                  buttonColor="rgba(55, 51, 255, 1)"
                  width={308}
                  height={51}
                  margin="31px 0 18px"
                  textSize={16}
                >
                  Connect the wallet
                </BorderButton>
              </div>
            </RegistrationContainer>
          </BottomSheet>
        </>
      )}
    </DefaultLayout>
  );
}

const WelcomeConatiner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/img/aaa.gif');
  background-size: cover;
  background-position: center;
`;

const RegistrationContainer = styled.div`
  padding: 16px 24px 0;

  .title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    padding: 12px 0 0;
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 0px;
  }

  .login {
    width: 312px;
    height: 48px;
    background: #e4e4e4;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
`;

const SmallLogo = styled(Logo)`
  width: 124px;
  height: 28px;
  margin-bottom: 10px;
`;
