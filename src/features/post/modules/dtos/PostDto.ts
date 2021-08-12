import {Post} from '@/features/post/modules/interfaces';

interface PostResponse {
  id: number;
  title: string;
  body: string;
}

export class PostDto {
  private id: string;
  private title: string;
  private text: string;

  public constructor(response: PostResponse) {
    const {id, title, body} = response;

    this.id = id.toString();
    this.title = title;
    this.text = body;
  }

  public parse(): Post {
    return {
      id: this.id,
      title: this.title,
      text: this.text,
      date: new Date(),
      author: '',
    };
  }
}
