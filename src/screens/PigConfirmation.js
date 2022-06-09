import {
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
} from 'react-native';
import React, 
        {useCallback,
        useRef,
        useState} from 'react';
import OrangeButton from "../components/OrangeButton";


function PigConfirmation (props) {
    // 
    const { pigValue } = props.route.params; // DON'T FORGET TO ADD ROUTE 
    const pigs = {
        pig1: '../res/images/piggy_cycle1.png',
        pig2: '../res/images/piggy_2.png',
        pig3: '../res/images/piggy_3.png',
        pig4: '../res/images/piggy_4.png',
        pig5: '../res/images/piggy_5.png',
        pig6: '../res/images/piggy_6.png'
    }

    var pigImage = pigs[pigValue];

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../res/images/pigConfirmationTR.png')}> 
                    <ImageBackground source={require('../res/images/pigConfirmationTL.png')}>
                        <View style={styles.topBar}>
                            <Image source={require('../res/images/onboardingProgress4.png')}/> 
                        </View>
                    </ImageBackground>
            </ImageBackground>
            <Text>pigValue: {JSON.stringify(pigValue)}</Text>
            <OrangeButton
                text='confirm'
                navigatepage='HomePage'
            />
            <OrangeButton
                text='No, Go Back'
                navigatepage='PigCarousel'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    topBar: {
        alignItems: 'center',
        paddingTop: 20,
        width: 400,
        height: 154
    }
})

export default PigConfirmation;