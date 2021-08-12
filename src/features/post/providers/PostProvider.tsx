/* eslint-disable prettier/prettier */
import React, {createContext, Component, ReactElement} from 'react';

import PostService from '@/features/post/modules/services/PostService';
import PostServiceFactory from '@/features/post/modules/services/PostServiceFactory';
import {Post} from '@/features/post/modules/interfaces';
import {AddPostPayload, EditPostPayload} from '@/features/post/modules/payloads';

export const PostContext = createContext({});
const PostConsumer = PostContext.Consumer;

interface Props {
  postService: PostService;
  children: ReactElement;
}

interface State {
  localPosts: Post[];
  externalPosts: Post[];
  selectedPostToEdit: Post;
}

export interface PostContext {
  localPosts: Post[];
  externalPosts: Post[];
  selectedPostToEdit: Post;
  getLocalPosts: () => Promise<Post[]>;
  // getFilterInformation: (filterId: string) => Promise<Filter>;
  // getPopularFilters: (searchText?: string) => Promise<Filter[]>;
  addLocalPost: (post: Post) => Promise<void>;
  editLocalPost: (post: Post) => Promise<void>;
  deleteLocalPost: (postId: string) => Promise<void>;
  setSelectedPostToEdit: (post: Post) => void;
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

  public addLocalPost = async (post: Post): Promise<void> => {
    const {postService} = this.props;
    const payload = new AddPostPayload(post);

    await postService.addLocalPost(payload);
  };

  public editLocalPost = async (post: Post): Promise<void> => {
    const {postService} = this.props;
    const payload = new EditPostPayload(post);

    await postService.editLocalPost(payload);
  };

  public deleteLocalPost = async (postId: string): Promise<void> => {
    const {postService} = this.props;

    await postService.deleteLocalPost(postId);
  };

  public setSelectedPostToEdit = (post: Post): void => {
    this.setState({selectedPostToEdit: post});
  };

  private getInitialState = (): State => ({
    localPosts: [],
    externalPosts: [],
    selectedPostToEdit: {
      title: '',
      text: '',
      author: '',
      date: new Date(),
    },
  });

  private getContextValue = (): PostContext => {
    const {localPosts, externalPosts, selectedPostToEdit} = this.state;

    return {
      localPosts,
      externalPosts,
      selectedPostToEdit,
      getLocalPosts: this.getLocalPosts,
      addLocalPost: this.addLocalPost,
      editLocalPost: this.editLocalPost,
      deleteLocalPost: this.deleteLocalPost,
      setSelectedPostToEdit: this.setSelectedPostToEdit,
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
