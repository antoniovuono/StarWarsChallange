import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`

    margin-top: 10px;

    width: 100%;
    height: 50px;
    background-color: ${({theme}) => theme.colors.shpae_dark};


    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    border-radius: 5px;

   

`;


export const Name = styled.Text`

    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(16)}px;

`;