import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    const signup = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("check your email")
    }

    const signin = async () => {
        const user = await signInWithEmailAndPassword(auth, email, password);
        console.log(`user: ${user}`);
    }
  return (
    <View>
        <View style={styles.todoContainer}>
            <View>
                <TextInput 
                    placeholder='Enter Email'
                    placeholderTextColor='#999'
                    style={styles.inputArea}
                    onChangeText={(text:string) => setEmail(text)}
                    value={email} />
                <TextInput 
                    placeholder='Enter Password'
                    placeholderTextColor='#999'
                    textContentType='password'
                    style={styles.inputArea}
                    onChangeText={(text:string) => setPassword(text)}
                    value={password} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={signup} style={styles.buttonStyle} disabled={email === "" && password === ""}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={signin} style={styles.buttonStyle} disabled={email === "" && password === ""}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
      todoContainer: {
        marginVertical: 20,
        flexDirection: "column",
        alignItems: "center",
        
      },
      inputArea: {
        minWidth: 250,
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        padding: 20,
        marginTop: 10,
        backgroundColor: "#fff",
      },
      buttonContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-around",
      },
    
      // Custom button styles
      buttonStyle: {
        minWidth: 100,
        backgroundColor: "#007bff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        flex: 1, // Add flex property to make the buttons share the available space
        marginHorizontal: 5, // Add horizontal space between the buttons
      },
      buttonText: {
        color: "#fff",
        textAlign: "center",
      },
})
export default Login