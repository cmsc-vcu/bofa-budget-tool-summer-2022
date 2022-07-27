import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import fonts from "../res/fonts";
import figmaColors from "../res/figmaColors";

const TopHome = (props) =>
{
    return (
        <View style={styles.bar}>
            <Text style={styles.text}>
                {props.header}
            </Text>
            {/* <Image source={require('../res/images/settings.png')} style={styles.settings}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    bar: {
        width: '100%',
        height: 75,
    },

    text: {
        fontFamily: fonts.mainFont,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 28,
        position: 'absolute',
        left: '8%',
        top: '40%',
        color: figmaColors.primaryOffWhite
    },

    settings: {
        top: '40%',
        left: '85%'
    },
})

export default TopHome;