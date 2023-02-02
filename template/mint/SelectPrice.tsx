import Image from 'next/image';
import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import BorderButton from '../../components/BorderButton';
import HeaderNavigation from '../../components/HeaderNavigation';
import { MintDataContext } from '../../context/LiftMintContext';
import { StepContext } from '../../pages/life_mint';

import ArrowRight from '../../public/svg/arrow_right.svg';
import Aptos from '../../public/svg/aptos.svg';

export default function SelectPriceTemplate() {
  const { step, setStep } = useContext(StepContext);
  const { mintData, setMintData } = useContext(MintDataContext);

  const handleClickCard = () => {
    //TODO: ChallengeCateoryContext
    setStep((prev: number) => prev + 1);
  };

  return (
    <Container>
      <HeaderNavigation position="relative" title="Set the Name" titleColor="#ffffff" />
      <ContentContainer>
        <div className="image-wrapper">
          <Image src="/img/sample.png" width={75} height={138} alt="" />
        </div>
        <div className="challenge-info">
          <div className="name">Challenge Name</div>
          <div className="description">Challenge Description</div>
          <div className="days">Days Left: 10</div>
        </div>
      </ContentContainer>
      <InputContainer>
        <div className="price">
          <input
            type="number"
            placeholder="Set the Price"
            onChange={(e) => {
              console.log(e.target.value);
              setMintData({ ...mintData, nftPrice: e.target.value });
            }}
          />
          <div className="unit">
            <AptosLogo />
            APT
          </div>
        </div>
        <div className="typo-estimate">
          Estimated Receipt at Sale
          <div style={{ fontSize: 16, marginTop: 10 }}>
            {mintData.nftPrice ? Number(mintData.nftPrice) * 0.9 : '--'}
          </div>
        </div>
        {mintData.nftPrice && <div className="typo-noti">0.1% fee is incurred.</div>}
      </InputContainer>
      <ButtonWrapper>
        <BorderButton
          width={312}
          height={55}
          buttonColor={mintData.nftPrice ? 'rgba(55, 51, 255, 1)' : 'rgba(55, 51, 255, .5)'}
          textColor={mintData.nftPrice ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, .5)'}
          textSize={16}
          onClick={() => {
            mintData.nftPrice && setStep((prev: any) => prev + 1);
          }}
        >
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

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 30px 24px 0;

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
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 62px 0 0;

  .price {
    position: relative;
    width: 100%;
    padding: 20px 24px 10px;

    .unit {
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #000000;
      display: flex;
      align-items: center;

      position: absolute;
      right: 40px;
      top: 40px;
      padding-bottom: 2px;

      font-family: InterTight;
      font-style: normal;
      font-weight: 700;
      font-size: 8px;
      line-height: 10px;
      color: #ffffff;
    }

    input[type='number'] {
      background-color: transparent;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline-style: none;

      border: 2px solid rgba(255, 255, 255, 0.2);

      width: 100%;
      height: 56px;
      border-radius: 16px;
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #ffffff;

      padding: 0 15px 0 15px;

      :focus {
        border: 2px solid #ffffff;
      }

      ::placeholder {
        font-family: InterTight;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.02em;
        color: #ffffff;

        opacity: 0.3;
      }
    }
  }

  .typo-estimate {
    width: 100%;
    padding: 22px 24px;
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    color: #ffffff;
    opacity: 1;
  }

  .typo-noti {
    width: 100%;
    padding: 24px 24px;
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: left;
    color: #ffffff;
    opacity: 0.5;
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
  justify-content: center;
  background-color: #000000;
`;

const AptosLogo = styled(Aptos)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;
