import { Box,CheckIcon,FormControl,Heading,Text, VStack,Select, TextArea, Button } from 'native-base';
import React, { useState } from 'react';
import Message from './Message';
import Rating from './Rating';
import Buttone from './Buttone';

function Review() {
    const[ratings,setRatings]=useState('');
    return (
        <Box my={9}>
            <Heading bold fontSize={15} mb={2} >
                Review : 
            </Heading>
            <Box p={3} bg="black" mt={5} rounded={5}>
                <Heading fontSize={15} lineHeight={25} color="white">
                User 1
                </Heading>
                <Rating value={4}/>
                <Text my={2} color="white" fontSize={11}>jan 12 2022</Text>
                <Message/>
            </Box>
                {/*write a review*/}
                <Box mt={6}>
                     <Heading fontSize={15} bold mb={4}>
                    REVIEW THIS PRODUCT
                    </Heading>
                <VStack space={6}>
                    <FormControl>
                        <FormControl.Label _text={{
                        fontSize:'12px',
                        fontWeight:'bold',
                        color:'black'
                        }}>
                        Rating
                        </FormControl.Label>
                        <Select 
                        bg='Grey' 
                        borderWidth={0} 
                        rounded ={5} 
                        py={4} 
                        placeholder='Choose Rate'
                        _selectedItem={{
                        bg:'black',
                        endIcon:<CheckIcon size={3}/>
                        }}
                        selectedValue={ratings}
                        onValueChange={(e)=> setRatings(e)}
                         >
                        <Select.Item label='1 - Poor' value='1'/> 
                        <Select.Item label='2 - Fair' value='2'/> 
                        <Select.Item label='3 - Good' value='3'/> 
                        </Select>
                    </FormControl>

                <FormControl>
                    <FormControl.Label _text={{
                        fontSize:'12px',
                        fontWeight:'bold',
                        color:'black'
                        }}>
                        Comment
                    </FormControl.Label>
                  <TextArea 
                  h={24} 
                  w='full' 
                  placeholder='this product is good ....'
                  borderWidth={0}
                  bg='white'
                  py={4}
                  _focus={{
                    bg:'white'
                  }}
                  />
                </FormControl>
                  <Buttone bg="#4ECDC4" color='black'>
                    Submit
                    </Buttone>      
                </VStack>
                </Box>
                
        </Box>
    );
}
export default Review;