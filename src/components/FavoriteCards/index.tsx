import React from 'react';

import {
 Container,
 Name,

} from './styles';

interface Props {
  name: string;

}

export function FavoriteCards({ name }: Props){
return (
  <Container> 

      <Name>{name}</Name>

  </Container>
  );
}