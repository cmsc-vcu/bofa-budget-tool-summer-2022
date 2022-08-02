import React, {
    useState,
    useRef,
    useCallback,
} from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native'
import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import OrangeButton from "../components/OrangeButton";
import LinearGradient from 'react-native-linear-gradient';

const LastOnboarding = () =>
{
    return (
        <View style = {style.container}>
            <LinearGradient colors={['#85BB4E', '#4CB998']} style={style.linearGradient}>
                <Image source ={require('../res/images/topWhiteVector.png')}
                style = {style.topVectorContainer}/>

            <Text style={style.label}>We don't just give you a budgeting tool.</Text>

            <Text style={style.label2}>We will teach you the tools and financial knowledge to stick with you for a lifetime.</Text>




            </LinearGradient>
            <Image source ={require('../res/images/LeftGreenVector.png')}
                style = {style.bottomLeftVector}/>

            <Image source ={require('../res/images/rightYellowVector.png')}
                style = {style.bottomRightVector}/>

            <View style = {style.orangeButtoncontainer}>
                <OrangeButton
                    text={'Let’s get started!'}
                    navigatepage='Connect'
                    
                />
            </View>

        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        //backgroundColor: figmaColors.primaryTeal,
        paddingTop: 0,
        paddingBottom: 0,
    },
      topVectorContainer: {
        
        position: 'absolute',
        width: 633,
        height: 471,
        left: -220,
        top: -190,
      },
      bottomLeftVector: {
        position: 'absolute',
        width: 590,
        height: 638,
        left: -300,
        top: 400
      },
      label: {
        position: 'absolute',
        width: 279,
        height: 136,
        left: 67,
        top: 200,
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 37,
        fontWeight: '800',
        color: "#FFFEF6"
      },
      bottomRightVector:{
        position: 'absolute',
        width: 495,
        height: 412,
        left: 0,
        top: 450,
      },
      label2: {
        position: 'absolute',
        width: 254,
        height: 81,
        left: 67,
        top: 360,
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: "#FFFEF6"
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      orangeButtoncontainer: {
        position: 'absolute',
        width: 306,
        height: 53,
        left: 40,
        top: 450,
      }

      
    });


export default LastOnboarding;