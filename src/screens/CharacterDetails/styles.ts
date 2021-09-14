import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons'; 
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
   flex: 1;
   background-color: ${({theme}) => theme.colors.primary_background};
`;

export const Header = styled.View`

   width: 100%;
   height: 150px;
   
   justify-content: space-between;
   align-items: center;
   flex-direction: row;

   padding: 0 24px;

   margin-top: ${getStatusBarHeight() + 1}px;


`;

export const BackButton = styled(Entypo)`

   color: ${({theme}) => theme.colors.title};

`;



export const Title = styled.Text`

   color: ${({theme}) => theme.colors.title};
   font-size: ${RFValue(18)}px;

   font-family: ${({theme}) => theme.fonts.secondary_600};

`;

export const DetailsContent = styled.View`

   flex: 1;
   width: 100%;

   height: 100%;



`;

export const DetailsHeader = styled.View`

   justify-content: center;
   align-items: center;

`;

 export const DetailsImg = styled.Image`
 
   width: 220px;
   height: 220px;

   border-radius: 10px;

 
 `;

 export const Name = styled.Text`
 
   color: ${({theme}) => theme.colors.title};
   font-size: ${RFValue(24)}px;
   font-family: ${({theme}) => theme.fonts.secondary_500};

   margin-top: 20px;
 
 `;


export const DetailsBody = styled.View`

   align-items: center;

   margin-top: 20px;

`;

export const CharacteristicsContent = styled.View`

      flex-direction: row;
      align-items: center;

      padding: 5px 10px;

`;

export const CharacteristicsTitle = styled.Text`

   color: ${({theme}) => theme.colors.title};
   font-size: ${RFValue(20)}px;
   font-family: ${({theme}) => theme.fonts.primary_500};

`;

export const CharacteristicsValue = styled.Text`

   color: ${({theme}) => theme.colors.sub_title};
   font-size: ${RFValue(20)}px;
   font-family: ${({theme}) => theme.fonts.primary_500};

   margin-left: 10px;


`;

