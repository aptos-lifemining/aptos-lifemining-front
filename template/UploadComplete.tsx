import React from 'react';

import styled, { keyframes } from 'styled-components';
import ProfileIcon from '../components/ProfileIcon';

import Hand from '../public/svg/shake_hand.svg';

export default function UploadCompleteTemplate() {
  return (
    <Container>
      <ContentWrapper>
        <HandIcon />
        <div className="success-title">
          The great
          <br />
          first step!
        </div>
        <div className="success-sub">Challenge authentication completed! </div>
        <div className="challenge-category">Work out! 3 weeks challenge 🥋🥋</div>
        <ProfileIconContainer>
          <div className="first-profile">
            <ProfileIcon src="/img/sample.png" size={64} borderSize={1.5} />
            <div className="day">day1</div>
          </div>
          <div className="second-profile">
            <ProfileIcon src="/img/sample.png" size={64} borderSize={1.5} />
            <div className="day">day1</div>
          </div>
          <div className="third-profile">
            <ProfileIcon src="/img/sample.png" size={64} borderSize={1.5} />
            <div className="day">day1</div>
          </div>
        </ProfileIconContainer>
      </ContentWrapper>
    </Container>
  );
}

const moveUp = keyframes`
  from {
    
  }

  to {
    transform: translateY(-212px);
  }
`;

const fadeIn = keyframes`
  from {
  }

  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .success-title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
    animation: ${moveUp} 1.5s 0.5s ease-in-out forwards;
    position: absolute;
    top: 356px;
  }

  .success-sub {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #a3a3a3;
    opacity: 0;
    animation: ${fadeIn} 0.5s 2s ease-in-out forwards;
    position: absolute;
    top: 238px;
  }

  .challenge-category {
    position: absolute;
    width: 212px;
    height: 35px;
    background: #262626;
    border-radius: 24px;
    top: 269px;
    opacity: 0;
    animation: ${fadeIn} 0.5s 2s ease-in-out forwards;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #ffffff;
  }
`;

const HandIcon = styled(Hand)`
  position: absolute;
  top: 256px;
  animation: ${moveUp} 1.5s 0.5s ease-in-out forwards;
`;

const ProfileIconContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 341px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .first-profile {
    opacity: 0;
    animation: ${fadeIn} 0.5s 2.5s ease-in-out forwards;
    padding: 0 0 15px;

    .day {
      font-family: InterTight;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      animation: ${fadeIn} 0.5s 2.5s ease-in-out forwards;
      padding: 8px 0 0;
    }
  }

  .second-profile {
    opacity: 0;
    animation: ${fadeIn} 0.5s 2.75s ease-in-out forwards;
    padding: 0 0 15px;

    .day {
      font-family: InterTight;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      animation: ${fadeIn} 0.5s 2.75s ease-in-out forwards;
      padding: 8px 0 0;
    }
  }

  .third-profile {
    opacity: 0;
    animation: ${fadeIn} 0.5s 3s ease-in-out forwards;
    padding: 0 0 15px;

    .day {
      font-family: InterTight;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      text-align: center;
      color: #ffffff;
      opacity: 0;
      animation: ${fadeIn} 0.5s 3s ease-in-out forwards;
      padding: 8px 0 0;
    }
  }
`;
