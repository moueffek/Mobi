import {Text, Box, Center, ScrollView, HStack, Button} from 'native-base';
import React from 'react';
import CartEmpty from './CartEmpty';
import CartItems from './CartItems';
import products from '../data/Products';
import Buttone from './Buttone';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation}from '@react-navigation/native';

function CartScreen() {
const navigation = useNavigation();
const backTopHomeScreen = () => {
    console.warn("back");
    navigation.navigate("home")

}

    const data = products.slice(0,2);
    return (
         <Box flex={1} safeAreaTop bg='black'>
            <Center w='full' py={5}>
                <Text color='white' bold fontSize={20}> 
                    Cart
                </Text>
                <FontAwesome
                style={{position:"absolute", left:1, top:1 , paddingLeft:"5%"}}
                name='arrow-left'
                size={24}
                color="grey"
                onPress={backTopHomeScreen}
            />
            </Center>
            {/* if cart is empty 
            <CartEmpty/>*/}
            {/* cartItems */}
            <ScrollView showsVerticalScrollIndicator={false}>
            <CartItems/>
            {/* Total */}
                <Center mt={5}>
                    <HStack 
                    rounded={50} 
                    justifyContent="space-between" 
                    bg='black' 
                    shadow={2}
                    w='90%'
                    pl={5}
                    h={45}
                    alignItems="center"
                    >
                        <Text color="white">Total</Text>
                        <Button 
                        rounded={50} px={10} h={45}
                        bg="#4ECDC4"
                        _text={{
                            color:'white',
                            fontWeight:"semibold"
                        }}
                        _pressed={{
                            bg:"#DC3885",
                            _text:{color:"black",
                            fontWeight:"semibold"
                            }
                        }}
                        >
                            $3480
                        </Button>
                    </HStack>
                </Center>
                <Center px={5}>
                    <Buttone bg="#4ECDC4" color='white' mt={10}                    >
                    CHECKOUT
                    </Buttone>
                </Center>
            </ScrollView>
         </Box>
    );
}

export default CartScreen;