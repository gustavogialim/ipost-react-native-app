import * as React from 'react';

import Styled from './Loading.styles.native';

const Loading = (): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.ActivityIndicator />
    </Styled.Container>
  );
};

export default Loading;
