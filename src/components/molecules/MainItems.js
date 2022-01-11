import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

export const MainItems = ({data, deleteTask, completeTask}) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: data.estado ? '#519259' : '#DD4A48'}
      ]}>
      <TouchableOpacity
        onPress={()=>deleteTask(data.id)}
        >
        <Text style={styles.deleteButton}>Eliminar</Text>
      </TouchableOpacity>
      <Text style={styles.description}>{data.description}</Text>
      <TouchableOpacity
        onPress={()=> completeTask(data.id)}
        >
        <Text style={styles.estadoTask}>
          {data.estado ? 'completo' : 'incompleto'}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal:14,
    justifyContent: 'space-between',
    paddingVertical: 30,
    margin: 4,
    borderRadius: 20,
    elevation:40,
  },
  deleteButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
  description: {},
  estadoTask: {
    fontSize: 12,
    fontWeight: '700',
    color: 'black'
  },
})