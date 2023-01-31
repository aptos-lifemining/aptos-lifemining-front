import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <React.Fragment>
      <Container>{children}</Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 769px;
  padding: 0px 0px 20px;
`;
