import { View, Text, Button, TextInput, FlatList, 
  TouchableOpacity, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react';
import {FIREBASE_DB} from "../../firebaseConfig";
import { addDoc, collection, deleteDoc, updateDoc, onSnapshot, doc  } from 'firebase/firestore';
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

export interface Todo {
  title: string;
  done: boolean;
  id: string;
}

const List = ({navigation}: any) => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  //GET TODOS
  useEffect(() => {
    const todoRef = collection(FIREBASE_DB, "todos");
    const subscriber = onSnapshot(todoRef, {
      next: (snapshot) => {
        const todos: Todo[] = [];
        snapshot.docs.forEach( doc => {
          todos.push({
            id: doc.id,
            ...doc.data()
          } as Todo)
        })
        setTodos(todos)
      }
    });
    return () => subscriber();
  }, [])
  

  //Saving todos by using useeffect
  {/*
  useEffect(() => {  
    addDoc(collection(FIREBASE_DB, "todos"), {
      title: "I have a test",
      done: false
    })
  }, [])
  */}

  //SAVING TODOS
  const addTodo = async () => {
    const doc = await addDoc(collection(FIREBASE_DB, "todos"), {
      title: todo,
      done: false
    });
    setTodo("");
  }
  const renderTodos = ({item}: any) => {
    const ref = doc(FIREBASE_DB, `todos/${item.id}`)
    const toggleDone = () => {
      updateDoc(ref, { done: !item.done });
    }
    const deleteItem = () => {
      deleteDoc(ref);
    }
    return(
      <View style={styles.todoContainer2}>
        <TouchableOpacity onPress={toggleDone} style={styles.taskStyle} >
          {item.done && <Ionicons name="md-checkmark-circle" size={24} color="green" />}
          {!item.done && <Entypo name="circle" size={24} color="black" />}
          <Text style={styles.todoText}>{item.id}</Text>
        </TouchableOpacity>
        <Ionicons name="trash-outline" size={24} color="black" onPress={deleteItem} />
      </View>
      
    )
  }
  return (
    <View>
      <Text>List</Text>
      <Button onPress={() => navigation.navigate("Details")} title='GO TO DETAILS PAGE' />
      <View style={styles.mainContainer}>
        <View style={styles.todoContainer}>
          <TextInput 
            placeholder='add todo'
            placeholderTextColor='#999'
            style={styles.inputArea}
            onChangeText={(text:string) => setTodo(text)}
            value={todo} />
          <Button onPress={addTodo} title="add todo"
          disabled={ todo === ""}/>
        </View>
        <View>
          {todos.length > 0 ? 

            todos.map(todo => (
              <Text key={todo.id}>{todo.title}</Text>
            ))
          :
              <Text>Todo list is empty</Text>
          }

        </View>
        <View>
        <FlatList 
          data={todos} 
          keyExtractor={(element: Todo) => element.id} 
          renderItem = {renderTodos}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  todoContainer: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputArea: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    backgroundColor: "#fff",
  },
  todoContainer2: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dbceeb",
    padding: 10,
    marginVertical: 4,
  },
  taskStyle: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  todoText: {
    flex: 1,
    marginLeft: 10,
  },
})

export default List;
