import React from 'react';
import { Box, Button, HStack, ScrollView,Text,Spacer ,Pressable} from 'native-base';

function Orders(props) {
    return (
        <Box h='full' bg="white" pt={5}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* PAID ORDER */}
                <Pressable>
                    <HStack space={4} 
                    justifyContent="space-between" 
                    alignItems='center' 
                    bg="black"
                    py={5}
                    px={2}
                    >
                        <Text fontSize={9} color="#4ECDC4" isTruncated>
                        69987212555112
                        </Text>
                        <Text fontSize={12} bold color="#4ECDC4" isTruncated>
                        PAID
                        </Text>
                        <Text fontSize={11} italic color="white" isTruncated>
                        Aug 08 2022
                        </Text>
                        <Button 
                        px={7} 
                        py={1.5} 
                        rounded={50} 
                        bg="black"
                        _text={{
                            color:"#4ECDC4"
                        }}
                        _pressed={{
                            bg:'black',
                        }}
                        >
                        $1480
                        </Button>    
                    </HStack>
                </Pressable>
                        
                <Pressable>
                <Spacer/>
                </Pressable>
                
                {/* ORDER NOT PAID */}
                <Pressable>
                    <HStack space={4} 
                    justifyContent="space-between" 
                    alignItems='center' 
                    bg="black"
                    py={5}
                    px={2}
                    >
                        <Text fontSize={9} color="#DC3885" isTruncated>
                        69987212555112
                        </Text>
                        <Text fontSize={12} bold color="#DC3885" isTruncated>
                        Not PAID
                        </Text>
                        <Text fontSize={11} italic color="white" isTruncated>
                        jan 06 2022
                        </Text>
                        <Button 
                        px={7} 
                        py={1.5} 
                        rounded={50} 
                        bg="black"
                        _text={{
                            color:"#DC3885"
                        }}
                        _pressed={{
                            bg:'#DC3885',
                        }}
                        >
                        $100
                        </Button>    
                    </HStack>
                </Pressable>
            </ScrollView>
        </Box>
    );
}

export default Orders;