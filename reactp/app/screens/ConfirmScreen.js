import React from 'react';
import {StyleSheet,View,Image,Text,useWindowDimensions,ScrollView} from 'react-native';
import logo from '../assets/logo.png';
import CustomInput from '../screens/CustomInput';
import CustomButton from '../screens/CustomButton';
import {useNavigation}from '@react-navigation/native';
import{useForm} from 'react-hook-form';

function ConfirmScreen() {
    const {height} =useWindowDimensions();
    const navigation = useNavigation();
    const  {control ,handleSubmit, formState:{errors}} = useForm();
    console.log(errors);    

    const onConfirmPressed = data =>{
        console.log(data);
        console.warn("Confirmed");
        navigation.navigate('signin');
    } 
    const onBacktoSignInPress = ()=>{
        console.warn("back to sign in i guess");
        navigation.navigate('Welcome');

    }
    const onResendcodePress = ()=>{
        console.warn("resend code");
        navigation.navigate('singin');
    }

    return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

        <View style={styles.root}>
        <Text style={styles.title}>Confirm Email</Text>
        <Image source={logo} 
        style={[StyleSheet.logo , {height : height * 0.3}]} 
        resizeMode="contain"/>


        <CustomInput 
        rules={{required:'code is required'}}
        placeholder="Code" 
        control={control}
        name="code"
        />

        <CustomButton 
        text="Confirm" 
        onPress={handleSubmit(onConfirmPressed)} 
        />

        <CustomButton 
        text="resend Codes" 
        onPress={onResendcodePress} 
        type="SECONDARY" 
        />

     <CustomButton 
     text="Back to Sign In" 
     onPress={onBacktoSignInPress} 
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
    },
    scroll:{
        padding:20,
        flex: 1,
        backgroundColor:"black",
    }
})


export default ConfirmScreen;