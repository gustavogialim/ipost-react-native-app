import ApiResponseError from '@/modules/error/entities/ApiResponseError';
import LocalPostRepository from '@/features/post/modules/repositories/LocalPostRepository';
import ExternalPostRepository from '@/features/post/modules/repositories/ExternalPostRepository';
import {
  AddPostPayload,
  EditPostPayload,
} from '@/features/post/modules/payloads';
import {Post} from '@/features/post/modules/interfaces';

interface Dependencies {
  localPostRepository: LocalPostRepository;
  externalPostRepository: ExternalPostRepository;
}

export default class PostService {
  private localPostRepository: LocalPostRepository;
  private externalPostRepository: ExternalPostRepository;

  public constructor({
    localPostRepository,
    externalPostRepository,
  }: Dependencies) {
    this.localPostRepository = localPostRepository;
    this.externalPostRepository = externalPostRepository;
  }

  public async getLocalPosts(): Promise<Post[]> {
    const localPosts = await this.localPostRepository.getLocalPosts();
    return localPosts;
  }

  public async addLocalPost(payload: AddPostPayload): Promise<void> {
    await this.localPostRepository.addLocalPost(payload);
  }

  public async editLocalPost(payload: EditPostPayload): Promise<void> {
    await this.localPostRepository.editLocalPost(payload);
  }

  public async deleteLocalPost(postId: string): Promise<void> {
    await this.localPostRepository.deleteLocalPost(postId);
  }

  public async getExternalPosts(): Promise<Post[] | never> {
    const [response, error] =
      await this.externalPostRepository.getExternalPosts();

    if (!response) {
      const {httpStatusCode, data, headers, message, config} = error;

      throw new ApiResponseError({
        httpStatusCode,
        data,
        headers,
        message,
        config,
      });
    }

    return response;
  }

  public async getExternalPostDetails(postId: number): Promise<Post | never> {
    const [response, error] =
      await this.externalPostRepository.getExternalPostDetails(postId);

    if (!response) {
      const {httpStatusCode, data, headers, message, config} = error;

      throw new ApiResponseError({
        httpStatusCode,
        data,
        headers,
        message,
        config,
      });
    }

    return response;
  }
}
