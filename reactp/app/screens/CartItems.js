import { Box, Center, HStack, Text,Pressable,Image, VStack, Button } from 'native-base';
import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import products from '../data/Products';
import {FontAwesome} from '@expo/vector-icons';


const Swiper = () =>(
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0,5)}
    renderItem={renderIterms}
    renderHiddenItem={renderhiddenIterms}  
    showsVerticalScrollIndicator={false}/>  
)

const renderIterms=(data)=>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
            alignItems="center"
            bg="white" 
            shadow={1} 
            rounded={10}
            overflow="hidden"
            >
                <Center w="25%" bg="#D3D3D3">
                <Image 
                source={{ uri:data.item.image}} 
                alt={data.item.name} 
                w='full' 
                h={24}
                resizeMode="stretch" 
                />
                </Center>
                <VStack w='60%' px={2} space={2}>
                    <Text isTruncated color="black" bold fontSize={10}>
                        {data.item.name}
                    </Text>
                    <Text color="grey" bold>
                        ${data.item.price}
                    </Text>
                </VStack>
                    <Center>
                        <Button 
                        bg='#4ECDC4' 
                        _pressed={{color:'#DC3885'}}
                        _text={{
                            color:"white",
                        }}
                        >
                        $
                        </Button>
                    </Center>
            </HStack>
        </Box>
    </Pressable>
)

//hidden

const renderhiddenIterms=()=>(
    <Pressable w={50} 
    roundedTopRight={10} 
    roundedBottomRight={10} h='90%' ml='auto'
    justifyContent='center'
    bg="#DC3885"
    >
        <Center alignItems="center" space={2}> 
            <FontAwesome
            name='trash'
            size={24}
            color="white"
            />
        </Center>
    </Pressable>
)

 
function CartItems() {
    return (
        <Box mr={6}>
        <Swiper/>
        </Box>
    );
}

export default CartItems;