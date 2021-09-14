import React from 'react';

import {
 Container,
 Header,
 BackButton,
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
return (
  <Container> 
      <Header>
        <BackButton name="arrow-bold-left" size={24}/>
        <Title>Caracteristicas do personagem</Title>
      </Header>

      <DetailsContent>

        <DetailsHeader>
            <DetailsImg source={{ uri: 'https://t.ctcdn.com.br/jvXm7sJL_gdshT82RuOqnvdEyDQ=/512x288/smart/i447716.jpeg'}} />
            <Name>Luke SkillWalker</Name>
        </DetailsHeader>

        <DetailsBody>

          <CharacteristicsContent>
            <CharacteristicsTitle>Height:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Mass:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Hair Color:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Skin Color:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Birthday Year:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Gender:</CharacteristicsTitle>
            <CharacteristicsValue>1.60</CharacteristicsValue>
          </CharacteristicsContent>

        </DetailsBody>

      </DetailsContent>
  </Container>
  );
}