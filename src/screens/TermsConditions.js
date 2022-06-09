import {
    Text,
    StyleSheet,
    View,
    Image,
    Button,
    ImageBackground
} from 'react-native';
import React from 'react';
import OrangeButton from "../components/OrangeButton";
import FinancialHubGradientText from '../components/financialHubpractice';


// This page is for the Terms & Conditions with the Privacy Policy
const TermsConditions = () => {
    return (
        <View style={style.topcontainer}>

            <View>
            <ImageBackground source={require('../res/images/bubble_top.png')}>  
                    <Image source={require('../res/images/t&c_check.png')}/> 
                </ImageBackground>
            </View>
            
            <OrangeButton
                text={'ACCEPT & CONTINUE'}
                navigatepage='UsernameScreen'
            />

            <OrangeButton
                text={'privacy policy'}
                navigatepage='PrivacyPolicy'
            />

        </View>



    )
}

const style = StyleSheet.create({

    topcontainer: {
        top: -10
    }
})

/*function createRadioElement(name, checked) {
    var radioHtml = '<input type="radio" name="' + name + '"';
    if (checked){
        radioHtml += ' checked="checked"';
    }
    radioHtml += '/>';

    var radioFragment = document.createElement('div');
    radioFragment.innerHTML = radioHtml;

    return radioFragment.firstChild;
    
}*/


export default TermsConditions;