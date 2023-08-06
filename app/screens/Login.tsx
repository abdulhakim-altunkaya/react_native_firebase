import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = () => {
    }

    const signin = () => {
      
    }
  return (
    <View>
        <View style={styles.todoContainer}>
          <TextInput 
            placeholder='Enter Email'
            placeholderTextColor='#999'
            style={styles.inputArea}
            onChangeText={(text:string) => setEmail(text)}
            value={email} />
          <Button onPress={signup} title="Sign Up"
          disabled={ todo === ""}/>
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
})
export default Login