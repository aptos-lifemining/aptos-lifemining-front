import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import BorderButton from '../components/BorderButton';
import BottomSheet from '../components/BottomSheet';

import Logo from '../public/svg/lifemining_logo.svg';

export default function SplashTemplate() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <SplashContainer>
        <LogoIcon />
      </SplashContainer>
    </React.Fragment>
  );
}

const SplashContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoIcon = styled(Logo)`
  width: 206px;
  height: 48px;
`;

const WelcomeConatiner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/img/sample2.png');
  background-size: cover;
  background-position: center;
`;

const RegistrationContainer = styled.div`
  padding: 0px 24px 0;

  .title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    padding: 24px 0 0;
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .login {
    width: 312px;
    height: 48px;
    background: #e4e4e4;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Inter Tight';
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
`;
