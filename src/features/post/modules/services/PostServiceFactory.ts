import storage from '@/utils/storage/storage';
import PostRepository from '@/features/post/modules/repositories/PostRepository';

import PostService from './PostService';

export default class FilterServiceFactory {
  private postRepository: PostRepository;

  public constructor() {
    this.postRepository = new PostRepository({
      storage,
    });
  }

  public build(): PostService {
    return new PostService({
      postRepository: this.postRepository,
    });
  }
}
