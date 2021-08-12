import {Post} from '@/features/post/modules/interfaces';

import {PostDto} from './PostDto';

interface PostResponse {
  id: number;
  title: string;
  body: string;
}

export class ExternalPostsDto {
  private posts: Post[] = [];

  public constructor(response: PostResponse[]) {
    response.forEach((post) => {
      this.posts.push(this.parsePost(post));
    });
  }

  public parse(): Post[] {
    return this.posts;
  }

  private parsePost(postResponse: PostResponse): Post {
    const postDto = new PostDto(postResponse);
    return postDto.parse();
  }
}
