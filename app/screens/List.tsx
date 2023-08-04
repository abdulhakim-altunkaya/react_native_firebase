import { View, Text, Button, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react';
import {FIREBASE_DB} from "../../firebaseConfig";
import { addDoc, collection } from 'firebase/firestore';

const List = ({navigation}: any) => {

  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {  
    addDoc(collection(FIREBASE_DB, "todos"), {
      title: "I have a test",
      done: false
    })
  }, [])
  
  return (
    <View>
      <Text>List</Text>
      <Button onPress={() => navigation.navigate("Details")} title='GO TO DETAILS PAGE' />
      <View style={styles.mainContainer}>
        <View>
          <TextInput placeholder='add todo'
            onChangeText={(text:string) => setTodo(text)}/>
            value={todo}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {

  },
})

export default List;
