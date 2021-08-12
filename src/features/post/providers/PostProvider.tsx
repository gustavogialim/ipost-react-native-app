/* eslint-disable prettier/prettier */
import React, {createContext, Component, ReactElement} from 'react';

import PostService from '@/features/post/modules/services/PostService';
import PostServiceFactory from '@/features/post/modules/services/PostServiceFactory';
import {Post} from '@/features/post/modules/interfaces';
import {AddPostPayload} from '@/features/post/modules/payloads';

export const PostContext = createContext({});
const PostConsumer = PostContext.Consumer;

interface Props {
  postService: PostService;
  children: ReactElement;
}

interface State {
  localPosts: Post[];
  externalPosts: Post[];
}

export interface PostContext {
  localPosts: Post[];
  externalPosts: Post[];
  getLocalPosts: () => Promise<Post[]>;
  // getFilterInformation: (filterId: string) => Promise<Filter>;
  // getPopularFilters: (searchText?: string) => Promise<Filter[]>;
  addPost: (post: Post) => Promise<void>;
  // editFilter: (filter: Filter) => Promise<void>;
  deleteLocalPost: (postId: string) => Promise<void>;
}

export class PostProvider extends Component<Props, State> {
  public static defaultProps = {
    postService: new PostServiceFactory().build(),
  };

  public constructor(props: Props) {
    super(props);

    this.state = this.getInitialState();
  }

  public getLocalPosts = async (): Promise<Post[]> => {
    const {postService} = this.props;
    const localPosts = await postService.getLocalPosts();

    return localPosts;
  };

  public addPost = async (post: Post): Promise<void> => {
    const {postService} = this.props;
    const payload = new AddPostPayload(post);

    await postService.addPost(payload);
  };

  public deleteLocalPost = async (postId: string): Promise<void> => {
    const {postService} = this.props;

    await postService.deleteLocalPost(postId);
  };

  private getInitialState = (): State => ({
    localPosts: [],
    externalPosts: [],
  });

  private getContextValue = (): PostContext => {
    const {localPosts, externalPosts} = this.state;

    return {
      localPosts,
      externalPosts,
      getLocalPosts: this.getLocalPosts,
      addPost: this.addPost,
      deleteLocalPost: this.deleteLocalPost,
    };
  };

  public render(): ReactElement {
    const {children} = this.props;

    return (
      <PostContext.Provider value={this.getContextValue()}>
        {children}
      </PostContext.Provider>
    );
  }
}

export const withPostProvider =
  (Child: any) =>
    (props: any): ReactElement =>
      (
        <PostProvider>
          <Child {...props} />
        </PostProvider>
      );

export const withPostConsumer =
  (Child: any) =>
    (props: any): ReactElement =>
      (
        <PostConsumer>
          {(context): ReactElement => <Child {...props} postContext={context} />}
        </PostConsumer>
      );
