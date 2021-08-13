import {Storage} from '@/utils/storage/storage';
import StorageKeys from '@/utils/storage/storageKeys';
import {
  AddPostPayload,
  EditPostPayload,
} from '@/features/post/modules/payloads';
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

    localPostsArray.forEach((post: Post) => {
      if (post.date) {
        post.date = new Date(post.date.toString());
      }
    });

    return localPostsArray;
  };

  public addLocalPost = async (payload: AddPostPayload): Promise<void> => {
    const localPostsJson = await this.storage.getItem(StorageKeys.POSTS);
    const localPostsArray: Post[] = localPostsJson
      ? JSON.parse(localPostsJson)
      : [];

    const updatedPosts = [...localPostsArray, payload.post];
    const updatedPostsJson = JSON.stringify(updatedPosts);

    await this.storage.setItem(StorageKeys.POSTS, updatedPostsJson);
  };

  public editLocalPost = async (payload: EditPostPayload): Promise<void> => {
    const {id, title, text, author} = payload.post;
    const localPostsJson = await this.storage.getItem(StorageKeys.POSTS);

    const localPostsArray: Post[] = localPostsJson
      ? JSON.parse(localPostsJson)
      : [];

    const postIndex = localPostsArray.findIndex((post) => post.id === id);

    if (postIndex > -1) {
      localPostsArray[postIndex].title = title;
      localPostsArray[postIndex].text = text;
      localPostsArray[postIndex].author = author;

      const updatedPostsJson = JSON.stringify(localPostsArray);

      await this.storage.setItem(StorageKeys.POSTS, updatedPostsJson);
    }
  };

  public deleteLocalPost = async (postId: string): Promise<void> => {
    const localPostsJson = await this.storage.getItem(StorageKeys.POSTS);
    const localPostsArray: Post[] = localPostsJson
      ? JSON.parse(localPostsJson)
      : [];

    const updatedPosts = localPostsArray.filter(
      (post: Post) => post.id !== postId,
    );
    const updatedPostsJson = JSON.stringify(updatedPosts);

    await this.storage.setItem(StorageKeys.POSTS, updatedPostsJson);
  };
}
