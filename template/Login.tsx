import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Router from 'next/router';

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import styled from 'styled-components';

import BorderButton from '../components/BorderButton';
import HeaderNavigation from '../components/HeaderNavigation';
import HttpClient from '../network/httpClient';
import UserRepositoryImpl from '../repository/user';
import UserUseCase from '../usecase/user';
import Hand from '../public/svg/hand.svg';
import BottomSheet from '../components/BottomSheet';
import Logo from '../public/svg/lifemining_logo.svg';

const CONNECT_STEP = 0;
const SIGN_UP_STEP = 1;
const COMPLETE_STEP = 2;

export default function LoginTemplate() {
  const { connect, wallets } = useWallet();

  const petraWallet = wallets[0];
  const [loginStep, setLoginStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [profileDescription, setProfileDescription] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [profileImageUrl, setprofileImageUrl] = useState(null);

  // useEffect(() => {
  //   if (connected) {
  //     console.log('connected');
  //     setLoginStep(SIGN_UP_STEP);
  //     setWalletAddress(account.address);
  //   }
  // }, [connected]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setprofileImageUrl(reader.result as string);
      setProfileImageFile(file);
    };

    reader.readAsDataURL(file);
  };

  const handleCreateProfile = async () => {
    const res = await new UserUseCase(new UserRepositoryImpl(HttpClient)).registerUser(
      userName,
      walletAddress,
      profileDescription,
      profileImageFile,
    );
    console.log(res);
    res ? setLoginStep((prev) => prev + 1) : alert('failed');
  };

  const handleWalletConnect = async () => {
    connect(petraWallet.name);
  };

  return (
    <React.Fragment>
      {loginStep === CONNECT_STEP && (
        <>
          <Container>
            <WelcomeConatiner></WelcomeConatiner>
            <BottomSheet>
              <RegistrationContainer>
                <SmallLogo />
                <div className="title">
                  <div style={{ fontWeight: 700 }}>Lifemining</div>
                  Live Someone's Life.
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
          </Container>
        </>
      )}
      {loginStep === SIGN_UP_STEP && (
        <>
          <HeaderNavigation position="relative" stroked title="Create profile" />
          <Container>
            <ProfileContainer>
              <div className="image-wrapper">
                {profileImageUrl ? (
                  <Image src={profileImageUrl} width={136} height={136} alt="" />
                ) : (
                  <Image src="/img/gray.png" width={136} height={136} alt="" />
                )}
              </div>
              <label htmlFor="upload-input">
                <div className="image-upload">Upload image</div>
              </label>
              <input
                id="upload-input"
                type="file"
                onChange={handleFileChange}
                accept=" image/gif, image/jpeg, image/png"
                style={{
                  display: 'none',
                }}
              />
            </ProfileContainer>
            <InputContainer>
              <div className="name">
                <div className="handler-sign">@</div>
                <input
                  type="text"
                  placeholder="UserName"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUserName(e.target.value);
                  }}
                />
              </div>
              <div className="description">
                <input
                  type="text"
                  placeholder="Profile Description"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setProfileDescription(e.target.value);
                  }}
                />
              </div>
            </InputContainer>
            <ButtonWrapper>
              <BorderButton
                onClick={() => {
                  handleCreateProfile();
                }}
                width={308}
                height={51}
                textSize={16}
                disabled={userName === '' || profileDescription === '' || profileImageFile === null}
              >
                Create profile
              </BorderButton>
            </ButtonWrapper>
          </Container>
        </>
      )}
      {loginStep === COMPLETE_STEP && (
        <>
          <Container>
            <CompleteContainer>
              <div className="image-wrapper">
                <Image src={profileImageUrl || '/img/sample.png'} width={64} height={64} alt="" />
              </div>
              <div className="welcome">
                <div style={{ fontWeight: 500 }}>Welcome,</div>@{userName || 'wlejfliwejf'}
              </div>
              <div className="icon-wrapper">
                <HandIcon />
              </div>
            </CompleteContainer>
            <ButtonWrapper>
              <div className="term">
                When the subscription process is completed by pressing the button below,
                <br />
                you agree to Lifemining's Terms of Service and Privacy Policy.
              </div>
              <BorderButton
                onClick={() => {
                  Router.push('/');
                }}
                width={308}
                height={51}
                textSize={16}
                buttonColor="#3733FF;"
              >
                Mine Your Life!
              </BorderButton>
            </ButtonWrapper>
          </Container>
        </>
      )}
    </React.Fragment>
  );
}

const Container = styled.div`
  /* top: 100px; */
`;

const ButtonWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .term {
    font-family: Inter Tight;
    font-style: normal;
    font-weight: 500;
    font-size: 8px;
    line-height: 10px;
    text-align: center;
    color: #000000;
    padding-bottom: 14px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0;

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.1);
    img {
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .image-upload {
    padding: 10px 0 0;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #56aeff;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 36px 0 0;

  .name {
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: center;

    .handler-sign {
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #000000;

      position: absolute;
      left: 40px;
      padding-bottom: 2px;
    }

    input[type='text'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline-style: none;

      border: 2px solid rgba(0, 0, 0, 0.1);

      width: 100%;
      height: 56px;
      border-radius: 20px;
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #000000;

      padding: 0 0 0 35px;

      /* ::before {
        content: '$';
        position: absolute;
        left: 10px;
        top: 10px;
      } */

      :focus {
        border: 2px solid #000000;
      }

      ::placeholder {
        font-family: InterTight;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.02em;
        color: #000000;
        padding: 0 10px 0 0;
        opacity: 0.3;
      }
    }
  }

  .description {
    width: 100%;
    padding: 20px 24px;
    input[type='text'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline-style: none;

      border: 2px solid rgba(0, 0, 0, 0.1);

      width: 100%;
      height: 56px;
      border-radius: 16px;
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #000000;

      padding: 0 0 0 15px;

      :focus {
        border: 2px solid #000000;
      }

      ::placeholder {
        font-family: InterTight;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.02em;
        color: #000000;

        opacity: 0.3;
      }
    }
  }
`;

const CompleteContainer = styled.div`
  width: 100%;
  padding: 77px 24px 0;

  .image-wrapper {
    img {
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }

  .welcome {
    font-family: 'Inter Tight';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #000000;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    padding: 32px 0 0;
  }
`;

const HandIcon = styled(Hand)``;

const WelcomeConatiner = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url('/img/sample2.png');
  background-size: cover;
  background-position: center;
`;

const RegistrationContainer = styled.div`
  padding: 26px 24px 0;

  .title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
    padding: 24px 0 0;
  }

  .button-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
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
  margin-bottom: 10px;
`;
