import { Challenge } from './challenge';

export interface TotalRecord {
  id: number;
  createdAt: Date;
  challengerId: number;
  challengeId: number;
  // 총 참여 일수
  participationDays: number;
  // 클레임 가능 여부
  claimable: boolean;
  // 클레임 완료 여부
  claimed: boolean;
  challenge: Challenge;
}
