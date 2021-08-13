import {DEFAULT_HTTP_TIMEOUT} from '@/config/environment';

import ExternalPostRepository from './ExternalPostRepository';

const buildInstance = (dependencies?: any): ExternalPostRepository => {
  const defaultDependencies = {
    api: {},
  };

  const finalDependencies = Object.assign(defaultDependencies, dependencies);
  return new ExternalPostRepository(finalDependencies);
};

describe('ExternalPostRepository', () => {
  describe('getExternalPosts method', () => {
    it('should call getExternalPosts method api with expected httParams', async () => {
      const apiResponse = [
        {
          id: 1,
          title: 'MOCK_TITLE',
          body: 'MOCK_BODY',
        },
      ];
      const api = {get: jest.fn().mockReturnValue([{data: apiResponse}])};

      // when
      const externalPostsRepository = buildInstance({api});
      await externalPostsRepository.getExternalPosts();

      // then
      expect(api.get).toBeCalledWith({
        url: expect.any(String),
        timeout: DEFAULT_HTTP_TIMEOUT,
      });
    });
  });

  describe('getExternalPostDetails method', () => {
    it('should call getExternalPostDetails method api with expected httParams', async () => {
      const postId = 1;
      const apiResponse = {
        id: 1,
        title: 'MOCK_TITLE',
        body: 'MOCK_BODY',
      };
      const api = {get: jest.fn().mockReturnValue([{data: apiResponse}])};

      // when
      const externalPostsRepository = buildInstance({api});
      await externalPostsRepository.getExternalPostDetails(postId);

      // then
      expect(api.get).toBeCalledWith({
        url: expect.any(String),
        timeout: DEFAULT_HTTP_TIMEOUT,
      });
    });
  });
});
