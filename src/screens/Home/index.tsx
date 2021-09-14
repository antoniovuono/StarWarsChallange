import React, { useState, useEffect } from 'react';

import { CharacterCards } from '../../components/CharacterCards';
import { FooterList } from '../../components/FooterList';
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
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(true);


async function fetchCharacters() {
    
  try {
 
      const response = await api.get(`/people/?page=${page}`);


      //console.log(response.data)
      setCharacters([...characters, ...response.data.results]);
      
      setPage(page+1);

  
  } catch(error) {
    console.log(error);
  } finally {
   setLoading(false);
  }

}

useEffect(() => {

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

      <ListTitle style={{ fontSize:13, padding: 5 }}>
        Role a lista para baixo para obter mais personagens
      </ListTitle>

        { loading ? <Load /> :

                <CharacterList

                  data={characters}
                  keyExtractor={ item => item.name}
                  renderItem={({ item }) => (
                      <CharacterCards name={item.name} />
                    )} 
                  onEndReached={fetchCharacters}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={ <FooterList Load={loading}/>}
              />
              
        }
           
            

    </ListCharactersContent>

  </Container>
  );
}
