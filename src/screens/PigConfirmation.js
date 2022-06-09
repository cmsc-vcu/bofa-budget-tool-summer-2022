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
        1: '../res/images/piggy_cycle1.png',
        2: '../res/images/piggy_2.png',
        3: '../res/images/piggy_3.png',
        4: '../res/images/piggy_4.png',
        5: '../res/images/piggy_5.png',
        6: '../res/images/piggy_6.png'
    }

    var pigImage = pigs[pigValue - 1];

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../res/images/pigConfirmationTR.png')}> 
                    <ImageBackground source={require('../res/images/pigConfirmationTL.png')}>
                        <View style={styles.topBar}>
                            <Image source={require('../res/images/onboardingProgress4.png')}/> 
                        </View>
                    </ImageBackground>
            </ImageBackground>
            <Text>You're all set!</Text>
            <Text>{pigImage}</Text>
            {/* <Image source={require('../res/images/piggy_6.png')}/> */}
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