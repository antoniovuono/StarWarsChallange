import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
 Container,
 Header,
 BackButton,
 BackButtonIcon,
 Title,
 DetailsContent,
 DetailsHeader,
 DetailsImg,
 Name,
 DetailsBody,
 CharacteristicsContent,
 CharacteristicsTitle,
 CharacteristicsValue,
} from './styles';

export function CharacterDetails(){

const navigation = useNavigation();

function handleGoBack() {
  navigation.goBack();
}

return (
  <Container> 
      <Header>
        
          <BackButton onPress={handleGoBack}>
            <BackButtonIcon name="arrow-bold-left" size={24}/>
          </BackButton>
          <Title>Caracteristicas do personagem</Title>
      </Header>

      <DetailsContent>

        <DetailsHeader>
            <DetailsImg source={{ uri: 'https://t.ctcdn.com.br/jvXm7sJL_gdshT82RuOqnvdEyDQ=/512x288/smart/i447716.jpeg'}} />
            <Name>Luke SkillWalker</Name>
        </DetailsHeader>

        <DetailsBody>

          <CharacteristicsContent>
            <CharacteristicsTitle>Altura:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Massa:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Cor do Cabelo:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Cor da Pele:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Ano de Nascimento:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Gênero:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

        </DetailsBody>

      </DetailsContent>
  </Container>
  );
}