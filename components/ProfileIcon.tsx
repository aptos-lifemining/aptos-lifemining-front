import Image from 'next/image';
import React from 'react';

import styled, { css } from 'styled-components';

interface Props {
  src: string;
  size: number;
  borderSize: number;
}

export default function ProfileIcon({ src, size, borderSize }: Props) {
  return (
    <React.Fragment>
      <IconContainer size={size} borderSize={borderSize}>
        <div className="circle">
          <Image src={src} width={size - borderSize * 4} height={size - borderSize * 4} alt="" />
        </div>
      </IconContainer>
    </React.Fragment>
  );
}

const IconContainer = styled.div<{ size: number; borderSize: number }>`
  position: relative;

  ${({ size, borderSize }) =>
    css`
      .circle {
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        position: relative;

        ::before {
          content: '';
          width: ${size - borderSize * 2}px;
          height: ${size - borderSize * 2}px;
          position: absolute;
          z-index: 1;
          inset: 0;
          padding: ${borderSize}px;
          border-radius: 50%;
          background: linear-gradient(to right top, rgba(86, 174, 255, 1), rgba(0, 26, 255, 1));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      }

      img {
        position: absolute;
        left: ${borderSize * 2}px;
        top: ${borderSize * 2}px;
        object-fit: cover;
        z-index: 2;
        border-radius: 50%;
      }
    `}
`;
