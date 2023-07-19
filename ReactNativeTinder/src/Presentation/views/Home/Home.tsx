import React, { useState,useEffect } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'
import { RootStackParamList } from "../../../../App";
export const HomeScreen =()=>{
    const navigation =useNavigation<StackNavigationProp<RootStackParamList>>();
    return(
        <View style={styles.container}>
    
        <Image 
        source={require('../../../../assets/Fondodepantallademóvil.png')}    
        style={styles.imageBackground}
        />
        <View style={styles.form}>
          <Text style={styles.formText}>Ingresar</Text>
          <View style={styles.formInput}>
          <Image 
          style={styles.formIcon}
            source={require('../../../../assets/user2.png')}/>
            <TextInput 
            style={styles.formTextInput}
            placeholder='Correo Electronico'
            keyboardType='email-address'
            />
          </View>
          <View style={styles.formInput}>
          <Image 
          style={styles.formIcon}
            source={require('../../../../assets/password.png')}/>
            <TextInput 
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            />
          </View>
    
          <View style={{ marginTop: 30 }}>
              <RoundedButton
                text="LOGIN"
                onPress={() => ToastAndroid.show('Click',ToastAndroid.LONG)}/>
            </View>
            <View style={styles.formRegister}>
              <Text>No Tienes Cuenta</Text>
             
              <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.formRegisterText}>Registrate</Text>
          </TouchableOpacity>
          
            </View>
    
        </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "white",
      },
      imageBackground: {
        width: "100%",
        height: "100%",
        opacity: 0.9,
        bottom: "0%",
      },
      form: {
        width: "100%",
        height: "40%",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
      },
      logoContainer: {
        position: "absolute",
        alignSelf: "center",
        top: "15%",
      },
      logoImage: {
        width: 100,
        height: 100,
      },
      logoText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        marginTop: 10,
        fontWeight: "bold",
      },
      formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
      },
      formInput: {
        flexDirection: "row",
        marginTop: 30,
      },
      formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#AAAAAA",
        marginLeft: 15,
      },
      formText: {
        fontWeight: "bold",
        fontSize: 16,
      },
      formRegister: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
      },
      formRegisterText: {
        fontStyle: "italic",
        color: "#4FA853",
        borderBottomWidth: 1,
        borderBottomColor: "#4FA853",
        fontWeight: "bold",
        marginLeft: 10,
      },
    });
     
    

