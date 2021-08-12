import React from 'react';

import Button from '@/components/Button/Button.native';
// import SearchInput from '@/components/SearchInput/SearchInput.container';
// import SmallButton from '@/components/SmallButton/SmallButton.container';
// import ListFiltersIcon from '@/assets/icons/list-filters.svg';
// import {PaperInfo} from '@/modules/paper/interfaces';

import Styled from './Home.styles.native';

interface Props {
  goToAddPostScreen: () => void;
  goToMyFiltersScreen: () => void;
}

const HomeScreen = ({
  goToAddPostScreen,
  goToMyFiltersScreen,
}: Props): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        {/* <SearchInput
          placeholderText="PROCURAR POR PAPEL DENTRO DO FILTRO APLICADO"
          onSubmit={onSubmitSearch}
        />
        <Styled.FiltersContainer>
          <Styled.AppliedFiltersText>
            Filtros aplicados:
          </Styled.AppliedFiltersText>

          <SmallButton onPress={openListFilters} Icon={ListFiltersIcon} />
        </Styled.FiltersContainer> */}
        <Styled.WelcomeText>Bem vindo ao iPost</Styled.WelcomeText>
        <Styled.WelcomeText>Gustavo!</Styled.WelcomeText>
      </Styled.HeaderContainer>
      <Styled.ContentContainer>
        <Button text="Meus Post" onPress={goToMyFiltersScreen} />
      </Styled.ContentContainer>
      <Styled.FooterContainer>
        <Button text="Novo Post" onPress={goToAddPostScreen} />
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

export default HomeScreen;
