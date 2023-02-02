import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styled from 'styled-components';
// import ReactPlayer from 'react-player';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface Props {
  url: string;
}

export default function Video({ url }: Props) {
  const [paused, setPaused] = useState(false);

  const handleClickScreen = () => {
    setPaused(!paused);
  };

  return (
    <React.Fragment>
      <PlayerWrapper onClick={handleClickScreen}>
        <VideoPlayer
          url={url}
          className="react-player"
          width="100%"
          height="100%"
          // playing={!paused}
          playing={true}
          light={false}
          loop={true}
        />
      </PlayerWrapper>
    </React.Fragment>
  );
}

const PlayerWrapper = styled.div`
  width: 100%;
  /* background-color: skyblue; */
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
