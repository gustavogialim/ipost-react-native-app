import storage from '@/utils/storage/storage';
import Api from '@/utils/api/Api';
import LocalPostRepository from '@/features/post/modules/repositories/LocalPostRepository';
import ExternalPostRepository from '@/features/post/modules/repositories/ExternalPostRepository';

import PostService from './PostService';

export default class PostServiceFactory {
  private localPostRepository: LocalPostRepository;
  private externalPostRepository: ExternalPostRepository;

  public constructor() {
    this.localPostRepository = new LocalPostRepository({
      storage,
    });
    this.externalPostRepository = new ExternalPostRepository({
      api: new Api(),
    });
  }

  public build(): PostService {
    return new PostService({
      localPostRepository: this.localPostRepository,
      externalPostRepository: this.externalPostRepository,
    });
  }
}
