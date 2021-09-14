import React, { useState, useEffect } from 'react';
import { CharacterCards } from '../../components/CharacterCards';

import { CharacterDTO } from '../../dtos/CharacterDTO';

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
const [ characters, setCharacters] = useState<CharacterDTO[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

  async function fetchCharacters() {
    
    try {


    } catch(error) {

    }

  }

}, []);

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


      <CharacterCards name="Luke Skal Walker" />

      <CharacterCards name="Mareta 12"  />


    </ListCharactersContent>

    

  </Container>
  );
}