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
import GrayButton from '../components/GrayButton';
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

            <View style={styles.midContainer}>
                <Text style={styles.title}>You're all set!</Text>
                <Text style={styles.subtitle}>Are you ready to play?</Text>
                <Image style={styles.imageSize} source={pigImage}/>
            </View>

            <View style={styles.bottomContainer}>
                <ImageBackground source={require('../res/images/pigConfirmationBL.png')}>
                    <ImageBackground source={require('../res/images/pigConfirmationBR.png')}>
                        <View style={styles.bottomBar}>
                            <OrangeButton
                                text='confirm'
                                navigatepage='HomePage'
                            />
                            <View style={styles.spaceBetweenButtons}/>{/* This will act as padding until Kevin finds out how to add padding between the two buttons */}
                            <GrayButton
                                text='No, Go Back'
                                navigatepage='PigCarousel'
                            />
                        </View>
                    </ImageBackground>
                </ImageBackground>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    midContainer: {
        paddingTop: 40,
        alignItems: 'center'
    },
    bottomContainer: {
        paddingTop: 50, // This will push the two background images at the bottom downward to match the figma more
        alignContent: 'flex-end'
    },
    topBar: {
        alignItems: 'center',
        paddingTop: 35,
        width: 400,
        height: 154
    },
    bottomBar: {
        alignItems: 'center',
        alignContent: 'stretch',
        width: 400,
        paddingTop: 75,
        height: 319
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
    },
    spaceBetweenButtons: {
        height: 15
    }
})

export default PigConfirmation;