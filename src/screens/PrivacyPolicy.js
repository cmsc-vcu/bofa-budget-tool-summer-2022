import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import React from 'react';


// This page is for the Terms & Conditions page with the Privacy Policy
const PrivacyPolicy = () => {
    return (
        <View style={style.topContainer}>
            <Image source={require('../res/images/privacyPolicyVector.png')}/> 
            <Text style={style.header}>
                Privacy Policy
            </Text>
            <Text style={style.subheader}>
                Updated: February 22, 2022
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    topContainer: {

    },

    header: {

    },

    subheader: {

    }


})

export default PrivacyPolicy;