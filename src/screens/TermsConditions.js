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
const TermsConditions = () => {
    return (
        <View style={style.topcontainer}>
        {/* This view will handle the header*/}
            <View>
                    
                <Image source={require('../res/images/HPtopvector.png')} style={style.topvector}/> 
                <Image source={require('../res/images/Settings.png')} style={style.settings}/>
                <Text style={[style.home]}>
                    Home
                </Text>
                    
                    {/* <Button
                    button = "settingsButton" 
                    style={style.settings}>
                        <Image src="svg/Settings.png"></Image>
                    </Button> */}

                <OrangeButton
                    text={'Accept & Continue'}
                    navigatepage='PrivacyPolicy'
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({

    topcontainer: {
        top: -10
    },

    topvector: {
        width: 390,
        height: 90,
        left: 0,
        top: 0
    },

    home: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: '800',
        lineHeight: 28,
        position: "absolute",
        left: 20,
        top: 45,
        color: "#2E2E2E"
    },
    settings: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400',
        
        left: 340,
        top: -45,
    }
})

export default TermsConditions;