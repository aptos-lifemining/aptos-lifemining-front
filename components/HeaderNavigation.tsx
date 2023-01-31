import Router from 'next/router';
import React from 'react';

import styled from 'styled-components';

import Arrow from '../public/svg/arrow_left.svg';
import ETC from '../public/svg/etc.svg';

interface Props {
  height?: number;
}

export default function HeaderNavigation({ height }: Props) {
  return (
    <React.Fragment>
      <Container height={height}>
        <div className="header-flex">
          <LeftArrowIcon
            onClick={() => {
              Router.back();
            }}
          />
          <ETCIcon />
        </div>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div<{ height?: number }>`
  width: 100%;
  max-width: 768px;
  height: ${({ height }) => (height ? height + 'px' : '104px')};
  z-index: 50;
  position: fixed;

  .header-flex {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 0 28px 16px;
  }
`;

const LeftArrowIcon = styled(Arrow)``;

const ETCIcon = styled(ETC)``;
