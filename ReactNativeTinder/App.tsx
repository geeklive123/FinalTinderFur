import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity, ToastAndroid} from 'react-native';
import { RoundedButton } from './src/Presentation/components/RoundedButton';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from './src/Presentation/views/Home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';

export type RootStackParamList={
  HomeScreen:undefined,
  RegisterScreen:undefined,
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
  <Stack.Navigator screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
    />

<Stack.Screen 
        name="RegisterScreen" 
        component={RegisterScreen} 
        options={{headerShown:true,title:'Nuevo Usuario'}}/>

</Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;