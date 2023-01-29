import React from 'react';

import BottomNavigation from '../components/BottomNavigation';
import Challenges from '../components/Challenges';
import CreateChallenge from '../components/CreateChallenge';
import DefaultLayout from '../components/DefaultLayout';
import Header from '../components/Header';
import Stories from '../components/Stories';
import { challengeCategory } from '../database/home';

export default function HomeTemplate() {
  return (
    <DefaultLayout>
      <Header />
      <Stories />
      <Challenges
        challenges={challengeCategory.find((obj) => obj.title === '💪 Work out').challenges}
      />
      <Challenges
        challenges={challengeCategory.find((obj) => obj.title === '💪 Work out').challenges}
      />
      <Challenges
        challenges={challengeCategory.find((obj) => obj.title === '💪 Work out').challenges}
      />
      <CreateChallenge />
      <BottomNavigation />
    </DefaultLayout>
  );
}
