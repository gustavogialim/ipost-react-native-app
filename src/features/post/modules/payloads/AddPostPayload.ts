import uuid from 'react-native-uuid';

import {Post} from '@/features/post/modules/interfaces';

export class AddPostPayload {
  public post: Post;

  public constructor(post: Post) {
    const newId = uuid.v4();
    this.post = {
      ...post,
      id: newId,
    };
  }
}
