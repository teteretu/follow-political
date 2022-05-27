import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DeputadosScreen, DeputiesScreen } from '../screens/DeputadosScreen';
import { SenatorsScreen } from '../screens/SenatorsScreen';
import { Home } from '../screens/Home';
import colors from '../constants/colors';
import { DeputadoDetailScreen, DeputiesDetailScreen } from '../screens/DeputadoDetailScreen';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerMode: 'screen',
      headerTintColor: colors.primary,
      headerStyle: { backgroundColor: colors.background },
    }}>
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Listar Deputados ou Senadores?',
      }} />
    <MainStack.Screen
      name="DeputadosScreen"
      component={DeputadosScreen}
      options={{
        headerTitle: 'Deputados',
      }}
    />
    <MainStack.Screen
      name="SenatorsScreen"
      component={SenatorsScreen}
      options={{ headerTitle: 'Senadores' }}
    />
    <MainStack.Screen
      name="DeputadoDetailScreen"
      component={DeputadoDetailScreen}
      options={({ route }) => ({ title: route.params.deputado.nome })}
    />
    {/* 
    <MainStack.Screen
      name="List"
      component={List}
      options={{ headerTitle: 'Listar Deputados ou Senadores?' }} />
    <MainStack.Screen
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
