import { View,Text, Box, Center } from 'native-base';
import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import Buttone from './Buttone';
import {useNavigation}from '@react-navigation/native';

function CartEmpty() {
    const navigation = useNavigation();
    const letsgo=()=>{
        console.warn("start shopping")
        navigation.navigate('home');
    }

    return (
        <Box flex={1} px={4} bg="black">
            <Center h='90%'>
                <Center w={200} h={200} bg='white' rounded="full">
                    <FontAwesome 
                    name="shopping-basket" 
                    size={64} 
                    color="#DC3885"
                    />
                </Center>
                <Text color='#DC3885' mt={5} bold>
                    Cart is empty
                </Text>   
            </Center>
                <Buttone bg='#DC3885' color="white" onPress={letsgo}>
                    Start Shopping
                </Buttone>
        </Box>
    );
}

export default CartEmpty;