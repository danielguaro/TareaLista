import { StyleSheet, View } from 'react-native';

import React from 'react';

export const Header = ({input, button}) => {
  return (
    <View style={styles.header}>
      {input()}
      {button()}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 12,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})