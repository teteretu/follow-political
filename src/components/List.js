import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, useWindowDimensions } from 'react-native';

import { Text } from './Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  row: {
    // backgroundColor: colors.white,
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
              width: 150,
              height: 150,
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
