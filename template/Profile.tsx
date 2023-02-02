import Image from 'next/image';
import React from 'react';

import styled, { css } from 'styled-components';
import BorderButton from '../components/BorderButton';
import BottomSheet from '../components/BottomSheet';

export default function ProfileTemplate() {
  return (
    <Container>
      <div className="background"></div>
      <BottomSheet>
        <SheetContent>
          <div className="edit">Edit</div>
          <ProfileContainer>
            <div className="image-wrapper">
              <Image src={'/img/sample.png'} width={64} height={64} alt="" />
            </div>
            <div className="name">@wlejfliwejf</div>
            <div className="description">I'm a developer</div>
            <BorderButton width={101} height={41} buttonColor="#3733FF;">
              Life NFT
            </BorderButton>
            <div className="follower-box">
              <div className="content">
                <div className="number">1,000</div>
                <div className="unit">Followers</div>
              </div>
              <div className="content">
                <div className="number">1,000</div>
                <div className="unit">Followers</div>
              </div>
              <div className="content">
                <div className="number">1,000</div>
                <div className="unit">Followers</div>
              </div>
            </div>
          </ProfileContainer>
          <ChallengesConatiner>
            <ChallengeCard>
              <div className="head-flex-box">
                <div className="challenge-name">
                  <div className="challenge-title">2023 Aptos Hackathon</div>
                  <div className="detail">View detail</div>
                </div>
                <BorderButton width={72} height={31}>
                  Claim
                </BorderButton>
              </div>
              <ProgressContainer divideNum={3}>
                <div className="progress-bar-filled" />
                <div className="progress-bar-filled" />
                <div className="progress-bar" />
              </ProgressContainer>
              <div className="typo-days">3 Days</div>
            </ChallengeCard>
            <ChallengeCard>
              <div className="head-flex-box">
                <div className="challenge-name">
                  <div className="challenge-title">2023 Aptos Hackathon</div>
                  <div className="detail">View detail</div>
                </div>
                <BorderButton width={72} height={31}>
                  Claim
                </BorderButton>
              </div>
              <ProgressContainer divideNum={3}>
                <div className="progress-bar-filled" />
                <div className="progress-bar-filled" />
                <div className="progress-bar" />
              </ProgressContainer>
              <div className="typo-days">3 Days</div>
            </ChallengeCard>
            <ChallengeCard>
              <div className="head-flex-box">
                <div className="challenge-name">
                  <div className="challenge-title">2023 Aptos Hackathon</div>
                  <div className="detail">View detail</div>
                </div>
                <BorderButton width={72} height={31}>
                  Claim
                </BorderButton>
              </div>
              <ProgressContainer divideNum={3}>
                <div className="progress-bar-filled" />
                <div className="progress-bar-filled" />
                <div className="progress-bar" />
              </ProgressContainer>
              <div className="typo-days">3 Days</div>
            </ChallengeCard>
          </ChallengesConatiner>
        </SheetContent>
      </BottomSheet>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;

  .background {
    height: 100%;
    width: 100%;
    background-image: url('/img/sample2.png');
    background-size: cover;
    background-position: center;
  }
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
    border-bottom: 0.1px solid #000000;
    border-top: 0.1px solid #000000;

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
