import { AxiosInstance } from 'axios';
import { User } from '../entity/user';

export interface UserRepository {
  getUser(): any;
}

class UserRepositoryImpl implements UserRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getUser(): Promise<User> {
    const { data } = await this.client.get(`/users`);

    return data;
  }
}

export default UserRepositoryImpl;
