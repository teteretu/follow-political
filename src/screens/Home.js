import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';
import Deputados from '../../assets/Deputados.png';
import Senator from '../../assets/Senator.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 8,
    flexDirection: "column", // main axis
  },
});

const screens = [
  {
    title: 'Deputados',
    iconUrl: Deputados,
    target: 'DeputadosScreen',
  },
  {
    title: 'Senadores',
    iconUrl: Senator,
    target: 'SenatorsScreen',
  },
];

export const Home = ({ navigation }) => {
  return (
    <>
      <FlatList
        style={styles.container}
        data={screens}
        keyExtractor={item => item.title}
        contentContainerStyle={{}}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            iconUrl={item.iconUrl}
            onPress={() => navigation.push(item.target)}
          />
        )}
        ListHeaderComponent={ListSeparator}
      />
    </>
  );
};
