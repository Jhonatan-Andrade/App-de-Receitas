//
//Import------------------------------------------------------------------------------------------------------
import './config/statusbar';

import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './page/list';
import Ingredients from './page/ingredients';
import Preparation from './page/preparation';
import Settings from './page/settings'

import Theme from './config/themeSchema'

const Stack = createStackNavigator();

//Conponent do MyApp------------------------------------------------------------------------------------------
export default function MyApp(){ 

    const color = Theme.color
    const background = Theme.background

    const onSettings=({navigation})=>{
      navigation.push('Ingredients',item)
    }
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="List">
{/*-----------------------------------------------List---------------------------------------------- */}
          <Stack.Screen 
            name="List" 
            component={List} 
            options={{ 
              headerTransparent:true,
              title:'',
              headerTintColor: color,
            }}
          />
          {/*-----------------------------------------------List---------------------------------------------- */}
          <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={{ 
              headerTransparent:true,
              title:'',
              headerTintColor: color,
            }}
          />
{/*-----------------------------------------------Ingredients---------------------------------------------- */}
          <Stack.Screen 
            name="Ingredients" 
            component={Ingredients} 
            options={{ 
              headerTransparent:true,
              title:'',
              headerTintColor: color,
            }}
          />
          {/*-----------------------------------------------Preparation---------------------------------------------- */}
          <Stack.Screen 
            name="Preparation" 
            component={Preparation} 
            options={{ 
              headerTransparent:true,
              title:'',
              headerStyle: {height:70},
              headerTintColor: color,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
