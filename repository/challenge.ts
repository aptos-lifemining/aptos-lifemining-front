import { AxiosInstance } from 'axios';

import { Challenge } from '../entity/challenge';
import { TotalRecord } from '../entity/totalRecord';

export interface ChallengeRepository {
  getChallenges(): any;

  getChallenge(id: number): any;

  getTotalRecords(): any;

  getTotalRecordForId(id: number): any;

  joinChallenge(id: number): any;

  claim(id: number): any;
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

  public async getTotalRecords(): Promise<TotalRecord[]> {
    const { data } = await this.client.get(`/challenges/totalRecords`);

    return data;
  }

  public async getTotalRecordForId(id: number): Promise<TotalRecord> {
    console.log(`/challenges/${id}/totalRecord 로 요청 >>>>>>>>`);
    const { data } = await this.client.get(`/challenges/${id}/totalRecord`);
    console.log('getTotalRecordForId', data);
    return data;
  }

  public async joinChallenge(id: number) {
    const { data } = await this.client.post(`/challenges/join/${id}`);
    console.log('joinChallenge', data);
    return data;
  }

  public async claim(id: number) {
    const { data } = await this.client.post(`/challenges/claim/${id}`);
    console.log('claimReward', data);
    return data;
  }
}

export default ChallengeRepositoryImpl;
