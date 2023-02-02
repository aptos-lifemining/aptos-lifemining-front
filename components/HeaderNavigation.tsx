import Router from 'next/router';
import React from 'react';

import styled from 'styled-components';

import Arrow from '../public/svg/arrow_left.svg';
import StokeArrow from '../public/svg/arrow_left_stroke.svg';
import ETC from '../public/svg/etc.svg';

interface Props {
  height?: number;
  title?: string;
  titleColor?: string;
  stroked?: boolean;
  position?: string;
  backCallback?: () => void;
}

export default function HeaderNavigation({
  height,
  title,
  stroked,
  position,
  titleColor,
  backCallback,
}: Props) {
  console.log(backCallback);
  return (
    <React.Fragment>
      <Container height={height} position={position} titleColor={titleColor}>
        <div className="header-flex">
          {stroked ? (
            <LeftArrowStrokeIcon
              onClick={() => {
                backCallback ? backCallback() : Router.back();
              }}
            />
          ) : (
            <LeftArrowIcon
              onClick={() => {
                backCallback ? backCallback() : Router.back();
              }}
            />
          )}

          {title && <div className="title">{title}</div>}
          <ETCIcon />
        </div>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div<{ height?: number; position?: string; titleColor?: string }>`
  width: 100%;
  max-width: 768px;
  height: ${({ height }) => (height ? height + 'px' : '104px')};
  z-index: 50;
  /* position: fixed; */
  position: ${({ position }) => position || 'fixed'};

  .header-flex {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 28px 16px;
  }

  .title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    text-align: center;
    color: ${({ titleColor }) => titleColor || '#000000'};
    padding-bottom: 10px;
  }
`;

const LeftArrowIcon = styled(Arrow)``;

const LeftArrowStrokeIcon = styled(StokeArrow)``;

const ETCIcon = styled(ETC)`
  opacity: 0;
`;
