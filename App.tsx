import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import Login from "./app/screens/Login";
const Stack = createNativeStackNavigator();


export default function App() {
  {/*
    import {useState, useEffect} from "react";
    import { onAuthStateChanged } from 'firebase/auth';
    const [authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
      onAuthStateChanged
    }, [])
  */}

  
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="My Todos" component={List} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}