import { ChallengeRepository } from '../repository/challenge';

class ChallengeUseCase {
  constructor(private readonly ChallengeRepository: ChallengeRepository) {}

  public async getChallenges() {
    const data = await this.ChallengeRepository.getChallenges();

    return data;
  }

  public async getChallenge(id: number) {
    console.log('id >>>>>>>>>>>>>>>> ', id);
    const data = await this.ChallengeRepository.getChallenge(id);

    return data;
  }

  public async getTotalRecordForId(id: number) {
    const data = await this.ChallengeRepository.getTotalRecordForId(id);

    return data;
  }
}

export default ChallengeUseCase;
