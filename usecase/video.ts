import { VideoRepository } from '../repository/video';

class VideoUseCase {
  constructor(private readonly VideoRepository: VideoRepository) {}

  public async uploadVideo(formData: any, id: string) {
    try {
      const data = await this.VideoRepository.uploadVideo(formData, id);

      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  public async registerUser(handle: string) {
    console.log('registerUser', handle);
  }
}

export default VideoUseCase;
