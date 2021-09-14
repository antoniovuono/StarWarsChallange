import React from 'react';
import { CharacterCards } from '../../components/CharacterCards';

import {
 Container,
 Header,
 Logotipo,
 ListCharactersContent,
 Content,
 ListTitle,
 ListSubTitle,
} from './styles';

export function Home(){
return (
  <Container> 

    <Header>
      <Logotipo source={{ uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/06/Star-Wars-PNG.png' }} />
    </Header>

    <ListCharactersContent>

      <Content>

          <ListTitle>Lista:</ListTitle>

          <ListSubTitle>Foram encontrados 12 personagens</ListSubTitle>

      </Content>


      <CharacterCards />

      <CharacterCards />

      <CharacterCards />


    </ListCharactersContent>

    

  </Container>
  );
}