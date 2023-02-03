import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';

import styled from 'styled-components';

import Building from '../public/svg/building.svg';
import Gift from '../public/svg/gift.svg';
import Globe from '../public/svg/globe.svg';
import Upload from '../public/svg/upload.svg';
import User from '../public/svg/user.svg';

export default function BottomNavigation() {
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      Router.push(
        {
          pathname: '/video/upload',
          query: {
            videoUrl: reader.result as string,
            fileName: file.name,
          },
        },
        'video/upload',
      );
    };

    reader.readAsDataURL(file);
  };

  return (
    <React.Fragment>
      <FixedMargin />
      <NavigationBar>
        <MenuItem
          onClick={() => {
            router.push('/');
          }}
        >
          <GlobeIcon />
          <div className="point-wrapper">
            {router.pathname === '/' && <div className="point" />}
          </div>
        </MenuItem>
        <MenuItem>
          <BuildingIcon />
          <div className="point-wrapper">
            {router.pathname === '/rounge' && <div className="point" />}
          </div>
        </MenuItem>
        <MenuItem>
          <label htmlFor="upload-input">
            <UploadIcon />
          </label>
          <input
            id="upload-input"
            type="file"
            onChange={handleFileChange}
            accept="video/*, image/gif, image/jpeg, image/png"
            style={{
              display: 'none',
            }}
          />
          <div className="point-wrapper"></div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push('/nft_shop');
          }}
        >
          <GiftIcon />
          <div className="point-wrapper">
            {router.pathname === '/nft_shop' && <div className="point" />}
          </div>
        </MenuItem>
        <MenuItem
          onClick={() => {
            router.push('/profile');
          }}
        >
          <UserIcon />
          <div className="point-wrapper">
            {router.pathname === '/profile' && <div className="point" />}
          </div>
        </MenuItem>
      </NavigationBar>
    </React.Fragment>
  );
}

const FixedMargin = styled.div`
  width: 100%;
  height: 86px;
`;

const NavigationBar = styled.div`
  position: fixed;
  bottom: 0;
  height: 86px;
  width: 100%;
  background: #ffffff;
  border-top: 0.1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  z-index: 1000;
  max-width: 768px;
`;

const MenuItem = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0 0;

  .point-wrapper {
    height: 30px;
    .point {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      margin-top: 12px;
      background-color: #000000;
    }
  }
`;

const GlobeIcon = styled(Globe)`
  height: 28px;
  width: 28px;
`;

const BuildingIcon = styled(Building)`
  height: 28px;
  width: 28px;
`;

const UploadIcon = styled(Upload)`
  height: 28px;
  width: 28px;
`;

const GiftIcon = styled(Gift)`
  height: 28px;
  width: 28px;
`;

const UserIcon = styled(User)`
  height: 28px;
  width: 28px;
`;
