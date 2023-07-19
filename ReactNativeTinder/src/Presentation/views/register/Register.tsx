import React,{useEffect,useState} from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  ToastAndroid,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
  
} from "react-native";
import { RoundedButton } from "../../components/RoundedButton";
import { CustomTextInput } from "../../components/CustomTextInput";
import styles from "./Styles";
import { StackScreenProps } from "@react-navigation/stack";
import { MyColors } from "../../theme/AppTheme";


export const RegisterScreen = () => {
 

  const[modalVisible,setModalVisible]=useState(false);


  return (
    <View style={styles.container}>



      <Image
        source={require("../../../../assets/register.png")}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          
       

        </TouchableOpacity>
        
        <Text style={styles.logoText}>Seleccione Una Imagen</Text>
      </View>

     
        
      </View>
  );
};
