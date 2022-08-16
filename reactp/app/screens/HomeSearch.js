import { Box, HStack,Input,Pressable,Avatar, Text } from 'native-base';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {useNavigation}from '@react-navigation/native';


function HomeSearch() {
    const navigation = useNavigation();
    const ToCart = () => {
        console.warn("To cart");
        navigation.navigate("cart");
    }
    const ToProfile = () => {
        console.warn("To profile");
        navigation.navigate("profile");
    }

    return (
        <HStack
        space={10}
        w='full'
        px={10}
        bg="black"
        py={4}
        alignItems='center'
        SafeAreaTop>

        <Pressable ml={-5} onPress={ToProfile} paddingLeft={1} >
        <FontAwesome name='user'size={30} color='grey'/>
        </Pressable>
            
        <Input placeholder="phones , laptops , accessories ..." 
        w="70%" 
        bg="white"
        top="1"
        variant="filled"
        h={10} 
        margin='1'
        type="search"
        borderWidth={0}
        _focus={{
            bg:"white"
        }}
        />
        <Pressable ml={-3} onPress={ToCart}>
        <FontAwesome name='shopping-basket' size={24} color='grey'/>
        <Box px={1} rounded="full" position="absolute" top={-13} left={2} bg="#ff0000"
        _text={{
            color:'white',
            fontSize:'11px', 
        }}>5</Box>
        </Pressable>
        </HStack>
    );
}

export default HomeSearch;