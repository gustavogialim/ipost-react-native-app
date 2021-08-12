import * as React from 'react';
import {Modal} from 'react-native';

import Styled from './LoadingModal.styles.native';

interface Props {
  visible: boolean;
  text?: string;
}

const PaperIndicator = ({visible, text}: Props): React.ReactElement => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <Styled.Container>
        <Styled.Content>
          <Styled.Text>{text || 'Carregando...'}</Styled.Text>
        </Styled.Content>
      </Styled.Container>
    </Modal>
  );
};

export default PaperIndicator;
