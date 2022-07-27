import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import ForgotPassword from '../screens/ForgotPassword';
import newpassword from './NewPasswordScreen';
import NewPasswordScreen from './NewPasswordScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
    return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen}/>
        <Stack.Screen name='forgotpassword' component={ForgotPassword}/>
        <Stack.Screen name='newpassword' component={NewPasswordScreen}/>
        <Stack.Screen name='confirmscreen' component={ConfirmScreen}/>
        <Stack.Screen name='signin' component={SigninScreen}/>
        <Stack.Screen name='signup' component={SignupScreen}/>
        </Stack.Navigator>
       </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    help:{
        color:"black"
    }
})
export default Navigation;