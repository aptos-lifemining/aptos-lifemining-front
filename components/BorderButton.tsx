import React, { HtmlHTMLAttributes } from 'react';

import styled, { css } from 'styled-components';

interface Props {
  width: number;
  height: number;
  borderRadius?: number;
  buttonColor?: string;
  textColor?: string;
  textSize?: number;
  margin?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: any;
}

export default function BorderButton({
  width,
  height,
  borderRadius,
  buttonColor,
  textColor,
  textSize,
  margin,
  children,
  disabled,
  onClick,
  ...props
}: Props & HtmlHTMLAttributes<HTMLElement>) {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      buttonColor={buttonColor}
      textColor={textColor}
      textSize={textSize}
      margin={margin}
      disabled={disabled}
      onClick={() => {
        disabled ? null : onClick && onClick();
      }}
      {...props}
    >
      <div className="inner-button">{children}</div>
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div<{
  width: number;
  height: number;
  borderRadius?: number;
  buttonColor?: string;
  textColor?: string;
  textSize?: number;
  margin?: string;
  disabled?: boolean;
}>`
  ${(props) =>
    css`
      width: ${props.width}px;
      height: ${props.height}px;
      border-radius: ${props.borderRadius || 24}px;
      position: relative;
      background-color: transparent;
      border: ${props.disabled ? `1px solid #A3A3A3` : `1px solid ${props.buttonColor}`};
      margin: ${props.margin || '0px'};

      .inner-button {
        width: ${props.width - 4}px;
        height: ${props.height - 4}px;
        top: 1px;
        left: 1px;
        position: absolute;
        background-color: ${props.disabled ? `#A3A3A3` : props.buttonColor || '#000000'};
        /* background-color: ${props.buttonColor || '#000000'}; */
        border-radius: ${props.borderRadius || 24}px;

        font-family: InterTight;
        font-style: normal;
        font-weight: 700;
        font-size: ${props.textSize || 12}px;
        line-height: 15px;
        color: ${props.textColor || '#ffffff'};

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    `}
`;

const InsideButton = styled.div<{ width: number; height: number; radius: number }>`
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
`;
