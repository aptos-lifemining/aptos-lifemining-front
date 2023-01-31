import React from 'react';

import styled from 'styled-components';
import Logo from '../public/svg/lifemining_logo.svg';

export default function Header() {
  return (
    <React.Fragment>
      <HeaderContainer>
        <LogoIcon />
      </HeaderContainer>
    </React.Fragment>
  );
}

const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  max-width: 768px;
`;

const LogoIcon = styled(Logo)`
  width: 136px;
  height: 40px;
  margin: 0 24px 0;
`;
