import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';

import colors from '../constants/colors';
import { ListSeparator } from '../components/List';
import Icon from '../../assets/adaptive-icon.png';
import DeputiesService from '../services/DeputiesService';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "column", // main axis
    justifyContent: "center", // main axis
    alignItems: "center", // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: "16%",
    marginBottom: 6,
  },
  titleText: {
    fontWeight: 'bold',
    padding: 20,
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

export const DeputiesScreen = ({ navigation }) => {
  const [deputiesList, setDeputiesList] = useState([]);

  useEffect(async () => {
    const deputies = await new DeputiesService().getDataUsingGet("https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome");

    console.log("DEPUTIES: ", deputies);
    setDeputiesList(deputies.dados);
  }, []);

  return (
    <>
      {deputiesList ? (<FlatList
        style={styles.container}
        contentContainerStyle={{ flexDirection: 'column' }}
        data={deputiesList}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <ListItem
            title={item.nome}
            iconUrl={item.urlFoto}
            // onPress={() => navigation.push(item.target)}
          />
        )}
        ItemSeparatorComponent={ListSeparator}
        ListHeaderComponent={ListSeparator}
        ListFooterComponent={ListSeparator}
      />) : null}
    </>
  );
};

const ListItem = ({ title, iconUrl, onPress = () => null }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        {iconUrl ? (
          <Image
            resizeMode={'contain'}
            style={{
              width: 150,
              height: 150,
              borderRadius: 10,
            }}
            source={{uri: iconUrl}}
          />
        ) : null}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}