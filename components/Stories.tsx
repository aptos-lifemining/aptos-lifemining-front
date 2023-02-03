import React from 'react';

import styled from 'styled-components';

import ProfileIcon from './ProfileIcon';

export default function Stories({ users }: { users: any[] }) {
  console.log('>>>>>>>>>>> users', users);
  return (
    <StoriesContainer>
      <div className="swiper-container">
        {users.map((user) => (
          <StoryBubble>
            <ProfileIcon src={user.profileImageUrl} size={64} borderSize={1.5} />
            <div className="user-nickname">@{user.handle}</div>
          </StoryBubble>
        ))}
      </div>
    </StoriesContainer>
  );
}

const StoriesContainer = styled.div`
  height: 99px;
  background: #ffffff;
  border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);

  .swiper-container::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .swiper-container {
    display: flex;
    align-items: center;
    padding: 5px 26px 0 20px;
    overflow: auto;
    scrollbar-width: none;
    position: relative;
  }

  .swiper-item {
    width: 64px !important;
    margin-right: 20px !important;
    height: 82px;
  }

  .circle-box {
    width: 63px;
    height: 63px;
    border-radius: 50%;
    background-color: green;
  }
`;

const StoryBubble = styled.div`
  width: 64px !important;
  margin-right: 20px !important;
  height: 82px;

  .avatar {
    width: 64px;
    height: 64px;
    position: relative;
    border-radius: 50%;
    padding: 4px;
    border: 1.5px dashed;
    background-image: linear-gradient(to right top, rgba(86, 174, 255, 1), rgba(0, 26, 255, 1));

    :before {
      content: '';
      position: absolute;
      left: 1.5px;
      top: 1.5px;
      right: 1.5px;
      bottom: 1.5px;
      background: #ffffff;
      border-radius: 50%;
      z-index: 1;
    }

    img {
      position: absolute;
      left: 3px;
      top: 3px;
      z-index: 2;
      display: block;
      width: 58px;
      height: 58px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
  }

  .user-nickname {
    width: 64px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-family: InterTight;
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    margin-top: 7px;
  }
`;
