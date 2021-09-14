import React from 'react';
import { CharacterCards } from '../../components/CharacterCards';

import {
 Container,
 Header,
 Logotipo,
 ListCharactersContent
} from './styles';

export function Home(){
return (
  <Container> 

    <Header>
      <Logotipo source={{ uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/06/Star-Wars-PNG.png' }} />
    </Header>

    <ListCharactersContent>

      <CharacterCards />

      <CharacterCards />

      <CharacterCards />


    </ListCharactersContent>

    

  </Container>
  );
}