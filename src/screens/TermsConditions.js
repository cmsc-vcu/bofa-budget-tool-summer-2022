import {
    Text,
    StyleSheet,
    View,
    Image,
    Button
} from 'react-native';
import React from 'react';
import OrangeButton from "../components/OrangeButton";


// This page is for the Terms & Conditions with the Privacy Policy
const TermsConditions = () => {
    return (
        <View style={style.topcontainer}>
            <OrangeButton
                text={'Accept & Continue'}
                navigatepage='PrivacyPolicy' />

                <OrangeButton
                    text={'Username button'}
                    navigatepage='threetopics'/>
        </View>

    )
}

const style = StyleSheet.create({

    topcontainer: {
        top: -10
    }
})

export default TermsConditions;