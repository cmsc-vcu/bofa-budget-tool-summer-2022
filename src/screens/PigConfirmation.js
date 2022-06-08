import {
    Text,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import React, 
        {useCallback,
        useRef,
        useState} from 'react';
import OrangeButton from "../components/OrangeButton";


function PigConfirmation (props) {
    return (
        <View>
            <Image source={require('../res/images/onboardingProgress4.png')}/>
            <OrangeButton
                text='confirm'
                navigatepage='HomePage'
            />
        </View>
    );
}

export default PigConfirmation;