import React from 'react';
import {StyleSheet,View,Image,Text,useWindowDimensions,ScrollView} from 'react-native';
import logo from '../assets/logo.png';
import CustomInput from '../screens/CustomInput';
import CustomButton from '../screens/CustomButton';
import {useNavigation}from '@react-navigation/native';
import{useForm} from 'react-hook-form';

function NewPasswordScreen() {
    const {height} =useWindowDimensions();
    const navigation = useNavigation();
    const  {control ,handleSubmit, formState:{errors}} = useForm();
    console.log(errors);    

    const onresetPressed= data =>{
        console.log(data);
        console.warn("Confirmed");
        navigation.navigate('signin');
    } 
    const onBacktoSignInPress = ()=>{
        console.warn("back to sign in i guess");
        navigation.navigate('signin')

    }


    return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>

        <View style={styles.root}>
        <Text style={styles.title}>Reset password</Text>

        <Image source={logo} 
        style={[StyleSheet.logo , {height : height * 0.3}]} 
        resizeMode="contain"/>

        <Text style={{
            color:"#fff",
            left:1,
            paddingRight:190
            }}>
            confirmation code
        </Text>

        <CustomInput 
        rules={{required:'code is required'}}
        placeholder="Enter your confirmation code" 
        control={control}
        name="code"
        />
        <Text style={{
            color:"#fff",
            left:1,
            marginTop:3,
            paddingRight:250
            }}>
            password
        </Text>

        <CustomInput 
        rules={{required:'new password is required', minLength:{value:5,
        message:'New password need to be 5 caracter longer'}}}
        placeholder="Enter your new password" 
        control={control}
        secureTextEntry
        name="newpassword"
        />

        <CustomButton 
        text="Submit" 
        onPress={handleSubmit(onresetPressed)} 
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

export default NewPasswordScreen;