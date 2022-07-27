import React from 'react';
import {Text,StyleSheet,View,Image,TextInput} from 'react-native';

function SecondSceen(props) {
    return (
  <View style ={styles.container}>
    <Text style ={styles.Txt}>Registration </Text>
    <TextInput 
    style={{color:"#fff"}} 
    placeholder='Your Name'
    underlineColorAndroid ={'transpatent'}/>  
    <Image style = {styles.logo} source={require("../assets/test.png")}/>          
    </View>
    );
}
const styles = StyleSheet.create({
  container:{
   alignSelf:"stretch",
  },
  logo:{ 
    width:200,
    height:200,
    position:"absolute",
    top:1 ,
  },
  Txt:{
    fontSize:24,
    color:"#fff",
    paddingbottom:10,
    marginBottom:40,
    borderBottomColor:"#4ECDC4",
    borderBottomWidth:1,
    position:'absolute',
  }


})

export default SecondSceen;