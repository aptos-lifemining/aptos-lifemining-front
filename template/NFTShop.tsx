import React, { useState } from 'react';
import Image from 'next/image';

import styled from 'styled-components';

import BottomNavigation from '../components/BottomNavigation';
import DefaultLayout from '../components/DefaultLayout';
import Aptos from '../public/svg/aptos.svg';
import Logo from '../public/svg/shop_logo.svg';
import SimpleVideoPlayerTemplate from './SimpleVideoPlayer';

export default function NFTShopTemplate() {
  const dummys = [
    {
      url: '/img/hack.png',
      days: 3,
      title: 'Seoul Hackathon Winners',
      subTitle: '2023 Aptos Hackathon',
      fee: 2.0,
    },
    {
      url: '/img/sample.png',
      days: 3,
      title: 'Seoul Hackathon Winners',
      subTitle: '2023 Aptos Hackathon',
      fee: 2.0,
    },
    {
      url: '/img/sample.png',
      days: 3,
      title: 'Seoul Hackathon Winners',
      subTitle: '2023 Aptos Hackathon',
      fee: 2.0,
    },
    {
      url: '/img/sample.png',
      days: 3,
      title: 'Seoul Hackathon Winners',
      subTitle: '2023 Aptos Hackathon',
      fee: 2.0,
    },
  ];

  const [playVideo, setPlayVideo] = useState(false);

  return (
    <DefaultLayout>
      {playVideo ? (
        <>
          <SimpleVideoPlayerTemplate
            url={'/videos/certi_nft.mp4'}
            callback={() => {
              setPlayVideo(false);
            }}
          />
        </>
      ) : (
        <>
          <HeaderContainer>
            <LogoIcon />
          </HeaderContainer>
          <BannerContainer>
            <div className="banner-wrapper">
              <Image src="/img/shop_banner.png" alt="banner" width={336} height={282} />
            </div>
          </BannerContainer>
          <TextContainer>
            <div className="column-flex">
              <div className="my-nft">My NFTs</div>

              <div className="category-title">@june</div>
            </div>
            <div className="see-all">See all</div>
          </TextContainer>
          <CardContainer>
            {dummys.map((dummy) => (
              <ChallengeCard
                onClick={() => {
                  setPlayVideo(true);
                }}
              >
                <Image className="card-img" src={dummy.url} width={180} height={240} alt="" />
                <div className="background">
                  <div className="challenge-title">{dummy.title}</div>
                  <div className="challenge-sub">{dummy.subTitle}</div>
                  <div className="challenge-fee">
                    2.00
                    <AptosLogo />
                    <div className="typo-unit">APT</div>
                  </div>
                </div>
              </ChallengeCard>
            ))}
          </CardContainer>
          <BottomNavigation />
        </>
      )}
    </DefaultLayout>
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
  width: 106px;
  height: 33px;
  margin: 0 24px 0;
`;

const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;

  .banner-wrapper {
    width: 336px;
    height: 282px;
    background: #baced9;
    border-radius: 20px;

    img {
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  padding: 28px 24px 16px;
  align-items: center;
  justify-content: space-between;

  .my-nft {
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    opacity: 0.5;
    padding-bottom: 4px;
  }

  .category-title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }

  .see-all {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    /* identical to box height */

    text-align: right;

    color: #56aeff;
  }
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 24px 0 20px;
  overflow: auto hidden;
  scrollbar-width: none;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

const ChallengeCard = styled.div`
  width: 180px;
  height: 240px;
  position: relative;
  border-radius: 24px;
  margin-right: 12px;

  img {
    border-radius: 24px;
    position: relative;
    object-fit: cover;
  }

  .background {
    position: absolute;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    bottom: 0;
    left: 0;
    width: 180px;
    height: 78px;
    z-index: 1;
    background: #f4f4f4;
  }

  .challenge-title {
    z-index: 2;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    padding: 10px 12px 0px;
  }

  .challenge-sub {
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
    opacity: 0.5;
    padding: 4px 12px 0;
  }

  .challenge-fee {
    display: flex;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    padding: 8px 12px 10px 12px;
    align-items: center;

    .typo-unit {
      font-family: InterTight;
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      color: #000000;
    }
  }

  .leader-profile {
    padding: 0 12px;
  }
`;

const AptosLogo = styled(Aptos)`
  margin: 0 4px 0 3px;
  width: 13px;
  height: 13px;

  g {
    fill: #000;
  }
`;

const LeaderProfile = styled.div`
  display: flex;
  align-items: center;

  .circle {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: relative;

    :before {
      content: '';
      width: 16px;
      height: 16px;
      position: absolute;
      z-index: -1;
      inset: 0;
      padding: 1px;
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
    left: 2px;
    top: 2px;
    object-fit: cover;
    z-index: 1;
  }

  .leader-nickname {
    font-family: InterTight;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    color: #ffffff;
    z-index: 1;
    padding-left: 8px;
  }
`;
