import React from 'react';

import HttpClient from '../../network/httpClient';
import ChallengeRepositoryImpl from '../../repository/challenge';
import ChallengeDetailTemplate from '../../template/ChallengeDetail';
import ChallengeUseCase from '../../usecase/challenge';

export default function ChallengeDetail({ challenge }) {
  return <ChallengeDetailTemplate challenge={challenge} />;
}

// server side props
export async function getServerSideProps(context) {
  // get challenges
  console.log('context >>>>>>>>>> ', context.query.id);
  const res = await new ChallengeUseCase(new ChallengeRepositoryImpl(HttpClient)).getChallenge(
    context.query.id,
  );
  console.log('res >>>>>>>>>>>>>>', res);
  return {
    props: { challenge: res },
  };
}
