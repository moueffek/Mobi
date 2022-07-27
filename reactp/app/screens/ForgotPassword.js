import React from 'react';
import {StyleSheet,View,Image,Text,useWindowDimensions,ScrollView} from 'react-native';
import logo from '../assets/logo.png';
import CustomInput from '../screens/CustomInput';
import CustomButton from '../screens/CustomButton';
import {useNavigation}from '@react-navigation/native';
import{useForm} from 'react-hook-form';

function ForgotPassword() {
    const {height} =useWindowDimensions();
    const navigation = useNavigation();
    const  {control ,handleSubmit, formState:{errors}} = useForm();
    console.log(errors);    

    const onSendPressed = data =>{
        console.log(data);
        console.warn("Confirmed");
        navigation.navigate('newpassword');
    } 
    const onBacktoSignInPress = ()=>{
        console.warn("back to sign in i guess");
        navigation.navigate('signin')

    }

    return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

        <View style={styles.root}>
        <Text style={styles.title}></Text>
        <Text style={styles.title}></Text>
        <Image source={logo} 
        style={[StyleSheet.logo , {height : height * 0.3}]} 
        resizeMode="contain"/>


        <CustomInput 
        rules={{required:'username is required'}}
        placeholder="Enter your username" 
        control={control}
        name="username"
        />

        <CustomButton 
        text="Send" 
        onPress={handleSubmit(onSendPressed)} 
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
export default ForgotPassword;