import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';
import { CharacterDetails } from '../screens/CharacterDetails';


const { Navigator, Screen } = createStackNavigator ();


export function AppRoutes() {

    return (
        <Navigator
          headerMode="none"
        >
                <Screen
                    name="Home"
                    component={Home}
                
                />
                <Screen 
                    name="Favorites"
                    component={Favorites}
                    
                />

                <Screen 

                    name="CharacterDetails"
                    component={CharacterDetails}

                />



        </Navigator>

    );
}