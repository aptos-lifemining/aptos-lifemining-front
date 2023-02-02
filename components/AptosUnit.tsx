import React from 'react';

import styled, { css } from 'styled-components';

import Aptos from '../public/svg/aptos.svg';

interface Props {
  fee: number;
  color?: string;
  fontSize?: number;
}

export default function AptosUnit({ fee, color, fontSize }: Props) {
  return (
    <Container color={color} fontSize={fontSize}>
      <div className="aptos-fee">
        {fee}
        <AptosLogo color={color} />
        <div className="typo-unit">APT</div>
      </div>
    </Container>
  );
}

const Container = styled.div<{ color?: string; fontSize?: number }>`
  ${(props) =>
    css`
      .aptos-fee {
        display: flex;
        font-family: InterTight;
        font-style: normal;
        font-weight: 700;
        font-size: ${props.fontSize || 24}px;
        line-height: 29px;
        color: ${props.color || '#000000'};
        align-items: center;

        .typo-unit {
          font-family: InterTight;
          font-style: normal;
          font-weight: 500;
          font-size: ${props.fontSize ? props.fontSize / 2 : 12}px;
          line-height: 15px;
          color: ${props.color || '#000000'};
        }
      }
    `}
`;

const AptosLogo = styled(Aptos)<{ color?: string }>`
  margin: 0 4px 0 3px;
  width: 13px;
  height: 13px;

  g {
    fill: ${({ color }) => color || '#000000'};
  }
`;
