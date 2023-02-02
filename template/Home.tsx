import React from 'react';

import BottomNavigation from '../components/BottomNavigation';
import Challenges from '../components/Challenges';
import CreateChallenge from '../components/CreateChallenge';
import DefaultLayout from '../components/DefaultLayout';
import Header from '../components/Header';
import Stories from '../components/Stories';

export default function HomeTemplate({ challenges }) {
  return (
    <DefaultLayout>
      <Header />
      <Stories />
      <Challenges
        challenges={challenges.filter((obj) => obj.type === 'development')}
        title="Development"
        key={challenges.filter((obj) => obj.type === 'development').id}
      />
      <Challenges
        challenges={challenges.filter((obj) => obj.type === 'excercise')}
        title="excercise"
        key={challenges.filter((obj) => obj.type === 'excercise').id}
      />
      <Challenges
        challenges={challenges.filter((obj) => obj.type === 'writing')}
        title="writing"
        key={challenges.filter((obj) => obj.type === 'writing').id}
      />
      <CreateChallenge />
      <BottomNavigation />
    </DefaultLayout>
  );
}
