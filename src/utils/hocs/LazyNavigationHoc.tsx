import React, {PureComponent} from 'react';
import {InteractionManager} from 'react-native';

import Loading from '@/components/Loading/Loading.native';

interface Props {
  children: React.ReactElement;
}
export default class LazyNavigationHoc extends PureComponent<Props> {
  public state = {
    hidden: true,
  };

  public componentDidMount(): void {
    InteractionManager.runAfterInteractions(() => {
      this.setState({hidden: false});
    });
  }

  public render(): React.ReactElement {
    const {children} = this.props;

    if (this.state.hidden) {
      return <Loading />;
    }

    return children;
  }
}
