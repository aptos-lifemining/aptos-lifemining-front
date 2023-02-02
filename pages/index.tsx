import React from 'react';

import HttpClient from '../network/httpClient';
import ChallengeRepositoryImpl from '../repository/challenge';
import HomeTemplate from '../template/Home';
import ChallengeUseCase from '../usecase/challenge';

export default function Home({ challenges }) {
  return <HomeTemplate challenges={challenges} />;
}

export async function getServerSideProps() {
  // get challenges
  const res = await new ChallengeUseCase(new ChallengeRepositoryImpl(HttpClient)).getChallenges();
  console.log(res);
  return {
    props: { challenges: res },
  };
}
