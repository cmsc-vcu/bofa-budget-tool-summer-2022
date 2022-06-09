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
import figmaColors from '../res/figmaColors';


function PigConfirmation (props) {
    // 
    const { pigValue } = props.route.params; // DON'T FORGET TO ADD ROUTE 
    const pigs = {
        0: require('../res/images/piggy_cycle1.png'),
        1: require('../res/images/piggy_2.png'),
        2: require('../res/images/piggy_3.png'),
        3: require('../res/images/piggy_4.png'),
        4: require('../res/images/piggy_5.png'),
        5: require('../res/images/piggy_6.png')
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
            <Text style={styles.title}>You're all set!</Text>
            <Text style={styles.subtitle}>Are you ready to play?</Text>
            <Image style={styles.imageSize} source={pigImage}/>
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
        paddingTop: 40,
        width: 400,
        height: 154
    },
    imageSize: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOrange,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
    }
})

export default PigConfirmation;