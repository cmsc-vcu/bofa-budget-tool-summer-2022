import {
    Text,
    StyleSheet,
    View,
    Image,
    Button
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';
import LinearGradient from 'react-native-linear-gradient';
import OrangeButton from "../components/OrangeButton";


// This page is for the Terms & Conditions page with the Privacy Policy
function PigCarousel (props) {
    return (
        <LinearGradient 
            colors={[figmaColors.primaryGreen, figmaColors.primaryTeal]}
            style={styles.container}>
            <Text style={styles.title}>Choose Your Piggy!</Text>
            <Text></Text>
            <Text style={styles.subtitle}>You can change your pig later</Text>
            <OrangeButton
                text='confirm'
                navigatepage='HomePage'/>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
    },
    // Be care of adding left and bottom attributes when pulling from figma
    // This acts as the card container
    subcontainer: {
        alignItems: 'flex-start',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryGreen,
        width: 360,
        height: 541,
        paddingLeft: 35,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    // This refers to the main title of the Pig Carousel
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        textAlign: 'center'
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        textAlign: 'center'
    },
    activeDotStyle: {
        width:20,
        height:20,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: figmaColors.primaryGreen
    },
    inactiveDotStyle: {
        borderColor: figmaColors.primaryGreen,
        borderWidth: 2,
        backgroundColor: figmaColors.primaryOffWhite
    }

});

export default PigCarousel;