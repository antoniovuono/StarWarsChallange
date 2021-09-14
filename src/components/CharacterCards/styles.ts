import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';



export const Container = styled.View`

    margin-top: 10px;

    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.shpae_dark};


    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 14px;

    border-radius: 5px;

   

`;


export const Name = styled.Text`

    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(16)}px;

`;

export const ButtonFavorite = styled.TouchableOpacity``;

export const FavoriteIcon = styled(MaterialIcons )`

    color: ${({theme}) => theme.colors.title};

`;