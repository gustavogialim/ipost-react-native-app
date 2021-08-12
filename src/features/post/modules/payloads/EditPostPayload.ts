import {Post} from '@/features/post/modules/interfaces';

export class EditPostPayload {
  public post: Post;

  public constructor(post: Post) {
    this.post = post;
  }
}
