export interface User {
  id: string;
  createdAt: string;
  isCompleted: boolean;
  provider: string;
  socialId: string;
  handle: string;
  nickname: string;
  isActive: boolean;
  profileImageURL: string;
  profileScope: string;
  profileDescription: string;
}
