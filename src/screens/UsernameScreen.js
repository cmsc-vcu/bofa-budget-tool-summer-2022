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
        <View>
            <Text>Hello World</Text>
            <OrangeButton
                text={'Create Profile'}
                navigatepage='threetopics'/>
        </View>
    )
}

export default UsernameScreen;