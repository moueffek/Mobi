import React,{useState} from 'react';
import {StyleSheet,View,Image,Text,ScrollView,useWindowDimensions} from 'react-native';
import CustomInput from '../screens/CustomInput';
import logo from '../assets/logo.png';
import CustomButton from '../screens/CustomButton';
import SocialButton from '../screens/SocialButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm } from 'react-hook-form';
const EMAIL_REGEX=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Loading() {
    return (
    <View style={styles.root}>
        <Image source={logo} 
        style={StyleSheet.logo } 
        resizeMode="contain"/>
        <Text style={styles.text}>Loading..</Text>
    </View>
  
    );
}
const styles = StyleSheet.create({
    root:{
        justifyContent:"center",
        alignItems:'center',
        padding:20, 
        flex: 1,
        backgroundColor:"black",      
    },
    logo:{
        width:"70%",
        flex :1,
        maxWidth:300,
        maxHeight:100,
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        color:"#fff",
        marginBottom:10,
    },
    text:{
        color:"grey",
        marginVertical:10,
        position:'absolute',
        bottom:1

    },
    link:{
        color:"#FDB075",
    }
})

export default Loading;