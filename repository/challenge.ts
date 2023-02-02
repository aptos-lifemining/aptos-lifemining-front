import { AxiosInstance } from 'axios';

import { Challenge } from '../entity/challenge';
import { TotalRecord } from '../entity/totalRecord';

export interface ChallengeRepository {
  getChallenges(): any;

  getChallenge(id: number): any;

  getTotalRecordForId(id: number): any;
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

  public async getTotalRecordForId(id: number): Promise<TotalRecord> {
    console.log(`/challenges/${id}/totalRecord 로 요청 >>>>>>>>`);
    const { data } = await this.client.get(`/challenges/${id}/totalRecord`);
    console.log('getTotalRecordForId', data);
    return data;
  }
}

export default ChallengeRepositoryImpl;
