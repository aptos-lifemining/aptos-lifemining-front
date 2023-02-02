import { ChallengeRepository } from '../repository/challenge';

class ChallengeUseCase {
  constructor(private readonly ChallengeRepository: ChallengeRepository) {}

  public async getChallenges() {
    const data = await this.ChallengeRepository.getChallenges();

    return data;
  }
}

export default ChallengeUseCase;
