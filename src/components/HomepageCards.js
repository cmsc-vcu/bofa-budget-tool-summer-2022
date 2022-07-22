import {
    StyleSheet, 
    View,
    Text,
    Pressable,
    Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

const HomepageCards = (props) =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.line}/>
            <Text style={styles.header}>
                Budget
            </Text>
            <Text style={styles.subheader}>
                Manage your spendings and savings.
            </Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 365,
        height: 109,
        borderRadius: 11,
        elevation: 5,
        backgroundColor: figmaColors.primaryOffWhite,
        shadowColor: 'rgba(96, 95, 88, 0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
        top: 50
    },

    line: {
        width: 332,
        height: 4,
        borderRadius: 10,
        backgroundColor: '#7AC032',
        left: '5%',
        top: '10%',

    },

    header: {
        fontFamily: fonts.mainFont,
        fontWeight: '800',
        fontSize: 24,
        color: '#2E2E2E',
        left: '8%',
        top: '25%'
    },

    subheader: {
        fontFamily: fonts.mainFont,
        fontWeight: '400',
        fontSize: 16,
        color: '#605F58',
        left: '8%',
        top: '25%'
    }
    

})

export default HomepageCards;