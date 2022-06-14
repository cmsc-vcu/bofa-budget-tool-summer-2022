import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import React from 'react';

// This page is for the Daily Financial Tip

const DailyFinancialTip = () => {
    return (
        <View>
            {/* This will be the top portion of the screen with the back button and bookmark button */}
            <View style={style}>
                <TouchableOpacity></TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>
            </View>

            {/* This will be the middle portion of the screen with daily financial tip text */}
            <View>
                <Text>Check to see if your credit card has any deals on gas to save money as gas prices rise.</Text>

            </View>
            
            {/* This will be the bottom portion of the screen with the back button and bookmark button */}
            <View>

            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    topContainer: {

    },
    midContainer: {
        height: 500,
        width: 500,
        borderRadius: 30
    },
    botContainer: {

    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24,
        alignContent: 'center'
    },
    subtext: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
    },
    dateStyle: {

    }
})

export default DailyFinancialTip;