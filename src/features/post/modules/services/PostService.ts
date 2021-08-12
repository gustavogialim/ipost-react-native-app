import PostRepository from '@/features/post/modules/repositories/PostRepository';
import {AddPostPayload} from '@/features/post/modules/payloads';
import {Post} from '@/features/post/modules/interfaces';

interface Dependencies {
  postRepository: PostRepository;
}

export default class PostService {
  private postRepository: PostRepository;

  public constructor({postRepository}: Dependencies) {
    this.postRepository = postRepository;
  }

  public async getLocalPosts(): Promise<Post[]> {
    const localPosts = await this.postRepository.getLocalPosts();

    return localPosts;
  }

  public async addPost(payload: AddPostPayload): Promise<void> {
    await this.postRepository.addPost(payload);
  }

  public async deleteLocalPost(postId: string): Promise<void> {
    await this.postRepository.deletePost(postId);
  }
}
