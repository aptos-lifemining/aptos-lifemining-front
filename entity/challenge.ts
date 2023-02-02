export interface Challenge {
  id: string;
  title: string;
  subtitle: string;
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
    roomImageURL: string;
    address: string;
    description: string;
  };
}
