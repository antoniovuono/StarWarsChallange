import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 120px;

   justify-content: center;
   align-items: center;

   margin-top: ${getStatusBarHeight() + 10}px;

`;

export const Logotipo = styled.Image`

      height: ${RFValue(50)}px;
      width:  ${RFValue(100)}px;

`;

export const ListCharactersContent = styled.View`

   width: 100%;
   padding: 25px 25px;
  

`;

