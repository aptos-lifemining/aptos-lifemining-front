import { AxiosInstance } from 'axios';

export interface VideoRepository {
  getAllVideos(): any;
  getRecommendedVideos(): any;
  getFollowingVideos(): any;
  uploadVideo(info: any): any;
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

  public async uploadVideo(info: any) {
    const { data } = await this.client.post(`/videos`, info);

    return data;
  }
}

export default VideoRepositoryImpl;
