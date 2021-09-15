import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CharacterDTO } from '../../dtos/CharacterDTO';
import { FavoriteCards } from '../../components/FavoriteCards';

import {
 Container,
 Header,
 BackButton,
 BackButtonIcon,
 Title,
 FavoritesListContent,
 FavoriteTitle
} from './styles';
import { FlatList } from 'react-native-gesture-handler';


export function Favorites(){
const [favorites, setFavorites] = useState<CharacterDTO[]>([])

const navigation = useNavigation();

function handleGoBack() {
  navigation.goBack();
}

async function loadFavorites() {
  const dataKey = '@starwarschallange:favorites';
  const storageItems = await AsyncStorage.getItem(dataKey);
  const favorites = storageItems ? JSON.parse(storageItems) : [];

  console.log(favorites)

  setFavorites(favorites);

}

useEffect(() => {

  loadFavorites();

}, [])

return (
  <Container> 

    <Header>
        
        <BackButton onPress={handleGoBack}>
          <BackButtonIcon name="arrow-bold-left" size={24}/>
        </BackButton>
        <Title>Personagens favoritos:</Title>
    </Header>

    <FavoritesListContent>

       <FavoriteTitle>Favoritos:</FavoriteTitle>

       <FlatList 
          data={favorites}
          keyExtractor={ item => item.name}
          renderItem={ ({item}) => <FavoriteCards name={item.name} />}

       />


    </FavoritesListContent>


  </Container>
  );
}