import React, { useState } from 'react';

import styled from 'styled-components';
import HeaderNavigation from '../components/HeaderNavigation';

import ArrowRight from '../public/svg/arrow_right.svg';

const SELECT_CHALLENGE_STEP = 0;
const SELECT_CONTENT_STEP = 1;
const PREVIEW_STEP = 2;

export default function LifeMintTemplate() {
  const [mintStep, setMintStep] = useState(0);

  return (
    <Container>
      <HeaderNavigation title="Life Mint" titleColor="#ffffff" />
      <ContentContainer>
        <div className="username">Username</div>
        <div className="typo-select">
          Select your
          <br /> Challenge
        </div>
      </ContentContainer>
      <CardContainer>
        <div
          className="card"
          onClick={() => {
            setMintStep((prev) => prev + 1);
          }}
        >
          <div className="challenge-name">2023 Aptos Hackathon</div>
          <ArrowRightIcon />
        </div>
        <div
          className="card"
          onClick={() => {
            setMintStep((prev) => prev + 1);
          }}
        >
          <div className="challenge-name">2023 Aptos Hackathon</div>
          <ArrowRightIcon />
        </div>
      </CardContainer>
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
  padding: 168px 0 0;

  .username {
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    opacity: 0.5;
    padding: 0 24px 0;
  }

  .typo-select {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
    padding: 0 24px 0;
  }
`;

const CardContainer = styled.div`
  padding: 20px 24px 0;

  .card {
    width: 100%;
    min-height: 64px;
    background: #262626;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px 0;
    margin-bottom: 8px;

    .challenge-name {
      font-family: InterTight;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;

      color: #ffffff;
    }
  }
`;

const ArrowRightIcon = styled(ArrowRight)``;
