import { UserRepository } from '../repository/user';

class UserUseCase {
  constructor(private readonly UserRepository: UserRepository) {}

  public async getUser() {
    const data = await this.UserRepository.getUser();

    return data;
  }

  public async registerUser(handle: string) {
    console.log('registerUser', handle);
  }
}

export default UserUseCase;
