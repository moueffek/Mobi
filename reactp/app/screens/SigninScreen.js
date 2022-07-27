import React,{useState} from 'react';
import {StyleSheet,View,Image,Text,TextInput,useWindowDimensions,ScrollView} from 'react-native';
import logo from '../assets/logo.png';
import CustomInput from '../screens/CustomInput';
import CustomButton from '../screens/CustomButton';
import SocialButton from '../screens/SocialButtons';
import {useNavigation}from '@react-navigation/native';
import{useForm,Controller} from 'react-hook-form';



function SigninScreen() {
    const {height} =useWindowDimensions();
    const navigation = useNavigation();
    const  {control ,handleSubmit, formState:{errors}} = useForm();
    console.log(errors);    

    const onSignInPressed = data =>{
        console.log(data);
        console.warn("Sign in");
        navigation.navigate('Welcome');
    }

    const onForgotPasswordPressed = ()=>{
        console.warn("forgot password")
        navigation.navigate('forgotpassword');
    }

    const onnewaccount = ()=>{
        console.warn("new account")
        navigation.navigate('signup')
    }

    return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        <Text style={styles.title}>Login</Text>
        <Image source={logo} 
        style={[StyleSheet.logo , {height : height * 0.3}]} 
        resizeMode="contain"/>


        <CustomInput 
        rules={{required:'username is required'}}
        placeholder="Username" 
        control={control}
        name="username"
        secureTextEntry={false}
        />
        
        <CustomInput
        rules={{required:'password is required', 
        minLength:{value:5 , 
        message:"password should be minimum 5 caracters long"}
        }}
        placeholder="Password" 
        control={control}
        name="password"
        secureTextEntry
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomButton text="Forgot Password ?" onPress={onForgotPasswordPressed} type="TERTIARY" />

        <SocialButton/>   

     <CustomButton 
     text="don't have an account ? Create one" 
     onPress={onnewaccount} 
     type="TERTIARY" 
     />
    
    </View>
    </ScrollView>   
    );
}
const styles = StyleSheet.create({
    logo:{
        width:"70%",
        maxWidth:300,
        maxHeight:100,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"#fff",
        margin:10,
    },
    root:{
        alignItems:'center',
        padding:20,
        flex: 1,
        backgroundColor:"black",       
    }
})

export default SigninScreen;