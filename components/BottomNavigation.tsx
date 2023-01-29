import Link from 'next/link';
import Router from 'next/router';
import React, { useState } from 'react';

import styled from 'styled-components';

import Globe from '../public/svg/globe.svg';
import Building from '../public/svg/building.svg';
import Upload from '../public/svg/upload.svg';
import Gift from '../public/svg/gift.svg';
import User from '../public/svg/user.svg';

export default function BottomNavigation() {
  const [video, setVideo] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(file);
      setVideo(file);
      setPreviewUrl(reader.result);
      Router.push(
        {
          pathname: '/video/create',
          query: {
            videoUrl: reader.result,
          },
        },
        'video/create',
      );
    };

    reader.readAsDataURL(file);
  };

  const handleUpload = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('video', video);

    try {
      const res = await fetch('https://your-server-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        throw new Error('Failed to upload video');
      }

      alert('Video uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('Failed to upload video');
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <FixedMargin />
      <NavigationBar>
        <MenuItem>
          <GlobeIcon />
        </MenuItem>
        <MenuItem>
          <BuildingIcon />
        </MenuItem>
        <MenuItem>
          <label htmlFor="upload-input">
            <UploadIcon />
          </label>
          <input
            id="upload-input"
            type="file"
            onChange={handleFileChange}
            accept="video/*"
            style={{
              display: 'none',
            }}
          />
        </MenuItem>
        <MenuItem>
          <GiftIcon />
        </MenuItem>
        <MenuItem>
          <UserIcon />
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
  border-top: 0.1px solid #000000;
  display: flex;
  z-index: 100;
  max-width: 768px;
`;

const MenuItem = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  padding: 12px 0 0;
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
