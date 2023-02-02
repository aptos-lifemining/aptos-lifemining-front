import { ChallengeRepository } from '../repository/challenge';

class ChallengeUseCase {
  constructor(private readonly ChallengeRepository: ChallengeRepository) {}

  public async getChallenges() {
    const data = await this.ChallengeRepository.getChallenges();

    return data;
  }

  public async getChallenge(id: number) {
    console.log('id >>>>>>>>>>>>>>>> ', id);
    try {
      const data = await this.ChallengeRepository.getChallenge(id);
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async getTotalRecordForId(id: number) {
    const data = await this.ChallengeRepository.getTotalRecordForId(id);

    return data;
  }

  public async joinChallenge(id: number) {
    console.log('usecase joinChallenge id >>>>>>>>>>>>>>>> ', id);
    try {
      const data = await this.ChallengeRepository.joinChallenge(id);

      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async getTotalRecords() {
    const data = await this.ChallengeRepository.getTotalRecords();

    return data;
  }

  public async claim(id: number) {
    try {
      const data = await this.ChallengeRepository.claim(id);

      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default ChallengeUseCase;
