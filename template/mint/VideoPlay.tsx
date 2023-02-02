import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components';
import BorderButton from '../../components/BorderButton';
import HeaderNavigation from '../../components/HeaderNavigation';

import ArrowRight from '../../public/svg/arrow_right.svg';
import CheckedCircle from '../../public/svg/checked_circle.svg';

import { Swiper, SwiperSlide } from 'swiper/react';
import Video from '../../components/Video';
import 'swiper/css';
import { Navigation, EffectCube, Autoplay } from 'swiper';
import ReactPlayer from 'react-player';
import 'swiper/css/effect-cube';
import { StepContext } from '../../pages/life_mint';

import Logo from '../../public/svg/lifemining_logo.svg';

// import videos from '../public/videos/video_sample.mp4'

export default function VideoPlayTemplate() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 11,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 13,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 14,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 15,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },

    {
      id: 26,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 36,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 56,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 116,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 286,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 356,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 546,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
    {
      id: 1716,
      thumbnailURL: '/img/sample.png',
      checked: false,
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(0);
  const { step, setStep } = useContext(StepContext);
  console.log(step);

  useEffect(() => {
    console.log(currentVideo);
  }, [currentVideo]);

  const videoList = [
    {
      src: 'videos/video_sample.mp4',
      title: 'Video 1',
    },
    {
      src: 'videos/video_sample.mp4',
      title: 'Video 2',
    },
    {
      src: 'videos/video_sample.mp4',
      title: 'Video 3',
    },
  ];

  return (
    <Container>
      <HeaderNavigation
        backCallback={() => {
          setStep((prev: any) => prev - 1);
        }}
      />
      <ContentContainer>
        <Video url="/videos/certi_nft.mp4" />
      </ContentContainer>
      <div className="gradient-background" />
      <ButtonWrapper>
        <BorderButton
          width={312}
          height={55}
          buttonColor="#ffffff"
          textColor="#000000"
          textSize={16}
          onClick={() => {
            setStep((prev: any) => prev + 1);
          }}
        >
          Next
        </BorderButton>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #000000;
  overflow: hidden;

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
  padding: 26px 0px 0;
  position: relative;

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

  .swiper-container {
    width: 100%;
    border-radius: 30px;
    .swiper-wrapper {
      top: 30px;
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

const PlayerWrapper = styled.div`
  width: 100%;
  background-color: skyblue;
  border-radius: 20px;
  position: relative;
  padding-top: 170.25%;
`;

const VideoPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  video {
    border-radius: 20px;
    object-fit: cover;
  }
`;

const SignitureContainer = styled.div`
  z-index: 50;
  position: absolute;
  left: 40px;
  top: 120px;

  .challenge-name {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
    padding-bottom: 20px;
  }

  .days {
    font-family: InterTight;
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }

  .image-wrapper {
  }
`;

const LogoIcon = styled(Logo)`
  width: 80px;
  height: 19px;
  path {
    fill: #ffffff;
  }
  margin-bottom: 20px;
  /* padding-bottom: 20px; */
`;
