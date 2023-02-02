import React, { useContext, useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import styled from 'styled-components';

import HeaderNavigation from '../components/HeaderNavigation';
import Video from '../components/Video';

interface Props {
  url: string;
  callback: () => void;
}

export default function SimpleVideoPlayerTemplate({ url, callback }: Props) {
  return (
    <Container>
      <HeaderNavigation backCallback={callback} />
      <ContentContainer>
        <Video url={url} />
      </ContentContainer>
      <div className="gradient-background" />
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
    bottom: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 8px 0px 0;
  position: relative;
  top: 26px;

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
