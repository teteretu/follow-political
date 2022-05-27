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
import Service from '../services/Service';

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
    marginTop: 30,
    marginBottom: 6,
  },
  titleText: {
    fontWeight: 'bold',
    padding: 20,
  },
});

const DEPUTIES_URL = "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome";

export const DeputadosScreen = ({ navigation }) => {
  const [deputiesList, setDeputiesList] = useState([]);

  useEffect(async () => {
    const deputies = await new Service().getDataUsingGet(DEPUTIES_URL);

    if (deputies) {
      setDeputiesList(deputies.dados);
    }
  }, []);

  return (
    <>
      {deputiesList ? (<FlatList
        style={styles.container}
        contentContainerStyle={{ flexDirection: 'column' }}
        data={deputiesList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            title={item.nome}
            iconUrl={item.urlFoto}
            onPress={() => navigation.push("DeputadoDetailScreen", {"deputado": item})}
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
            source={{ uri: iconUrl }}
          />
        ) : null}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}