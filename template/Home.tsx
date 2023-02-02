import React from 'react';

import BottomNavigation from '../components/BottomNavigation';
import Challenges from '../components/Challenges';
import CreateChallenge from '../components/CreateChallenge';
import DefaultLayout from '../components/DefaultLayout';
import Header from '../components/Header';
import Stories from '../components/Stories';

export default function HomeTemplate({ challenges, users }) {
  return (
    <DefaultLayout>
      <Header />
      <Stories users={users} />
      <Challenges
        challenges={challenges.filter((obj) => obj.type === 'develop')}
        title="Develop 🧑‍💻"
        key={challenges.filter((obj) => obj.type === 'develop').id}
      />
      <Challenges
        challenges={challenges.filter((obj) => obj.type === 'excercise')}
        title="Excercise 🏃‍♀️"
        key={challenges.filter((obj) => obj.type === 'excercise').id}
      />
      <Challenges
        challenges={challenges.filter((obj) => obj.type === 'art')}
        title="Art 👩‍🎨"
        key={challenges.filter((obj) => obj.type === 'art').id}
      />
      <CreateChallenge />
      <BottomNavigation />
    </DefaultLayout>
  );
}
