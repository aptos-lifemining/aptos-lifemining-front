import { AxiosInstance } from 'axios';

import { User } from '../entity/user';

export interface UserRepository {
  getUser(): any;
  registerUser(formData: any): any;
  getUsers(): any;
  upgradeUser(): any;
}

class UserRepositoryImpl implements UserRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getUser(): Promise<User> {
    const { data } = await this.client.get(`/users/me`);

    return data;
  }

  public async registerUser(formData: any): Promise<User> {
    const { data } = await this.client.post(`/users/register`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return data;
  }

  public async getUsers(): Promise<User> {
    const { data } = await this.client.get(`/users`);

    return data;
  }

  public async upgradeUser() {
    const { data } = await this.client.post(`/users/upgrade`);

    return data;
  }
}

export default UserRepositoryImpl;
