//
//Import------------------------------------------------------------------------------------------------------
import './config/statusbar';

import * as  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import List from './page/list';
import Ingredients from './page/ingredients';
import Preparation from './page/preparation';

const Stack = createStackNavigator();

//Conponent do MyApp------------------------------------------------------------------------------------------
export default function MyApp(){ 
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
              headerStyle: {
                height:70,       
              },
              headerTintColor: '#fff',
            }
          }/>
{/*-----------------------------------------------Ingredients---------------------------------------------- */}
          <Stack.Screen 
            name="Ingredients" 
            component={Ingredients} 
            options={{ 
              headerTransparent:true,
              title:'',
              headerStyle: {height:70},
              headerTintColor: '#fff',
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
              headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
