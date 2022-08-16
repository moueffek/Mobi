import { Text, HStack, Box, ScrollView,Image, Heading, Spacer } from 'native-base';
import React, { useState } from 'react';
import NumericInput from 'react-native-numeric-input';
import Buttone from './Buttone';
import {useNavigation}from '@react-navigation/native';
import Rating from './Rating';
import Review from './Review';

function SingleProductScreen() {
    const navigation = useNavigation();
    const [value,setvalue]=useState(0);
    const shopcart=()=>{
        console.warn("shopping cart");
        navigation.navigate('cart')
    }
    return (
        <Box safeArea flex={1} bg="white">
            <ScrollView px={5} showsVerticalScrollIndicator={false}>
                <Image
                source={require("../assets/pc.jpg")}
                alt="image"
                w="full"
                h={300}
                resizeMode="contain"
                />
                <Heading bold fontSize={15} mb={2} lineHeight={22}> 
                MSI GE66 Raider 10 SF
                </Heading>
                <Rating value={4}/>
                <HStack space={2} my={5} alignItems="center">
                <NumericInput 
                    value={value} totalWidth={140}
                    totalHeight={30}
                    iconSize={25}
                    step={1}
                    maxValue={10}
                    minValue={0}
                    borderColor="#D3D3D3"
                    rounded
                    textColor="black"
                    iconStyle="black"
                    rightButtonBackgroundColor="#DC3885"
                    leftButtonBackgroundColor="#4ECDC4"
                    />
                    <Spacer/>
                    <Heading bold color="black" fontSize={19}>$400</Heading>
                </HStack>
                <Text lineHeight={24} fontSize={12}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </Text>
                <Buttone bg="#4ECDC4" color='black' mt={10} onPress={shopcart}>ADD TO CART</Buttone>
                <Review/>
            </ScrollView>
        </Box>
    );
}

export default SingleProductScreen;