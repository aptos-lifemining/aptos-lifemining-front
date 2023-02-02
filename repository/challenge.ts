import { AxiosInstance } from 'axios';

import { Challenge } from '../entity/challenge';

export interface ChallengeRepository {
  getChallenges(): any;
}

class ChallengeRepositoryImpl implements ChallengeRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getChallenges(): Promise<Challenge> {
    const { data } = await this.client.get(`/challenges`);

    return data;
  }
}

export default ChallengeRepositoryImpl;
