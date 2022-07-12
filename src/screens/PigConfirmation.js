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

    // a constant to hold the value of the pig that the users chose from the carousel
    const { pigValue } = props.route.params; // DON'T FORGET TO ADD ROUTE; IT WON'T WORK WITHOUT ROUTE

    // This is an associative list of the pig avatars with numbers as keys to the value
    const pigs = {
        0: require('../res/images/piggy_cycle1.png'),
        1: require('../res/images/piggy_2.png'),
        2: require('../res/images/piggy_3.png'),
        3: require('../res/images/piggy_4.png'),
        4: require('../res/images/piggy_5.png'),
        5: require('../res/images/piggy_6.png')
    }

    // create a variable to grab the correct pig with the require that the users chose
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


            {/* This is takes care of the title, subtitle, and the pig image that the user choses */}
            {/* The pig image changes based on what value (what pig) the user picks on the pig carousel */}
            <View style={styles.midContainer}>
                <Text style={styles.title}>You're all set!</Text>
                <Text style={styles.subtitle}>Are you ready to play?</Text>
                <Image style={styles.imageSize} source={pigImage}/>
            </View>


            {/* This is the bottom portion of the screen, which contains the two image backgrounds */}
            <View style={styles.bottomContainer}>
                <ImageBackground source={require('../res/images/pigConfirmationBL.png')}>
                    <ImageBackground source={require('../res/images/pigConfirmationBR.png')}>
                        <View style={styles.bottomBar}>

                            {/* These are the two buttons */}
                            {/* Orange button takes users to the homepage when the user is certain about the pig they chose */}
                            <OrangeButton
                                text='confirm'
                                navigatepage='HomePage'
                            />
                            <View style={styles.spaceBetweenButtons}/>{/* This will act as padding until Kevin finds out how to add padding between the two buttons */}
                            {/* Gray button takes users back to the pig carousel when the user wants to change their pig */}
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
        paddingTop: 40, // This pushes the middle portion of the screen towards the bottom because it adds padding to the top
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