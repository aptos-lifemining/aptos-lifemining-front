import React from 'react';

import styled from 'styled-components';

export default function CreateChallenge() {
  return (
    <Container>
      <div className="description">
        Can't you see the challenge you're looking for?
        <br /> Become a challenge leader and make it yourself
      </div>
      <div className="create-challenge-button">
        <div className="create-challenge-button-text">Create Challenge</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 32px 24px 22px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .description {
    font-family: InterTight;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #000000;
    text-align: center;
  }

  .create-challenge-button {
    width: 136px;
    height: 31px;
    border-radius: 24px;
    position: relative;
    background-color: transparent;
    border: 1px solid #000000;
    margin: 22px 0 0px;
  }

  .create-challenge-button-text {
    width: 132px;
    height: 27px;
    top: 1px;
    left: 1px;
    position: absolute;
    background-color: #000000;
    border-radius: 24px;

    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;
