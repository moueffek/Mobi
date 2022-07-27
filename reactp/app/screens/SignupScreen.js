import React,{useState} from 'react';
import {StyleSheet,View,Image,Text,ScrollView,useWindowDimensions} from 'react-native';
import CustomInput from '../screens/CustomInput';
import logo from '../assets/logo.png';
import CustomButton from '../screens/CustomButton';
import SocialButton from '../screens/SocialButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm } from 'react-hook-form';
const EMAIL_REGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function SignupScreen() { 
    const{control ,handleSubmit, watch} = useForm();
    const pwd = watch('password');
    const navigation = useNavigation();

    const onregisterPressed =()=>{
        console.warn("registration ...");
        navigation.navigate('confirmscreen');
    }

    const OnTermOfUse =()=>{
        console.warn("registration ...");
    }

    const OnPrivacyPolicy =()=>{
        console.warn("check terms");
    }
    const onSignInPressed = ()=>{
        console.warn("Sign In ...");
        navigation.navigate("signin")
    }
    const {height} =useWindowDimensions();
    return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>

        <Text style={styles.title}>Create an account</Text>

        <Image source={logo} 
        style={[StyleSheet.logo , {height : height * 0.3}]} 
        resizeMode="contain"/>

        <CustomInput 
        control={control}
        rules={{required:'username is required', 
        minLength :{value:4,message:'username should be 4 caracter long'}}}
        placeholder="Username" 
        name='username'
        />

        <CustomInput 
        control={control}
        rules={{required:'email is required ', pattern:{value:EMAIL_REGEX , message:'invalide email'}}}
        placeholder="Email" 
        name='email'
        />

        <CustomInput 
        control={control}
        rules={{required:'password is required',
        minLength:{value:5,message:'password should be 5 caracter long'}
        }}
        placeholder="Password" 
        name='password'
        secureTextEntry={true}
        />

        <CustomInput 
        control={control}
        rules={{
            validate:value=>
            value === pwd || 'password does not match'
        }}
        placeholder="repeat the Password" 
        name='repeat password please' 
        secureTextEntry={true}
        />

        <CustomButton 
        text="Register" 
        onPress={handleSubmit(onregisterPressed)} 
        />

        <Text style={styles.text}>
            By registering, you confirm that you accept our{' '} 
            <Text style={styles.link} onPress={OnTermOfUse}>terms of use</Text>{' '} 
            and <Text style={styles.link} onPress={OnPrivacyPolicy}>Privacy Policy</Text>
        </Text>

        <SocialButton/>

        <CustomButton 
        text="You have an account ? Sign In" 
        onPress={onSignInPressed} 
        type="TERTIARY" 
        />
    </View>
    </ScrollView>   
    );
}
const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20, 
        flex: 1,
        backgroundColor:"black",      
    },
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
    text:{
        color:"grey",
        marginVertical:10,  

    },
    link:{
        color:"#FDB075",
    }
})

export default SignupScreen;