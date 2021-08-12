import uuid from 'react-native-uuid';

import {Post} from '@/features/post/modules/interfaces';

export class AddPostPayload {
  public body: Post;

  public constructor(post: Post) {
    const newId = uuid.v4();
    this.body = {
      ...post,
      id: newId,
    };
  }
}
