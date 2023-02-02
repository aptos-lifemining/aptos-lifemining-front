import Image from 'next/image';
import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import BorderButton from '../../components/BorderButton';
import HeaderNavigation from '../../components/HeaderNavigation';
import { StepContext } from '../../pages/life_mint';

import ArrowRight from '../../public/svg/arrow_right.svg';
import CheckedCircle from '../../public/svg/checked_circle.svg';

const SELECT_CHALLENGE_STEP = 0;
const SELECT_CONTENT_STEP = 1;
const PREVIEW_STEP = 2;

export default function SelectVideoTemplate() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      thumbnailURL: '/img/cover1.png',
      checked: false,
    },
    {
      id: 11,
      thumbnailURL: '/img/cover2.png',
      checked: false,
    },
    {
      id: 13,
      thumbnailURL: '/img/cover3.png',
      checked: false,
    },
    {
      id: 14,
      thumbnailURL: '/img/cover4.png',
      checked: false,
    },
    {
      id: 15,
      thumbnailURL: '/img/cover5.png',
      checked: false,
    },

    {
      id: 26,
      thumbnailURL: '/img/cover6.png',
      checked: false,
    },
    {
      id: 36,
      thumbnailURL: '/img/cover7.png',
      checked: false,
    },
    {
      id: 56,
      thumbnailURL: '/img/cover8.png',
      checked: false,
    },
    {
      id: 133,
      thumbnailURL: '/img/cover1.png',
      checked: false,
    },
    {
      id: 1411,
      thumbnailURL: '/img/cover2.png',
      checked: false,
    },
    {
      id: 1143,
      thumbnailURL: '/img/cover3.png',
      checked: false,
    },
    {
      id: 1554,
      thumbnailURL: '/img/cover4.png',
      checked: false,
    },
    {
      id: 155,
      thumbnailURL: '/img/cover5.png',
      checked: false,
    },

    {
      id: 26666,
      thumbnailURL: '/img/cover6.png',
      checked: false,
    },
  ]);

  const { step, setStep } = useContext(StepContext);

  const handleContentCheck = (id: number) => {
    setContentList(
      contentList.map((obj) => {
        if (id === obj.id) {
          return {
            ...obj,
            checked: !obj.checked,
          };
        }
        return obj;
      }),
    );
  };

  const handleNextButtonClick = () => {
    setStep((prev: any) => prev + 1);
  };

  return (
    <Container>
      <HeaderNavigation
        backCallback={() => {
          setStep((prev: any) => prev - 1);
        }}
        position="relative"
        title="2023 Aptos Hackathon"
        titleColor="#ffffff"
      />
      <ContentContainer>
        <div className="content-flex-box">
          {contentList.map((content, index) => (
            <div
              className="video-wrapper"
              onClick={() => {
                handleContentCheck(content.id);
              }}
            >
              {/* <CheckboxWrapper>
                {content.checked ? <CheckedCircleIcon /> : <div className="empty-checkbox" />}
              </CheckboxWrapper> */}
              <Image src={content.thumbnailURL} fill alt="" />
            </div>
          ))}
        </div>
      </ContentContainer>
      <div className="gradient-background" />
      <ButtonWrapper>
        <BorderButton
          width={312}
          height={55}
          buttonColor="#ffffff"
          textColor="#000000"
          textSize={16}
          onClick={handleNextButtonClick}
        >
          Merge the Logs
        </BorderButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  height: 1005;
  width: 100%;
  background-color: #000000;

  .gradient-background {
    z-index: 20;
    position: fixed;
    width: 100%;
    height: 64px;
    bottom: 109px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 8px 0px 0;

  .content-flex-box {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    padding: 4px;

    .video-wrapper {
      position: relative;
      width: 33.3%;
      padding-top: 50%;
      background-color: gray;
      border: 2px solid #000000;

      img {
        object-fit: cover;
      }

      video {
        object-fit: cover;
      }
    }
  }
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 10;

  .empty-checkbox {
    width: 16px;
    height: 16px;
    border: 1.5px solid #ffffff;
    border-radius: 50%;
  }
`;

const CheckedCircleIcon = styled(CheckedCircle)``;

const ButtonWrapper = styled.div`
  z-index: 20;
  width: 100%;
  height: 109px;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #000000;
`;
