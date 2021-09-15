import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
 Container,
 Header,
 BackButton,
 BackButtonIcon,
 Title,
} from './styles';

export function Favorites(){
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
        <Title>Personagens favoritos:</Title>
    </Header>

  </Container>
  );
}