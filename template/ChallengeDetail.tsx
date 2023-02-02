import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import styled, { css, keyframes } from 'styled-components';

import AptosUnit from '../components/AptosUnit';
import BorderButton from '../components/BorderButton';
import BottomJoinCTA from '../components/BottomJoinCTA';
import DefaultLayout from '../components/DefaultLayout';
import HeaderNavigation from '../components/HeaderNavigation';
import ProfileIcon from '../components/ProfileIcon';
import { division } from '../util/list';
import { useWallet } from '@aptos-labs/wallet-adapter-react';

const DETAIL_INDEX = 0;
const LOG_INDEX = 1;

export default function ChallengeDetailTemplate() {
  const dummyParticipating = [
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
    {
      img: '/img/sample.png',
      nickname: '@ga_gline',
      days: '12th days',
    },
  ];
  const [tabIndex, setTabIndex] = useState(DETAIL_INDEX);
  const titleRef = useRef<HTMLDivElement>();
  const thumbnailRef = useRef<HTMLDivElement>();
  const stickyAreadRef = useRef<HTMLDivElement>();

  const { connected } = useWallet();
  console.log(connected);

  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (scrollY > thumbnailRef.current.offsetHeight - 204) {
        setIsAnimated(true);
      }
      if (scrollY < thumbnailRef.current.offsetHeight - 204) {
        setIsAnimated(false);
      }
    };

    console.log(titleRef.current?.offsetWidth);
    stickyAreadRef.current?.style.setProperty(
      '--thumbnail-height',
      `${thumbnailRef.current?.offsetHeight}px`,
    );

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <DefaultLayout>
      <StickyArea ref={stickyAreadRef}>
        <HeaderNavigation />
        <ThumbnailContainer isAnimated={isAnimated} ref={thumbnailRef}>
          <ChallengeImageWrapper>
            <Image src="/img/sample.png" fill alt="" />
          </ChallengeImageWrapper>
          <div className="background" />
          <div
            className={isAnimated ? 'challenge-title-animated' : 'challenge-title'}
            ref={titleRef}
          >
            Work out!
            <br />3 weeks challenge 🥋🥋
          </div>
        </ThumbnailContainer>
        <StakingInfo>
          <AptosUnit fee="2.50" color="#3733FF" fontSize={24} />
          <div className="typo-description">
            <span style={{ fontWeight: 700 }}>2.80 APT</span> refund upon completion of staking{' '}
          </div>
        </StakingInfo>
        <TabContainer curIndex={tabIndex}>
          <div
            className="tab-detail"
            onClick={() => {
              setTabIndex(DETAIL_INDEX);
            }}
          >
            Detail
          </div>
          <div
            className="tab-log"
            onClick={() => {
              setTabIndex(LOG_INDEX);
            }}
          >
            Challenge Logs
          </div>
        </TabContainer>
      </StickyArea>
      {tabIndex === DETAIL_INDEX ? (
        <div>
          <ChallengeInfo>
            <div className="typo-title">
              Fitness,
              <br />
              Well-ness,
              <br />
              for the better tomorrow!
              <br />
              3-weeks work out challenge
            </div>
            <div className="typo-recruit-title">recruitment period</div>
            <div className="typo-recruit-sub">2023. 01. 24. ~ 2023. 01. 31</div>
          </ChallengeInfo>
          <LeaderInfo>
            <div className="profile">
              <ProfileIcon src={'/img/sample.png'} size={36} borderSize={1.5} />
              <div className="text-info">
                <div className="leader-nickname">@ga_gline</div>
                <div className="typo-followers">4.8K Followers</div>
              </div>
            </div>
            <BorderButton width={76} height={31}>
              Follow
            </BorderButton>
          </LeaderInfo>
          <ContentContainer>
            <div className="text-content">
              in odio eu nec consectetur hendrerit sollicitudin. non urna. enim. lacus, amet, elit
              ex nec malesuada efficitur. Sed fringilla lacus urna dignissim, faucibus sed vitae
              lorem. ex vitae dignissim, elit sapien elit ex ipsum Donec maximus placerat. Cras elit
              odio amet, elementum amet, porta tincidunt vehicula, Ut Nam ex dui ex. diam laoreet ex
              orci massa nec volutpat facilisis Quisque sit lacus Nam tortor. nisi diam Cras quis
              dui. Praesent dignissim, faucibus Lorem In non
            </div>
          </ContentContainer>
        </div>
      ) : (
        <div>
          <ParticipatingInfo>
            <div className="participating-num">23</div>
            <div className="participating-unit">participating</div>
            <div className="period-title">Challenge period</div>
            <div className="period-content">2023. 02. 01. ~ 2023. 02. 21</div>
          </ParticipatingInfo>
          <ProfileContainer>
            {division(dummyParticipating, 8).map((group) => (
              <div className="swiper-container">
                {group.map((profile) => (
                  <div className="profile">
                    <ProfileIcon src={'/img/sample.png'} size={63} borderSize={1.5} />
                    <div className="nickname">@ga_gline</div>
                    <div className="day">12th days</div>
                  </div>
                ))}
              </div>
            ))}
          </ProfileContainer>
        </div>
      )}
      <BottomJoinCTA />
    </DefaultLayout>
  );
}
const titleScaleDown = keyframes`
  0% {
    left: 0;
  }
  100% {
    text-align: center;
    font-size: 12px;
  }
`;

