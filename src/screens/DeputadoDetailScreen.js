import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
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

export const DeputadoDetailScreen = ({ route, navigation }) => {
  const [deputado, setDeputado] = useState({});

  useEffect(async () => {
    console.log("DEPUTADO: ", route.params);
    if (route.params) {
      setDeputado(route.params.deputado);
    }
  }, []);

  return (
    <>
      {deputado ? (
        <View style={styles.container}>
          {deputado.urlFoto ? (
            <Image
              resizeMode={'contain'}
              style={{
                width: 150,
                height: 150,
                borderRadius: 10,
              }}
              source={{ uri: deputado.urlFoto }}
            />
          ) : null}
          <Text style={styles.titleText}>{deputado.nome}</Text>
        </View>) : null}
    </>
  );
};
