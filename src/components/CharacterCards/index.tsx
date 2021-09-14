import React from 'react';

import {
 Container,
 Name,
 ButtonFavorite,
 FavoriteIcon
} from './styles';

interface Props {
  name: string;
  onPress: () => void;
}

export function CharacterCards({ name, onPress, ...rest }: Props){
return (
  <Container onPress={onPress} {...rest}> 
      
       <Name>{name}</Name>

          <ButtonFavorite>
            <FavoriteIcon 
                name="favorite"
                size={24}
            />
          </ButtonFavorite>



  </Container>
  );
}