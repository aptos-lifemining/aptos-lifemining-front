import { UserRepository } from '../repository/user';

class UserUseCase {
  constructor(private readonly UserRepository: UserRepository) {}

  public async getUser() {
    const data = await this.UserRepository.getUser();

    return data;
  }

  public async registerUser(
    handle: string,
    address: string,
    description: string,
    profileImage: File,
  ) {
    const formData = new FormData();
    formData.append('handle', handle);
    formData.append('address', address);
    formData.append('description', description);
    formData.append('profileImage', profileImage);
    console.log(formData.getAll('profileImage'));

    try {
      const data = await this.UserRepository.registerUser(formData);
      console.log(data);

      sessionStorage.setItem('wallet_address', data.address);
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async getUsers() {
    const data = await this.UserRepository.getUsers();
    return data;
  }

  public async upgradeUser() {
    const data = await this.UserRepository.upgradeUser();
    return data;
  }
}

export default UserUseCase;
