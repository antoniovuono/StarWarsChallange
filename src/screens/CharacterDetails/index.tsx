import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

import { CharacterDTO } from '../../dtos/CharacterDTO';

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
 Footer,
 ButtonFavorite,
 TitleButton,
 FavoriteIcon,
} from './styles';


interface Params {
  character: CharacterDTO;
}

export function CharacterDetails(){

const navigation = useNavigation();
const route = useRoute();
const { character } = route.params as Params;

function handleGoBack() {
  navigation.goBack();
}

async function handleAddToFavorites() {
  try {
    const dataKey = '@starwarschallange:favorites';
    const storageItems = await AsyncStorage.getItem(dataKey);
    const formattedData = storageItems ? JSON.parse(storageItems) : [];

    const findData = formattedData.find((item:CharacterDTO) => item.name === character.name);

    if(findData) return;

    await AsyncStorage.setItem('@starwarschallange:favorites', JSON.stringify([...formattedData, character]));

    navigation.navigate('Favorites');
    
  } catch (error) {
    console.log(error)

    Alert.alert('Não foi possível favoritar o personagem !');
  }
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
            <Name>{character.name}</Name>
        </DetailsHeader>

        <DetailsBody>

          <CharacteristicsContent>
            <CharacteristicsTitle>Altura:</CharacteristicsTitle>
            <CharacteristicsValue>{character.height}m</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Massa:</CharacteristicsTitle>
            <CharacteristicsValue>{character.mass}kg</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Cor do Cabelo:</CharacteristicsTitle>
            <CharacteristicsValue>{character.hair_color}</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Cor da Pele:</CharacteristicsTitle>
            <CharacteristicsValue>{character.skin_color}</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Ano de Nascimento:</CharacteristicsTitle>
            <CharacteristicsValue>{character.birth_year}</CharacteristicsValue>
          </CharacteristicsContent>

          <CharacteristicsContent>
            <CharacteristicsTitle>Gênero:</CharacteristicsTitle>
            <CharacteristicsValue>{character.gender}</CharacteristicsValue>
          </CharacteristicsContent>

        </DetailsBody>

        <Footer>
          <ButtonFavorite
            onPress={handleAddToFavorites}
          >
              <TitleButton>FAVORITAR PERSONAGEM</TitleButton>
              <FavoriteIcon
               name="favorite"
               size={24}
              />
          </ButtonFavorite>
        </Footer>

      </DetailsContent>
  </Container>
  );
}