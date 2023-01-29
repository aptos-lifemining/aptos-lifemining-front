export interface IChallengeCategory {
  title: string;
  challenges: {
    title: string;
    subtitle: string;
    fee: string;
    leaderImg: string;
    leaderName: string;
  }[];
}

export const challengeCategory: IChallengeCategory[] = [
  {
    title: '💪 Work out',
    challenges: [
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
    ],
  },
  {
    title: '✏️ Writing',
    challenges: [
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
    ],
  },
  {
    title: '🧑‍💻 Design',
    challenges: [
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
      {
        title: 'Workout!',
        subtitle: '3 weeks challenge 🥋🥋',
        fee: '2.50',
        leaderImg: 'https://i.pravatar.cc/150?img=1',
        leaderName: 'John Doe',
      },
    ],
  },
];
