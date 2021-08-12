import {Storage} from '@/utils/storage/storage';
import StorageKeys from '@/utils/storage/storageKeys';
import {AddPostPayload} from '@/features/post/modules/payloads';
import {Post} from '@/features/post/modules/interfaces';

interface Dependencies {
  storage: Storage;
}

export default class PostRepository {
  private storage: Storage;

  public constructor({storage}: Dependencies) {
    this.storage = storage;
  }

  public getLocalPosts = async (): Promise<Post[]> => {
    const localPostsJson = await this.storage.getItem(StorageKeys.POSTS);
    const localPostsArray: Post[] = localPostsJson
      ? JSON.parse(localPostsJson)
      : [];

    return localPostsArray;
  };

  public addPost = async (payload: AddPostPayload): Promise<void> => {
    const currentPostsJson = await this.storage.getItem(StorageKeys.POSTS);
    const currentPostsArray = currentPostsJson
      ? JSON.parse(currentPostsJson)
      : [];

    const updatedPosts = [...currentPostsArray, payload.body];
    const updatedPostsJson = JSON.stringify(updatedPosts);

    await this.storage.setItem(StorageKeys.POSTS, updatedPostsJson);
  };

  public deletePost = async (postId: string): Promise<void> => {
    const currentPostsJson = await this.storage.getItem(StorageKeys.POSTS);
    const currentPostsArray = currentPostsJson
      ? JSON.parse(currentPostsJson)
      : [];

    const updatedPosts = currentPostsArray.filter(
      (post: Post) => post.id !== postId,
    );
    const updatedPostsJson = JSON.stringify(updatedPosts);

    await this.storage.setItem(StorageKeys.POSTS, updatedPostsJson);
  };
}
