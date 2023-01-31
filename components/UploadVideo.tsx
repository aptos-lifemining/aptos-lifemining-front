import Image from 'next/image';
import Router from 'next/router';
import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import HttpClient from '../network/httpClient';
import VideoRepositoryImpl from '../repository/video';
import VideoUseCase from '../usecase/video';
import { base64StringToFile, isVideo } from '../util/file';
import BorderButton from './BorderButton';
import DefaultLayout from './DefaultLayout';
import HeaderNavigation from './HeaderNavigation';
import Video from './Video';

export default function UploadVideo() {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!Router.query.videoUrl) {
      Router.replace('/');
    }
    setPreviewUrl(Router.query.videoUrl);
    setFile(base64StringToFile(Router.query.videoUrl, Router.query.fileName));
  }, []);

  const handleUpload = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append('video', file);
    formData.append('title', file.name);
    formData.append('description', 'description');

    try {
      const res = await new VideoUseCase(new VideoRepositoryImpl(HttpClient)).uploadVideo(formData);

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
    <DefaultLayout>
      <UploadContainer>
        <HeaderNavigation height={108} />
        <div className="video-container">
          {previewUrl &&
            (isVideo(file) ? (
              <Video url={previewUrl} />
            ) : (
              <ImageWrapper>
                <Image src={previewUrl} fill alt="" />
              </ImageWrapper>
            ))}
        </div>
        <div className="button-container">
          <BorderButton
            width={212}
            height={35}
            buttonColor="rgba(38, 38, 38, 1)"
            textColor="#ffffff"
          >
            asdfasdfaeeffafesdf
          </BorderButton>
          <BorderButton
            width={84}
            height={35}
            buttonColor="rgba(28, 255, 9, 1)"
            textColor="#000000"
            onClick={() => {
              Router.push('/video/upload_complete');
            }}
          >
            Upload
          </BorderButton>
        </div>
      </UploadContainer>
    </DefaultLayout>
  );
}

const UploadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000000;

  .video-container {
    width: 100%;
    padding-top: 44px;
  }

  .button-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 16px 25px 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  background-color: skyblue;
  border-radius: 20px;
  position: relative;
  padding-top: 170.25%;

  img {
    object-fit: contain;
    border-radius: 20px;
  }
`;
