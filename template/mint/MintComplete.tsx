import Image from 'next/image';
import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import BorderButton from '../../components/BorderButton';
import HeaderNavigation from '../../components/HeaderNavigation';
import { MintDataContext } from '../../context/LiftMintContext';
import { StepContext } from '../../pages/life_mint';

import Peace from '../../public/svg/peace.svg';
import Aptos from '../../public/svg/aptos.svg';
import Gift from '../../public/svg/gift.svg';
import Router from 'next/router';

export default function MintCompleteTemplate() {
  const { step, setStep } = useContext(StepContext);
  const { mintData, setMintData } = useContext(MintDataContext);

  const handleClickCard = () => {
    //TODO: ChallengeCateoryContext
    setStep((prev: number) => prev + 1);
  };

  return (
    <Container>
      <TextContainer>
        <PeaceIcon />
        <div className="complete">
          Someone wants to
          <br />
          live your life!
        </div>
        <div className="sub">NFT minting complete!</div>
      </TextContainer>
      <ContentContainer>
        <div className="image-wrapper">
          <Image src="/img/sample.png" width={75} height={138} alt="" />
        </div>
        <div className="challenge-info">
          <div className="name">Challenge Name</div>
          <div className="description">Challenge Description</div>
          <div className="days">Days Left: 10</div>
          <div className="price">
            {mintData.nftPrice || '2.00'}
            <AptosLogo />
            <div style={{ fontSize: 12 }}>APT</div>
          </div>
        </div>
      </ContentContainer>

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
            Router.replace('/nft_shop');
          }}
        >
          <GiftIcon />
          Mint the Life!
        </BorderButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #000000;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 44px 0 103px;

  .complete {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
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

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0px 24px 0;

  .image-wrapper {
    margin-right: 20px;

    img {
      object-fit: cover;
      border-radius: 10px;
    }
  }

  .challenge-info {
    .name {
      font-family: InterTight;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
      padding: 0 0 16px;
    }

    .description {
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      opacity: 0.5;
      padding: 0 0 8px;
    }

    .days {
      font-family: InterTight;
      font-style: italic;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
    }
  }

  .price {
    display: flex;
    align-items: center;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
    margin-top: 16px;
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
  background-color: #000000;
  padding: 0 30px;

  .home {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 108px;
    height: 48px;
    background: #262626;
    border-radius: 24px;
  }
`;

const PeaceIcon = styled(Peace)`
  width: 100px;
  height: 100px;
`;

const AptosLogo = styled(Aptos)`
  width: 16px;
  height: 16px;
  margin: 0 4px 0;
`;

const GiftIcon = styled(Gift)`
  width: 20px;
  height: 20px;
  path {
    stroke: #ffffff;
  }
  margin-right: 6px;
`;
