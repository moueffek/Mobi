import React from 'react';
import {Text,StyleSheet,View,Pres, Pressable} from 'react-native';
function CustomButton({onPress,text,type="primary",bgcolor,fgcolor}) {
    return (
        <Pressable 
        onPress={onPress} 
        style={[
            styles.container, 
            styles[`container_${type}`],
            bgcolor ? {backgroundColor: bgcolor} : {}
            ]}>
            <Text style={[
                styles.Text , 
                styles[`text_${type}`],
                fgcolor ? {color: fgcolor} : {}
                ]}>{text}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container:{
        
        width:'100%',
        padding:15,
        marginVertical:5,
        alignItems:'center',
        borderRadius:5,
    },
    
    container_primary:{
        backgroundColor:"#4ECDC4", 
    },

    container_SECONDARY:{
        borderColor:'#4ECDC4',
        borderWidth:2,
    },

    container_tertiary:{

    },
    Text:{
        color:'#fff',
        fontWeight:'bold',
        color:"#fff",
        fontSize:16,

    },
    text_TERTIARY:{
       color:'grey', 
    }
})

export default CustomButton;