import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';

import { Text } from './Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    flex: 3,
    backgroundColor: colors.white,
    alignItems: "center",
    margin: 5
  },
  titleText: {
    fontWeight: 'bold',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
});

export const ListItem = ({ title, iconUrl, onPress = () => null }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        {iconUrl ? (
          <Image
            resizeMode={'contain'}
            style={{
              width: 50,
              height: 50,
              borderRadius: 10,
            }}
            source={iconUrl}
          />
        ) : null}
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ListSeparator = () => <View style={styles.separator} />;
