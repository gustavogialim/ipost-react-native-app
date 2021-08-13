import StorageKeys from '@/utils/storage/storageKeys';
import {
  AddPostPayload,
  EditPostPayload,
} from '@/features/post/modules/payloads';

import LocalPostRepository from './LocalPostRepository';

const buildInstance = (dependencies?: any): LocalPostRepository => {
  const defaultDependencies = {
    api: {},
  };

  const finalDependencies = Object.assign(defaultDependencies, dependencies);
  return new LocalPostRepository(finalDependencies);
};

describe('LocalPostRepository', () => {
  describe('getLocalPosts method', () => {
    it('should call getItem from storage when the method getLocalPosts is called', async () => {
      const storage = {
        getItem: jest.fn(),
      };

      // when
      const localPostRepository = buildInstance({storage});
      await localPostRepository.getLocalPosts();

      // then
      expect(storage.getItem).toBeCalledWith(StorageKeys.POSTS);
    });
  });

  describe('addLocalPost method', () => {
    it('should call getItem and setItem from storage when the method addLocalPost is called', async () => {
      const storage = {
        setItem: jest.fn(),
        getItem: jest.fn().mockReturnValue(''),
      };
      const addPostPayload = new AddPostPayload({
        title: 'MOCK_TITLE',
        text: 'MOCK_TEXT',
        author: 'MOCK_AUTHOR',
      });
      const expectedArrayOfPosts = [addPostPayload.post];
      const expectedArrayOfPostsJson = JSON.stringify(expectedArrayOfPosts);

      // when
      const localPostRepository = buildInstance({storage});
      await localPostRepository.addLocalPost(addPostPayload);

      // then
      expect(storage.getItem).toBeCalledWith(StorageKeys.POSTS);
      expect(storage.setItem).toBeCalledWith(
        StorageKeys.POSTS,
        expectedArrayOfPostsJson,
      );
    });
  });

  describe('editLocalPost method', () => {
    it('should call getItem and setItem from storage when the method editLocalPost is called', async () => {
      const originalPost = {
        id: '1',
        title: 'MOCK_TITLE',
        text: 'MOCK_TEXT',
        author: 'MOCK_AUTHOR',
      };
      const changedPost = {
        id: '1',
        title: 'MOCK_TITLE_CHANGED',
        text: 'MOCK_TEXT_CHANGED',
        author: 'MOCK_AUTHOR_CHANGED',
      };
      const storage = {
        setItem: jest.fn(),
        getItem: jest.fn().mockReturnValue(JSON.stringify([originalPost])),
      };
      const editPostPayload = new EditPostPayload(changedPost);
      const expectedArrayOfPosts = [editPostPayload.post];
      const expectedArrayOfPostsJson = JSON.stringify(expectedArrayOfPosts);

      // when
      const localPostRepository = buildInstance({storage});
      await localPostRepository.editLocalPost(editPostPayload);

      // then
      expect(storage.getItem).toBeCalledWith(StorageKeys.POSTS);
      expect(storage.setItem).toBeCalledWith(
        StorageKeys.POSTS,
        expectedArrayOfPostsJson,
      );
    });
  });

  describe('deleteLocalPost method', () => {
    it('should call getItem and setItem from storage when the method deleteLocalPost is called', async () => {
      const postToDelete = {
        id: '1',
        title: 'MOCK_TITLE',
        text: 'MOCK_TEXT',
        author: 'MOCK_AUTHOR',
      };
      const storage = {
        setItem: jest.fn(),
        getItem: jest.fn().mockReturnValue(JSON.stringify([postToDelete])),
      };
      const emptyArrayJson = JSON.stringify([]);

      // when
      const localPostRepository = buildInstance({storage});
      await localPostRepository.deleteLocalPost(postToDelete.id);

      // then
      expect(storage.getItem).toBeCalledWith(StorageKeys.POSTS);
      expect(storage.setItem).toBeCalledWith(StorageKeys.POSTS, emptyArrayJson);
    });
  });
});
