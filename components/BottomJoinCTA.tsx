import React, { useState } from 'react';

import styled from 'styled-components';
import Aptos from '../public/svg/aptos.svg';
import BorderButton from './BorderButton';

export default function BottomJoinCTA() {
  return (
    <React.Fragment>
      <FixedMargin />
      <BottomBar>
        <ContentBox>
          <div className="join-fee">
            2.50
            <AptosLogo />
            <div className="typo-unit">APT</div>
          </div>
          <BorderButton
            width={180}
            height={33}
            borderRadius={24}
            buttonColor="#3733ff"
            textColor="#ffffff"
          >
            Join now!
          </BorderButton>
        </ContentBox>
      </BottomBar>
    </React.Fragment>
  );
}

const FixedMargin = styled.div`
  width: 100%;
  height: 94px;
`;

const ContentBox = styled.div`
  padding: 16px 24px 0;
  display: flex;
  justify-content: space-between;

  .join-fee {
    display: flex;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #3733ff;
    align-items: center;

    .typo-unit {
      font-family: InterTight;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #3733ff;
    }
  }
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  height: 94px;
  width: 100%;
  background: #ffffff;
  border-top: 0.1px solid #000000;
  z-index: 100;
  max-width: 768px;
`;

const AptosLogo = styled(Aptos)`
  margin: 0 4px 0 3px;
  width: 13px;
  height: 13px;

  g {
    fill: #3733ff;
  }
`;
