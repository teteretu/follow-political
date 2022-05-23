import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { List } from '../screens/List';
import { TextDemo, ButtonDemo, FormDemo } from '../screens/Demos';
import { DeputiesScreen } from '../screens/DeputiesScreen';
import { SenatorsScreen } from '../screens/SenatorsScreen';
import { Home } from '../screens/Home';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerTitle: 'Listar Deputados ou Senadores?' }} />
    <MainStack.Screen
      name="List"
      component={List}
      options={{ headerTitle: 'Listar Deputados ou Senadores?' }} />
    <MainStack.Screen
      name="DeputiesScreen"
      component={DeputiesScreen}
      options={{ headerTitle: 'Deputados' }}
    />
    <MainStack.Screen
      name="SenatorsScreen"
      component={SenatorsScreen}
      options={{ headerTitle: 'Senadores' }}
    />
    {/* <MainStack.Screen
      name="TextDemo"
      component={TextDemo}
      options={{ headerTitle: 'Text Demo' }}
    />
    <MainStack.Screen
      name="FormDemo"
      component={FormDemo}
      options={{ headerTitle: 'Form Demo' }}
    />
    <MainStack.Screen
      name="ButtonDemo"
      component={ButtonDemo}
      options={{ headerTitle: 'Button Demo' }}
    /> */}
  </MainStack.Navigator>
);
