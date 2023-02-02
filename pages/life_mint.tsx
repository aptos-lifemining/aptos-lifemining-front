import React, { createContext, useContext, useState } from 'react';
import { LifeMintDataProvider } from '../context/LiftMintContext';
import LifeMintTemplate from '../template/LifeMint';
import SelectNameTemplate from '../template/mint/SelectName';
import SelectChallengeTemplate from '../template/mint/SelectChallenge';
import SelectVideoTemplate from '../template/mint/SelectVideo';
import VideoPlayTemplate from '../template/mint/VideoPlay';
import SelectPriceTemplate from '../template/mint/SelectPrice';
import MintCompleteTemplate from '../template/mint/MintComplete';

const SELECT_CHALLENGE_STEP = 0;
const SELECT_VIDEO_STEP = 1;
const VIDEO_PLAY_STEP = 2;
const SELECT_NAME_STEP = 3;
const SELECT_PRICE_STEP = 4;
const COMPLETE_STEP = 4;

export const StepContext = createContext(null);

export default function LifeMint() {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <LifeMintDataProvider>
        {step === SELECT_CHALLENGE_STEP && <SelectChallengeTemplate />}
        {step === SELECT_VIDEO_STEP && <SelectVideoTemplate />}
        {step === VIDEO_PLAY_STEP && <VideoPlayTemplate />}
        {step === SELECT_NAME_STEP && <SelectNameTemplate />}
        {step === SELECT_PRICE_STEP && <SelectPriceTemplate />}
        {step === COMPLETE_STEP && <MintCompleteTemplate />}
      </LifeMintDataProvider>
    </StepContext.Provider>
  );
}
