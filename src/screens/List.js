import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/List';
import Icon from '../../assets/adaptive-icon.png';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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

export const List = ({ navigation }) => {
  return (
    <>
      <FlatList
        style={styles.container}
        contentContainerStyle={{flexDirection: 'column'}}
        data={screens}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            iconUrl={item.iconUrl}
            onPress={() => navigation.push(item.target)}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />
    </>
  );
};
