/*import React, { useState } from "react";
import { AppDelivery } from "../../../Data/sources/remote/api/apiDelivery";
import { RegisterAuthUseCase } from "../../../Domain/useCases/auth/RegisterAuth";
import * as ImagePicker from 'expo-image-picker';
import { RegisterAuthWithImageAuth } from '../../../Domain/useCases/auth/RegisterAuthWithImageAuth';
import { SaveUserLocalUseCase } from "../../../Domain/useCases/userLocal/SaveUserLocal";
import { useUserLocal } from "../../hooks/useUserLocal";
const RegisterViewModel = () => {

    const [errorMessage,setErrorMessage ] = useState('');
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
    image:"",
    password: "",
    confirmPassword: "",
  });
  
  const[loading,setLoading]=useState(false);

  const[file,setFile]=useState<ImagePicker.ImagePickerAsset>()
  const { user,getUserSession}=useUserLocal();
  const pickImage=async ()=>{
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      quality:1
    });
    if(!result.canceled){
      onChange('image',result.assets[0].uri);
      setFile(result.assets[0]);
    }
  }

  const takePhoto=async ()=>{
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      quality:1
    });
    if(!result.canceled){
      onChange('image',result.assets[0].uri);
      setFile(result.assets[0]);
    }
  }


  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };
  const register = async () => {
    if(isValidForm()){
      setLoading(true);
      //  const response = await RegisterAuthUseCase(values);
      const response= await RegisterAuthWithImageAuth(values,file!);
      setLoading(false);
      console.log("RESULT" + JSON.stringify(response));
      if(response.success){
        await SaveUserLocalUseCase(response.data);
        getUserSession();
      }
      else{
        setErrorMessage(response.message);
      }
    }
   
  };
   const isValidForm=():boolean=>{ 
    if(values.name===''){
        setErrorMessage('Ingresa tu nombre');
        return false;
    }
    if(values.lastname===''){
        setErrorMessage('Ingresa tu Apellido');
        return false;
    }
    if(values.email===''){
        setErrorMessage('Ingresa tu Correo Electronico');
        return false;
    }
    if(values.phone===''){
        setErrorMessage('Ingresa tu Telefono');
        return false;
    }
    if(values.password===''){
        setErrorMessage('Ingresa tu Contraseña');
        return false;
    }
    if(values.confirmPassword===''){
        setErrorMessage('Ingresa la confirmacion de la contraseña');
        return false;
    }
    if(values.password!==values.confirmPassword){
        setErrorMessage('Las contraseñas no coinciden');
        return false;
    }
    if(values.image===''){
      setErrorMessage('Ingrese Imagen');
      return false;
  }
    return true;
   }
  return {
    ...values,
    onChange,
    register,
    pickImage,
    takePhoto,
    user,
    loading,
    errorMessage
  };
};
export default RegisterViewModel; */
