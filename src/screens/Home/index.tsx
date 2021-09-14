import React, { useState, useEffect } from 'react';

import { CharacterCards } from '../../components/CharacterCards';
import { Load } from '../../components/Load';

import { CharacterDTO } from '../../dtos/CharacterDTO';
import { api } from '../../services/api';

import {
 Container,
 Header,
 Logotipo,
 ListCharactersContent,
 Content,
 ListTitle,
 ListSubTitle,
 CharacterList
} from './styles';

export function Home(){
const [characters, setCharacters] = useState<CharacterDTO[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {

  async function fetchCharacters() {
    
    try {
    const response = await api.get('/people');

    //console.log(response.data)
    setCharacters(response.data.results);
    
    } catch(error) {
      console.log(error);
    } finally {
     setLoading(false);
    }

  }

  fetchCharacters();

}, []);

return (
  <Container> 

    <Header>
      <Logotipo source={{ uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/06/Star-Wars-PNG.png' }} />
    </Header>

    <ListCharactersContent>

      <Content>

          <ListTitle>Lista:</ListTitle>

          <ListSubTitle>Foram encontrados {characters.length} personagens</ListSubTitle>

      </Content>

        { loading ? <Load /> :

                <CharacterList

                  data={characters}
                  keyExtractor={ item => item.name}
                  renderItem={({ item }) => (
                      <CharacterCards name={item.name} />
                    )} 
              />
              
        }
           
            


    </ListCharactersContent>

  </Container>
  );
}