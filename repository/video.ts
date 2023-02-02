import { AxiosInstance } from 'axios';

export interface VideoRepository {
  getAllVideos(): any;
  getRecommendedVideos(): any;
  getFollowingVideos(): any;
  uploadVideo(formData: any, id: string): any;
}

class VideoRepositoryImpl implements VideoRepository {
  constructor(private readonly client: AxiosInstance) {}

  public async getAllVideos() {
    const { data } = await this.client.get(`/videos`);

    return data;
  }

  public async getRecommendedVideos() {
    const { data } = await this.client.get(`/videos/for-you`);

    return data;
  }

  public async getFollowingVideos() {
    const { data } = await this.client.get(`/videos/following`);

    return data;
  }

  public async uploadVideo(fromData: any, id: string) {
    const { data } = await this.client.post(`/challenges/verify/${id}`, fromData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        address: sessionStorage.getItem('wallet_address'),
      },
    });

    return data;
  }
}

export default VideoRepositoryImpl;
