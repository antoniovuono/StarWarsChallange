import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { CharacterDTO } from '../../dtos/CharacterDTO';
import { MaterialIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

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

export const Content = styled.View`

  width: 100%;

  flex-direction: row;

  padding: 10px 5px;


`;

export const ListTitle = styled.Text`

   color: ${({theme}) => theme.colors.title};
   font-family: ${({theme}) => theme.fonts.secondary_600};
   font-size: ${RFValue(14)}px; 
`;

export const ListSubTitle = styled.Text`

   color: ${({theme}) => theme.colors.shape};
   font-family: ${({theme}) => theme.fonts.secondary_400};
   font-size: ${RFValue(14)}px; 

   margin-left: 5px;

`;


export const ListCharactersContent = styled.View`

   width: 100%;
   padding: 25px 25px;



`;

export const CharacterList = styled(FlatList as new () => FlatList<CharacterDTO>)``;

export const MyFavoritesButton = styled(RectButton)`

   width: 60px;
   height: 60px;

   background-color: ${({theme}) => theme.colors.shpae_dark};


   justify-content: center;
   align-items: center;

   border-radius: 30px;

   position: absolute;
   top: 75px;
   right: 20px;
`;

export const Ionicons = styled(MaterialIcons)`


`;
