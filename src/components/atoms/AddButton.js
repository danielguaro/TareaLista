import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';

export const AddButton = ({addTask}) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={addTask}>
      <Text style={styles.textButton}>Agregar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: '#B762C1',
    borderRadius: 50,
    padding: 12,
    marginLeft: 12,
    borderWidth:2,
    borderColor: '#ccc',
  },
  textButton: {
    fontWeight: 'bold',
    color: '#FFFCDC',
  }
});
