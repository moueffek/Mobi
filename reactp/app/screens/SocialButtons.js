import React, { Fragment } from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import CustomButton from '../screens/CustomButton';

function SocialButtons() {
    const onSignInwithFacebookPressed =()=>{
        console.warn("Signed with facebook");
    }
    const onSignInwithGooglePressed =()=>{
        console.warn("Signed with google");
    }
    const onSignInwithApplePressed =()=>{
        console.warn("Signed with apple");
    }
    return (
        <Fragment>
        <CustomButton 
        text="Sign In with Facebook" 
        onPress={onSignInwithFacebookPressed}
        fgcolor="#4765A9"
        bgcolor="#E7EAF4" />

        <CustomButton 
        text="Sign In with Gooogle" 
        onPress={onSignInwithGooglePressed} 
        fgcolor="#FAE9EA"
        bgcolor="#DD4D44"
        />

        <CustomButton 
        text="Sign In with apple" 
        onPress={onSignInwithApplePressed} 
        fgcolor="#e3e3e3"
        bgcolor="#363636"
        />  
        </Fragment>
    );
}

export default SocialButtons;