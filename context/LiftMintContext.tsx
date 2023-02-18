import React, { createContext, useState } from 'react';

export interface Video {
  id: string;
  url: string;
  thumnail: string;
}

export interface ChallengeCategory {
  id: string;
  name: string;
}

export const VideoListContext = createContext(null);
export const ChallengeCategoryContext = createContext(null);
export const MintDataContext = createContext(null);

export const LifeMintDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoList, setVideoList] = useState<Video[] | null>();
  const [challengeCategory, setChallengeCategory] = useState<ChallengeCategory | null>();
  const [mintData, setMintData] = useState<any | null>({
    nftName: null,
    nftPrice: null,
  });

  return (
    <ChallengeCategoryContext.Provider value={{ challengeCategory, setChallengeCategory }}>
      <VideoListContext.Provider value={{ videoList, setVideoList }}>
        <MintDataContext.Provider value={{ mintData, setMintData }}>
          {children}
        </MintDataContext.Provider>
      </VideoListContext.Provider>
    </ChallengeCategoryContext.Provider>
  );
};
