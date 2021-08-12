import React from 'react';

import {compose} from '@/helpers/functionHelper';
import {withPostProvider} from '@/features/post/providers/PostProvider';

import AppRouter from '@/routes/AppRouter';

const App = (): React.ReactElement => {
  return <AppRouter />;
};

const AppComposed = compose(withPostProvider)(App);

export default AppComposed;
