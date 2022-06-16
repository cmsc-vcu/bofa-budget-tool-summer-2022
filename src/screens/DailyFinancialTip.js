import {
    Text,
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';
import { useNavigation } from '@react-navigation/native';

// This page is for the Daily Financial Tip

const DailyFinancialTip = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../res/images/dailyFinancialTipBackground.png')} style={styles.container}>
            <View>
                {/* This will be the top portion of the screen with the back button and bookmark button */}
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('HomePage')}>
                        <View style={styles.backButtonContainer}>
                            <Image source={require('../res/images/financialTipBackArrow.png')} />
                            <Text style={styles.whiteTextStyle}>Back</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>

                {/* This will be the middle portion of the screen with daily financial tip text */}
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Check to see if your credit card has any deals on gas to save money as gas prices rise.</Text>

                </View>
                
                {/* This will be the bottom portion of the screen with the back button and bookmark button */}
                <View>

                </View>

            </View>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    topContainer: {

    },
    textContainer: {
        height: 665,
        width: 350,
        borderRadius: 20,
        backgroundColor: figmaColors.primaryOffWhite
    },
    botContainer: {

    },
    backButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 24,
        alignItems: 'center',
        textAlign: 'center',
        color: figmaColors.primaryOffBlack
    },
    subtext: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
    },
    whiteTextStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        color: figmaColors.primaryOffWhite
    }
})

export default DailyFinancialTip;