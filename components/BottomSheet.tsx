import React, { useEffect, useState } from 'react';

import styled from 'styled-components';

import { motion } from 'framer-motion';
import { useBottomSheet } from '../hooks/useBottomSheet';
import BottomSheetHeader from './BottomSheetHeader';

interface Props {
  children?: React.ReactNode;
}

export default function BottomSheet({ children }: Props) {
  const { sheet, content } = useBottomSheet();

  const [bottomSheetHeight, setBottomSheetHeight] = useState(0);

  useEffect(() => {
    setBottomSheetHeight(window.innerHeight - 60);
  }, []);

  return (
    <Wrapper ref={sheet} bottomSheetHeight={bottomSheetHeight}>
      <BottomSheetHeader />
      <BottomSheetContent ref={content}>{children}</BottomSheetContent>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)<{ bottomSheetHeight: number }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 150;
  /* top: 0; */
  top: calc(100% - 330px);
  /* bottom: 0; */
  left: 0;
  right: 0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);
  height: ${({ bottomSheetHeight }) => bottomSheetHeight}px;
  /* height: -719px; */
  transition: transform 150ms ease-out;
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
