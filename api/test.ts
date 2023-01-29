import { AxiosInstance } from 'axios';

interface Body {
  keyTest: string;
}

export interface TestRepository {
  postTest(body: Body): Promise<any>;
}

class TestRepositoryImpl implements TestRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async postTest(body: Body) {
    const { data } = await this.client.post('/api/test/verify/', body);

    return data;
  }
}

export default TestRepositoryImpl;
