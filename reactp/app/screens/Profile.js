import { Box,FormControl,Input,ScrollView,Text, VStack } from 'native-base';
import React from 'react';
import Buttone from './Buttone';
    
const Inputs= 
[
    {
        Label:"USERNAME",
        type:'text',
        holder:'username'
        
    },
    {
        Label:"NEW PASSWORD",
        type:'password',
        holder:"NewPassword",

    },
    {
        Label:"CONFIRM PASSWORD",
        type:'password',
        holder:"Confirm Password",

    },
    {
        Label:"EMAIL",
        type:'email',
        holder:"email",

    },
]

    function Profile() {
        return (
            <Box h='full' bg='whote' px={5}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack space={10} mt={5} pb={10}>
                        {
                            Inputs.map((i,index)=>(
                        <FormControl key={index}>
                            <FormControl.Label
                            _text={{
                                fontSize:"12px",
                                fontWeight:"bold",
                            }}>
                                {i.Label}
                            </FormControl.Label>
                            <Input 
                            borderColor="white"
                            borderWidth={0.5}
                            bg="black" 
                            py={4} 
                            type={i.type}
                            color='white'
                            placeholder={i.holder}
                            fontSize={20}
                            _focus={{ bg: "black", 
                            borderWidth:1,
                            borderColor:"#4ECDC4"
                            }}
                            />
                        </FormControl>
                        ))}
                        <Buttone 
                        bg="black" 
                        color='white'
                        >
                        UPDATE PROFILE
                        </Buttone>  
                    </VStack>
                </ScrollView>
            </Box>
        );
    }
    
    export default Profile;