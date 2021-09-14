import React from 'react';

import {
 Container,
 Name,
 ButtonFavorite,
 FavoriteIcon
} from './styles';

interface Props {
  name: string;
}

export function CharacterCards({ name }: Props){
return (
  <Container> 

      
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