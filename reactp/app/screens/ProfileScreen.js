import { Center,Heading,Image,Text } from 'native-base';
import React, { Fragment } from 'react';
import Tabs from './Tabs';
import {FontAwesome} from '@expo/vector-icons';
import {useNavigation}from '@react-navigation/native';

function ProfileScreen() {
    const navigation = useNavigation();
const backTopHomeScreen = () => {
    console.warn("back");
    navigation.navigate("home")

}
const backToWelcomeScreen = () => {
    console.warn("Logout");
    navigation.navigate("Welcome")

}
    return (
        <Fragment>
            <Center bg="black" pt={10} pb={6}>
            <FontAwesome
                style={{position:"relative", left:-190, top:-1 , paddingLeft:"5%"}}
                name='arrow-left'
                size={24}
                color="grey"
                onPress={backTopHomeScreen}
                />
            <FontAwesome
                style={{position:"relative", right:-180, top:-28 , paddingRight:"2%"}}
                name='sign-out'
                size={25}
                color="grey"
                onPress={backToWelcomeScreen}
                />
                <Image source={{uri:"https://res.cloudinary.com/billcom/image/upload/v1659603787/user.png"}}
                alt="profile"
                w={24}
                h={24}
                resizeMode="cover"
                />
                <Heading bold fontSize={15} isTruncated my={2} color="white">
                    User 101
                </Heading>
                <Text italic fontSize={10} color="white" >
                joined august 01 2022
                </Text>
            </Center>
            {/* TABS */}
            <Tabs/>
        </Fragment>
    );
}

export default ProfileScreen;