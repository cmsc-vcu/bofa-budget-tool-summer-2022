import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import React , { useState } from 'react';
import OrangeButton from "../components/OrangeButton";

const ThreeTopics = (props) => {
    return (
        <View style={style.container}>
            <Image source={require('../res/images/onboardingProgressThree.png')} style={style.progress}/>
            <Text style={style.header}>
                What are you{"\n"}interested in{"\n"}learning?
            </Text>
            <OrangeButton
                text={'Next'}
                navigatepage='PigCarousel'/>
            {/* <ImageBackground source={require('../res/images/Vector_bottom.png')}>  
                
            </ImageBackground> */}
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,

    },

    progress: {
        position: 'absolute',
        left: 12,
        top: 25
    },

    header: {
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        left: 15,
        top: 50
    },

    subtitle: {

    }
});

export default ThreeTopics;