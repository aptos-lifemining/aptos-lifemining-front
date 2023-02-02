import { VideoRepository } from '../repository/video';

class VideoUseCase {
  constructor(private readonly VideoRepository: VideoRepository) {}

  public async uploadVideo(formData: any, id: string) {
    const data = await this.VideoRepository.uploadVideo(formData, id);

    return data;
  }

  public async registerUser(handle: string) {
    console.log('registerUser', handle);
  }
}

export default VideoUseCase;
