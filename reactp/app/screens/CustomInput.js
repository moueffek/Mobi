import React, { Fragment } from 'react';

import {Text,StyleSheet,View,TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
function customInput({control,name,rules={},placeholder,secureTextEntry}) {
    return (
        <Controller
        rules={rules}
        control={control}
        name={name}
        render={({field:{value,onChange,onBlur}, fieldState:{error}})=>(
            <Fragment>
        <View style={[styles.container, {borderColor: error ? "orange" : '#e8e8e8'}]}>
        <TextInput
        style={styles.input} 
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChange}
        onBlur={onBlur} 
        placeholder={placeholder}/>
        </View>
        {error &&(     
        <Text style={{color:'orange' , alignSelf:'stretch'}}>
            {error.message || 'Error'}
        </Text>
        )}
        </Fragment>
        )}
        />
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        width:"100%",
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        paddingHorizontal:10,
        marginVertical:5,
    },
    input:{

    }
})

export default customInput;