import Api, {ApiError} from '@/utils/api/Api';
import {API_BASE_URL, DEFAULT_HTTP_TIMEOUT} from '@/config/environment';
import apiCatcher from '@/utils/api/apiCatcher/apiCatcher';
import dtoMapper from '@/utils/api/dtoMapper/dtoMapper';
import {compose} from '@/helpers/functionHelper';
import {Post} from '@/features/post/modules/interfaces';
import {ExternalPostsDto, PostDto} from '@/features/post/modules/dtos';

interface Dependencies {
  api: Api;
}

export default class ExternalPostRepository {
  private api: Api;
  private baseUrl: string;

  public constructor({api}: Dependencies) {
    this.api = api;
    this.baseUrl = `${API_BASE_URL}`;
  }

  public getExternalPosts = async (): Promise<[Post[], ApiError]> => {
    const url = `${this.baseUrl}/posts`;
    const httpParams = {
      url,
      timeout: DEFAULT_HTTP_TIMEOUT,
    };

    const apiResponse = await this.api.get(httpParams);
    const apiDtoMapper = dtoMapper<Post[]>(ExternalPostsDto);

    return compose(apiDtoMapper, apiCatcher)(apiResponse);
  };

  public getExternalPostDetails = async (
    postId: number,
  ): Promise<[Post, ApiError]> => {
    const url = `${this.baseUrl}/posts/${postId}`;
    const httpParams = {
      url,
      timeout: DEFAULT_HTTP_TIMEOUT,
    };

    const apiResponse = await this.api.get(httpParams);
    const apiDtoMapper = dtoMapper<Post>(PostDto);

    return compose(apiDtoMapper, apiCatcher)(apiResponse);
  };
}
