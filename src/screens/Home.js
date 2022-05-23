import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';
import Icon from '../../assets/adaptive-icon.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
});

const screens = [
  {
    title: 'Deputados',
    iconUrl: Icon,
    target: 'DeputiesScreen',
  },
  {
    title: 'Senadores',
    iconUrl: Icon,
    target: 'SenatorsScreen',
  },
];

export const Home = ({ navigation }) => {
  return (
    <>
      <View style={[styles.container, {
        flexDirection: "column"
      }]}>
        <ListItem
          title={screens[0].title}
          iconUrl={screens[0].iconUrl}
          onPress={() => navigation.push(screens[0].target)} />
        <ListSeparator />
        <ListItem
          title={screens[1].title}
          iconUrl={screens[1].iconUrl}
          onPress={() => navigation.push(screens[1].target)} />
      </View>
    </>
  );
};
