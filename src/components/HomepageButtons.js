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

const HomepageButtons = (props) =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable 
            style={styles.press}
            onPress={() => { navigation.navigate(props.navigatePage)}}>
                <View style={styles.line} backgroundColor={props.themeColor}/>
                <Text style={styles.header}>
                    {props.header}
                </Text>
                <Text style={styles.subheader}>
                    {props.subheader}
                </Text>
                <Image source={require('../res/images/homeButtonArrow.png')} style={styles.arrow}/>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 365,
        height: 100,
        borderRadius: 11,
        backgroundColor: figmaColors.primaryOffWhite,
        elevation: 2.5,
        marginBottom: 7
    },

    press: {
        height: '100%',
        width: '100%'
    },

    line: {
        width: 332,
        height: 4,
        borderRadius: 10,
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
    },

    arrow: {
        top: '-16%',
        left: '90%'
    }
    

})

export default HomepageButtons;