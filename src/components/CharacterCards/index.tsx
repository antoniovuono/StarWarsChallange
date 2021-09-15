import React from 'react';

import {
 Container,
 Name,
 ButtonNextPage,
 NextPageIcon
} from './styles';

interface Props {
  name: string;
  onPress: () => void;
}

export function CharacterCards({ name, onPress, ...rest }: Props){
return (
  <Container onPress={onPress} {...rest}> 
      
       <Name>{name}</Name>

          <ButtonNextPage>
            <NextPageIcon 
                name="rightcircle"
                size={24}
            />
          </ButtonNextPage>



  </Container>
  );
}