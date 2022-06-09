import {
    Text,
    StyleSheet,
    View,
    Image,
    Button
} from 'react-native';
import React from 'react';
import OrangeButton from "../components/OrangeButton";


// This page is for the Terms & Conditions page with the Privacy Policy
const UsernameScreen = () => {
    return (
        <View style={{backgroundColor: 'linear-gradient(180, #85BB4E 0%, #4CB998 71.87%)'}}>
            <Text>Hello World</Text>
            <OrangeButton
                text={'Create Profile'}
                navigatepage='ThreeTopics'/>
        </View>
    )
}

export default UsernameScreen;