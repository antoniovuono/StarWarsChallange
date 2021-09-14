import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import { Home } from '../screens/Home';
import { CharacterDetails } from '../screens/CharacterDetails';

const { Navigator, Screen } = createBottomTabNavigator();


export function AppRoutes() {
    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
            />
            <Screen 
                name="CharacterDetails"
                component={CharacterDetails}
            />
        </Navigator>
    );
}