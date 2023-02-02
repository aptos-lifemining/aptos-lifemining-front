import React from 'react';
import styled from 'styled-components';

import Peace from '../public/svg/peace.svg';
import Aptos from '../public/svg/aptos.svg';
import Gift from '../public/svg/gift.svg';
import BorderButton from '../components/BorderButton';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';

export default function JoinCompleteTemplate() {
  const router = useRouter();
  const { name, fee, handler } = router.query;

  return (
    <Container>
      <TextContainer>
        <PeaceIcon />
        <div className="complete">
          Here is...
          <br />
          New Challenger!
        </div>
        <div className="sub">NFT minting complete!</div>
      </TextContainer>
      <CardContainer>
        <ChallengeCard>
          <Image className="card-img" src={'/img/sample.png'} width={180} height={240} alt="" />
          <div className="background">
            <div className="challenge-title">{name}</div>
            <div className="challenge-fee">
              {fee}
              <AptosLogo />
              <div className="typo-unit">APT</div>
            </div>
            <div className="leader-profile">
              <LeaderProfile>
                <div className="circle">
                  <Image src={'/img/sample.png'} width={14} height={14} alt="" />
                </div>
                <div className="leader-nickname">@{handler}</div>
              </LeaderProfile>
            </div>
          </div>
        </ChallengeCard>
      </CardContainer>
      <ButtonWrapper>
        <div
          className="home"
          onClick={() => {
            Router.push('/');
          }}
        >
          Home
        </div>
        <BorderButton
          width={188}
          height={44}
          buttonColor="rgba(55, 51, 255, 1)"
          textColor="#ffffff"
          textSize={16}
          onClick={() => {
            Router.replace('/profile');
          }}
        >
          <GiftIcon />
          Go to Profile
        </BorderButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 44px 0 32px;

  .complete {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #000000;
    padding-bottom: 16px;
  }

  .sub {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #a3a3a3;
  }
`;

const ButtonWrapper = styled.div`
  z-index: 20;
  width: 100%;
  height: 109px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 30px;

  .home {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 48px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 24px;
  }
`;

const PeaceIcon = styled(Peace)`
  width: 100px;
  height: 100px;
`;

const AptosLogo = styled(Aptos)`
  margin: 0 4px 0 3px;
  width: 13px;
  height: 13px;
`;

const GiftIcon = styled(Gift)`
  width: 20px;
  height: 20px;
  path {
    stroke: #ffffff;
  }
  margin-right: 6px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ChallengeCard = styled.div`
  width: 180px;
  height: 240px;
  position: relative;
  border-radius: 24px;
  margin-right: 12px;

  img {
    border-radius: 24px;
    position: relative;
    object-fit: cover;
  }

  .background {
    position: absolute;
    border-radius: 24px;
    top: 0;
    left: 0;
    width: 180px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%);
  }

  .challenge-title {
    z-index: 2;
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    padding: 141px 0 10px 12px;
  }

  .challenge-fee {
    display: flex;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    padding: 0 0 10px 12px;
    align-items: center;

    .typo-unit {
      font-family: InterTight;
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      color: #ffffff;
    }
  }

  .leader-profile {
    padding: 0 12px;
  }
`;

const LeaderProfile = styled.div`
  display: flex;
  align-items: center;

  .circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;

    :before {
      content: '';
      width: 16px;
      height: 16px;
      position: absolute;
      z-index: -1;
      inset: 0;
      padding: 1px;
      border-radius: 50%;
      background: linear-gradient(to right top, rgba(86, 174, 255, 1), rgba(0, 26, 255, 1));
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }

  img {
    position: absolute;
    left: 2px;
    top: 2px;
    object-fit: cover;
    z-index: 1;
  }

  .leader-nickname {
    font-family: InterTight;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    color: #ffffff;
    z-index: 1;
    padding-left: 8px;
  }
`;
