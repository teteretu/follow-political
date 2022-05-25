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

const SENATORS_URL = "https://legis.senado.leg.br/dadosabertos/senador/lista/atual";

export const SenatorsScreen = ({ navigation }) => {
  const [senatorsList, setSenatorsList] = useState([]);

  useEffect(async () => {
    const senators = await new Service().getDataUsingGet(SENATORS_URL);

    console.log("SENATORS: ", senators);
    if (senators) {
      setSenatorsList(senators.ListaParlamentarEmExercicio.Parlamentares.Parlamentar);
    }
  }, []);

  return (
    <>
      {senatorsList ? (<FlatList
        style={styles.container}
        contentContainerStyle={{ flexDirection: 'column' }}
        data={senatorsList}
        keyExtractor={item => item.IdentificacaoParlamentar.CodigoParlamentar}
        renderItem={({ item }) => (
          <ListItem
            key={item.IdentificacaoParlamentar.CodigoParlamentar}
            title={item.IdentificacaoParlamentar.NomeParlamentar}
            iconUrl={item.IdentificacaoParlamentar.UrlFotoParlamentar}
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
            source={{ uri: iconUrl }}
          />
        ) : null}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}