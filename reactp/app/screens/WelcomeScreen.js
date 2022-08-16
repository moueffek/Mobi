import React from 'react';

import { ImageBackground,StyleSheet,View,Image,Text} from 'react-native';

import {useNavigation}from '@react-navigation/native';



function WelcomeScreen() {
    
    const account=()=>{
        console.warn("create an account");
        navigation.navigate('signup')

    }
    const navigation = useNavigation();
    const onloginin =()=>{
        console.warn("login ...");
        navigation.navigate('signin')
    }

    return (
    <ImageBackground 
    style={styles.Background}
    source ={require("../assets/Cubic.jpg")}>
    <Image style = {styles.logo} source={require("../assets/test.png")}/>
    <Text style={{color:'white' , fontWeight:'bold'}}>Join us now </Text>
    <View style ={styles.login}>
        <Text style ={styles.txt} onPress={onloginin}>Login</Text>
    </View>
    <View style ={styles.register}>
        <Text style ={styles.acountcreation} onPress={account}>Create an account?</Text>
    </View>
    </ImageBackground>
    );
}
const styles = StyleSheet.create({
    Background:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",    
    },
   login:{
     backgroundColor:"#DC3885",
     width:"100%",
     height:50,
     alignItems:"center",
     justifyContent:"center",
    },
    register:{
     backgroundColor:"#4ECDC4",
     width:"100%",
     height:30,
     alignItems:"center",
     justifyContent:"center",
    },
    logo:{ 
     width:200,
     height:200,
     position:"absolute",
     top:1 ,
    }, 
    txt:{
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize :20,
        textAlign:"center",
    },
    acountcreation:{
        fontSize:14,
        textAlign:'center',

    }
})
export default WelcomeScreen;