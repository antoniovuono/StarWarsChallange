import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Entypo } from '@expo/vector-icons'; 


export const Container = styled.View`
     flex: 1;
     background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 150px;
   
   align-items: center;
   flex-direction: row;

   padding: 0 24px;

   margin-top: ${getStatusBarHeight() + 1}px;


`;

export const BackButton = styled.TouchableOpacity``;

export const BackButtonIcon = styled(Entypo)`

   color: ${({theme}) => theme.colors.title};

`;



export const Title = styled.Text`

   color: ${({theme}) => theme.colors.title};
   font-size: ${RFValue(18)}px;

   font-family: ${({theme}) => theme.fonts.secondary_600};

   margin-left: 50px;

`;

export const FavoritesListContent = styled.View`

   width: 100%;

   padding: 5px 20px;

`;

export const FavoriteTitle = styled.Text`

   color: ${({theme}) => theme.colors.title};
   font-size: ${RFValue(18)}px;
   font-family: ${({theme}) => theme.fonts.secondary_600};

`;
