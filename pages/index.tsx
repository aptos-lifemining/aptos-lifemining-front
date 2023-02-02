import React from 'react';

import HttpClient from '../network/httpClient';
import ChallengeRepositoryImpl from '../repository/challenge';
import UserRepositoryImpl from '../repository/user';
import HomeTemplate from '../template/Home';
import ChallengeUseCase from '../usecase/challenge';
import UserUseCase from '../usecase/user';

export default function Home({ challenges, users }) {
  return <HomeTemplate challenges={challenges} users={users} />;
}

export async function getServerSideProps() {
  // get challenges
  const res = await new ChallengeUseCase(new ChallengeRepositoryImpl(HttpClient)).getChallenges();
  const users = await new UserUseCase(new UserRepositoryImpl(HttpClient)).getUsers();
  console.log(res);
  return {
    props: { challenges: res, users: users },
  };
}
