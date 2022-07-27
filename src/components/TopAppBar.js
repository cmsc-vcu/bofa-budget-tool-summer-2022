import React from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import fonts from "../res/fonts";
import figmaColors from "../res/figmaColors";

const TopAppBar = (props) =>
{
    return (
        <View style={styles.topAppBar}>
                <View style={styles.topAppContainer}>
                        <Text style={styles.topAppTitle}>
                            {props.title}
                        </Text>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    topAppTitle: {
        fontFamily: fonts.mainFont,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        color: figmaColors.primaryOffBlack,
        flexGrow: 1,
        top: '30%'
    },
    topAppContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 27,
    },
    topAppBar: {
        width: '100%',
        height: '10%',
        backgroundColor: figmaColors.primaryOffWhite,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
    },
})

export default TopAppBar;