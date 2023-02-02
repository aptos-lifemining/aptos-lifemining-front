import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

import styled from 'styled-components';

import { Challenge } from '../entity/challenge';
import Aptos from '../public/svg/aptos.svg';

interface Props {
  challenges: Challenge[];
  title: string;
}

export default function Challenges({ challenges, title }: Props) {
  const handleClickCard = (id: string) => {
    Router.push(`/challenge/${id}`);
  };
  return (
    <React.Fragment>
      <ChallengesContainer>
        <Category>
          <div className="category-title">{title}</div>
          <div className="see-all">See all</div>
        </Category>
        <CardContainer>
          {challenges.map((challenge) => (
            <ChallengeCard onClick={() => handleClickCard(challenge.id)}>
              <Image
                className="card-img"
                src={challenge.imageUrl}
                width={180}
                height={240}
                alt=""
              />
              <div className="background">
                <div className="challenge-title">
                  {challenge.title}
                  <br /> {challenge.subtitle}
                </div>
                <div className="challenge-fee">
                  {challenge.stakingAPT}
                  <AptosLogo />
                  <div className="typo-unit">APT</div>
                </div>
                <div className="leader-profile">
                  <LeaderProfile>
                    <div className="circle">
                      <Image
                        src={challenge.creator.profileImageUrl}
                        width={14}
                        height={14}
                        alt=""
                      />
                    </div>
                    <div className="leader-nickname">@{challenge.creator.handle}</div>
                  </LeaderProfile>
                </div>
              </div>
            </ChallengeCard>
          ))}
        </CardContainer>
      </ChallengesContainer>
    </React.Fragment>
  );
}

const ChallengesContainer = styled.div`
  border-bottom: 0.1px solid #000000;
  padding: 0 0 16px;
`;

const Category = styled.div`
  display: flex;
  padding: 16px 24px 16px;
  align-items: center;
  justify-content: space-between;

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
    border-radius: 24px;
    top: 0;
    left: 0;
    width: 180px;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #000000 100%);
  }

  .challenge-title {
    z-index: 2;
    font-family: InterTight;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    padding: 141px 0 10px 12px;
  }

  .challenge-fee {
    display: flex;
    font-family: InterTight;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
    padding: 0 0 10px 12px;
    align-items: center;

    .typo-unit {
      font-family: InterTight;
      font-style: normal;
      font-weight: 400;
      font-size: 8px;
      line-height: 10px;
      color: #ffffff;
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
