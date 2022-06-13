import {
    Text,
    StyleSheet,
    View,
    Image,
    Button,
    ImageBackground
} from 'react-native';
import React, { useState } from 'react';
import OrangeButton from "../components/OrangeButton";
import { RadioButton } from 'react-native-paper';


// This page is for the Terms & Conditions with the Privacy Policy
// TESTING PULL FOR ANEESH
const TermsConditions = () => {
    const [checked, setChecked] = useState('first');
    
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

            <RadioButton
                value='first'
                status={ checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
            />
            <RadioButton
                value="second"
                status={ checked === 'second' ? 'checked' : 'unchecked' }
                onPress={() => setChecked('second')}
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