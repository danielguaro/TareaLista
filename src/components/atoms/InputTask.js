import {StyleSheet, TextInput} from 'react-native';

import React from 'react';

export const InputTask = ({task, setTask}) => {
  return (
    <TextInput
      style={styles.input}
      value={task}
      placeholder="Agregar Tarea"
      onChangeText={setTask}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderBottomWidth:2,
    borderLeftWidth: 1,
    borderRadius: 15,
    borderLeftColor: 'gray',
    borderBottomColor: 'gray',
    padding: 14,
  },
});
