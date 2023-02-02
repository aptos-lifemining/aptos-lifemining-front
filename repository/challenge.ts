import { AxiosInstance } from 'axios';

import { Challenge } from '../entity/challenge';

export interface ChallengeRepository {
  getChallenges(): any;

  getChallenge(id: number): any;
}

class ChallengeRepositoryImpl implements ChallengeRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getChallenges(): Promise<Challenge> {
    const { data } = await this.client.get(`/challenges`);

    return data;
  }

  public async getChallenge(id: number): Promise<Challenge> {
    const { data } = await this.client.get(`/challenges/${id}`);
    console.log('getChallenge', data);
    return data;
  }
}

export default ChallengeRepositoryImpl;
