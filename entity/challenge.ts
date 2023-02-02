export interface Challenge {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  totalDays: number;
  passDays: number;
  type: string;
  stakingAPT: number;
  imageUrl: string;
  creatorId: string;
  creator: {
    id: string;
    handle: string;
    profileImageUrl: string;
    roomImageUrl: string;
    address: string;
    description: string;
  };
}
