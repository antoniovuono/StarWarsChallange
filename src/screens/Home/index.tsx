import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

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
 CharacterList,
 MyFavoritesButton,
 Ionicons,
} from './styles';


export function Home(){
const [characters, setCharacters] = useState<CharacterDTO[]>([]);
const [page, setPage] = useState(1);
const [loading, setLoading] = useState(true);

const navigation = useNavigation();
const theme = useTheme();

function handleCharactersDetails(character: CharacterDTO) {
    navigation.navigate('CharacterDetails', {character});
}

function handleFavorites() {
    navigation.navigate('Favorites');
}


async function fetchCharacters() {
    
  try {
 
      const response = await api.get(`/people/?page=${page}`);

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
        Role a lista para obter mais personagens
      </ListTitle>

        { loading ? <Load /> :

                <CharacterList

                  data={characters}
                  keyExtractor={ item => item.name}
                  renderItem={({ item }) => (
                      <CharacterCards name={item.name} onPress={() => handleCharactersDetails(item)} />
                    )} 
                  onEndReached={fetchCharacters}
                  onEndReachedThreshold={0.1}
                  ListFooterComponent={ <FooterList Load={loading}/>}
              />
              
        }
                      

    </ListCharactersContent>

    <MyFavoritesButton
      onPress={handleFavorites}
    >
        <Ionicons
            name="favorite"
            size={32}
            color={theme.colors.title}
        />
    </MyFavoritesButton>

  </Container>
  );
}
