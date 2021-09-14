import React from 'react';

import {
 Container,
 Name,
 ButtonFavorite,
 FavoriteIcon
} from './styles';

export function CharacterCards(){
return (
  <Container> 

      
       <Name>Luke Skill Walker</Name>

          <ButtonFavorite>
            <FavoriteIcon 
                name="favorite"
                size={24}
            />
          </ButtonFavorite>



  </Container>
  );
}