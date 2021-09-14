import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useTheme } from 'styled-components';

import {
 Container
} from './styles';

interface Props {
    Load: boolean;
}

export function FooterList({ Load }: Props){
const theme = useTheme();

return (
  <Container> 

      <ActivityIndicator 

        size={25}
        color={theme.colors.title}
        style={{ padding:10}}
      
      />

  </Container>
  );
}