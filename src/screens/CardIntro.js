import React from "react";
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native'
import figmaColors from "../res/figmaColors";
import OrangeButton from "../components/OrangeButton";

function CardIntro() {
    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={require('../res/images/financialtarget.png')} />
                <Text style={styles.title}>{'Define your\nfinancial\ngoals.'}</Text>
                <Text style={styles.subtitle}>{'Don\'t know what\'s your need?\nDon\'t worry, we will guide you\nstep by step'}</Text>
            </View>
            <OrangeButton
            text={'I\'m ready!'}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: figmaColors.primaryOffWhite,
    },
    // Be care of adding left and bottom attributes when pulling from figma
    subcontainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryGreen,
        width: 360,
        height: 541,
        paddingBottom: 50,
        paddingLeft: 35,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        paddingRight: 30
    },
    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        lineHeight: 28
    },
});

export default CardIntro;