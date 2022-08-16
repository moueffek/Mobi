import { ScrollView ,Flex,Text,Image, Box, Heading,Pressable} from 'native-base';
import React from 'react';
import products from "../data/Products";
import Rating from './Rating';
import {useNavigation}from '@react-navigation/native';
import { ImageBackground,StyleSheet } from 'react-native';

function HomeProducts() {
    const navigation = useNavigation();

    const hey = () =>{
        console.warn("single product")
        navigation.navigate("singleProduct");
    }
    return (
        <ImageBackground 
    style={styles.Background}
    source ={require("../assets/Cubic.jpg")}>
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
         <Flex flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between"
            px={2}
         >
            {
                products.map((product)=>(
                <Pressable 
                    onPress={hey}
                    key={product._id}
                    w="50%"
                    bg="white"
                    rounded='md'
                    shadow='2'
                    pt={0.3}
                    my={3}
                    pb={2}
                    overflow="hidden"
                >
                <Image
                    source={{uri:product.image}}
                    alt={product.name}
                    w='full'
                    h={24}
                    resizeMode="contain"
                />
                <Box px={5} pt={3}>
                    <Heading size="sm" bold>
                        ${product.price}
                    </Heading>
                    <Text fontSize={10} mt={1} isTruncated w='full'>
                        {product.name}
                    </Text>  
                    <Rating value={product.rating}/>
                    <Text></Text>          
                </Box>    
                </Pressable>
            ))}

         </Flex>
        </ScrollView>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    Background:{
    flex:1,
    justifyContent:"flex-end",
    alignItems:"center",    
    }
})

export default HomeProducts;