import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import React, {useState} from 'react';

import {AddButton} from '../atoms/AddButton';
import { Header } from '../molecules/Header';
import {InputTask} from '../atoms/InputTask';
import { MainItems } from '../molecules/MainItems';

function AllView() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([
      ...taskList,
      {
        id: Math.floor(Math.random() * 100),
        estado: false,
        description: task,
      },
    ]);
    setTask('');
  };

  const deleteTask = (id) => {
    const listWithoutTask = taskList.filter(task => task.id !== id);
    setTaskList([...listWithoutTask]);
  }

  const completeTask = (id) => {
    const listComplete = taskList.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          estado: true,
        };
      }
      return task;
    })
    setTaskList([...listComplete])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header
        input={() => <InputTask task={task} setTask={setTask} />}
        button={() => <AddButton addTask={addTask} />}
      />
      <FlatList 
        data={taskList}
        renderItem={({item}) => {
          return(
            <MainItems 
              deleteTask={deleteTask}
              completeTask={completeTask}
              data={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AllView;