import AppScreens from '@/routes/appScreens';

export type RootStackParamList = {
  [AppScreens.HomeStack]: undefined;
};

export type HomeStackParamList = {
  [AppScreens.Home]: undefined;
  [AppScreens.AddPost]: undefined;
  [AppScreens.EditPost]: undefined;
  [AppScreens.MyPostsStack]: undefined;
  [AppScreens.ExternalPostsStack]: undefined;
};

export type ExternalPostsStackParamList = {
  [AppScreens.ExternalPosts]: undefined;
};

export type MyPostsStackParamList = {
  [AppScreens.MyPosts]: undefined;
};
