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
  top: calc(100% - 270px);
  left: 0;
  right: 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
  height: ${({ bottomSheetHeight }) => bottomSheetHeight}px;
  transition: transform 150ms ease-out;
`;

const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;