const subTitleScaleDown = keyframes`
  0% {
      left: 0;
    }
  100% {
    left: calc(50% - var(--subtitle-width) / 2);
    font-size: 12px;
  }
`;

const ThumbnailContainer = styled.div<{ isAnimated: boolean }>`
  position: relative;

  .animated-text {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 1s;
  }

  .background {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    z-index: 1;
  }

  .challenge-title {
    width: 100%;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    position: absolute;
    bottom: 16px;
    color: #ffffff;
    padding: 0 24px 0px;
    z-index: 1;
  }

  .challenge-title-animated {
    width: 100%;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    position: absolute;
    bottom: 8px;
    color: #ffffff;
    padding: 0 24px 12px;
    z-index: 1;
    text-align: center;
  }

  .challenge-subtitle {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    position: absolute;
    bottom: 10px;
    color: #ffffff;
    padding: 0 24px 12px;
    z-index: 1;

    ${({ isAnimated }) =>
      isAnimated &&
      css`
        animation: ${subTitleScaleDown} 1s forwards;
      `}
  }
`;

const ChallengeImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  position: relative;
  img {
    position: absolute;
    top: 0;
    object-fit: contain;
  }
`;

const StakingInfo = styled.div`
  width: 100%;
  height: 88px;
  padding: 20px 24px;
  border-bottom: 0.1px solid #000000;

  .typo-description {
    font-family: InterTight;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #3733ff;
  }
`;

const TabContainer = styled.div<{ curIndex: number }>`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: flex-end;
  border-bottom: 0.1px solid #000000;
  padding: 0 24px;

  ${({ curIndex }) =>
    css`
      .tab-detail {
        font-family: InterTight;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${curIndex === DETAIL_INDEX ? '#000000' : '#A3A3A3'};
        height: 26px;
        margin-right: 43px;
        border-bottom: ${curIndex === DETAIL_INDEX ? '2px solid #000000' : 'none'};
      }

      .tab-log {
        font-family: InterTight;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${curIndex === LOG_INDEX ? '#000000' : '#A3A3A3'};
        height: 26px;
        margin-right: 43px;
        border-bottom: ${curIndex === LOG_INDEX ? '2px solid #000000' : 'none'};
      }
    `}
`;

const ChallengeInfo = styled.div`
  padding: 32px 24px 32px;

  .typo-title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
    text-align: left;
  }

  .typo-recruit-title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 40;
    font-size: 12px;
    line-height: 12px;
    color: #a3a3a3;
    text-align: left;
    padding: 16px 0 3px;
  }

  .typo-recruit-sub {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #333333;
    text-align: left;
  }
`;

const LeaderInfo = styled.div`
  display: flex;
  padding: 13px 24px 12px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1px solid #000000;

  .profile {
    display: flex;
    align-items: center;

    .text-info {
      padding-left: 14px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .leader-nickname {
      font-family: InterTight;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;
      color: #333333;
      padding-bottom: 2px;
    }

    .typo-followers {
      font-family: InterTight;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
      color: #a3a3a3;
    }
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 32px 0;

  .text-content {
    padding: 0 24px;
  }
`;

const StickyArea = styled.div`
  position: sticky;
  height: 100%;
  top: calc(-1 * var(--thumbnail-height) + 104px);
  background: #ffffff;
  z-index: 40;
`;

const ParticipatingInfo = styled.div`
  padding: 32px 24px 0;
  width: 100%;

  .participating-num {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #333333;
  }

  .participating-unit {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #a3a3a3;
  }

  .period-title {
    font-family: InterTight;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #a3a3a3;
    padding: 16px 0 0;
  }

  .period-content {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #333333;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;

  .swiper-container::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .swiper-container {
    display: flex;
    align-items: center;
    padding: 32px 26px 0 20px;
    overflow: auto;
    scrollbar-width: none;
    position: relative;
  }

  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }

  .nickname {
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #333333;
    padding: 13px 0 0;
  }

  .day {
    font-family: InterTight;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #a3a3a3;
  }
`;
