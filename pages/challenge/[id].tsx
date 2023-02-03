import React from 'react';

import { Challenge } from '../../entity/challenge';
import HttpClient from '../../network/httpClient';
import ChallengeRepositoryImpl from '../../repository/challenge';
import ChallengeDetailTemplate from '../../template/ChallengeDetail';
import ChallengeUseCase from '../../usecase/challenge';

export default function ChallengeDetail({ challenge }: { challenge: Challenge }) {
  return <ChallengeDetailTemplate challenge={challenge} />;
}

// server side props
export async function getServerSideProps(context: any) {
  // get challenges
  console.log('context >>>>>>>>>> ', context.query.id);
  const res = await new ChallengeUseCase(new ChallengeRepositoryImpl(HttpClient)).getChallenge(
    context.query.id,
  );
  return {
    props: { challenge: res },
  };
}
