import FinancialHubGradientText from "../components/financialHubpractice";
import React from "react";
import {
    View,
    StyleSheet,
    ImageBackground,
    Image
} from 'react-native';

import OrangeButton from "../components/OrangeButton";
import fonts from '../res/fonts';

const FirstPageMiddle = () => {
    return (
        /*************************************************************************************************
         * This view is given a style of the container
         * All the children within this view will have the styles.container applied to them
        *************************************************************************************************/
        <View style={newStyle.topcontainer}>
            {/* This view will handle the header*/}
            <View>
                {/* ImageBackground will only show if there are things within it
                For Example, if a text element is only 10px tall and width is the width of the screen
                the ImageBackground will only be displayed 10px tall and the width of the elements within it. */}
                <ImageBackground source={require('../res/images/topRightVector.png')}>  
                    <Image source={require('../res/images/Vector.png')}/> 
                </ImageBackground>
            </View>
            {/* This will handle the middle of the screen*/}
            <View style={newStyle.midcontainer}>
                <FinancialHubGradientText text={'Financial\nHub'} style={[newStyle.title]}/>
                <FinancialHubGradientText text={'Did finances just become\neasier? I\'d say so'} style={newStyle.subtitle}/> 
                {/* The OrangeButton component is found within the src/components folder 
                The text of the button is given, and we want to navigate to the 'CardIntro' screen*/}
                <OrangeButton
                text={'START YOUR JOURNEY!'}
                navigatepage='CardIntro'
                />
            </View>
            {/* This text is imported from another file and will handle the middle text*/}
            {/* This view will handle the footer*/}
            <View>
                <ImageBackground source={require('../res/images/bottomleftVector.png')} style={newStyle.bottomcontainer}>  
                    <Image source={require('../res/images/bottomrightVector.png')}/> 
                </ImageBackground> 
            </View>
        </View>
    )
}

const newStyle = StyleSheet.create({
    
    /*************************************************************************************************
     * This refers to all of the children in the container
     * space-between means spacing the children within the view between each other
     * This means that the first view, the financialhubgradienttext, and the second view
     * are spaced between each other
    *************************************************************************************************/
    topcontainer: {
        flex: 1,
        justifyContent:'space-between'
    }, 
    /*************************************************************************************************
     * PaddingTop messes with the two financialhubgradient text
     * PaddingBottom messes with the bottom button
     * Reasoning? Probably due to the button being at the very bottom of the container
     * Which means adding padding to the top doesn't affect the button because it's at the bottom
    *************************************************************************************************/
    midcontainer: {
        flex: 1,
        paddingTop: 25,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    /*************************************************************************************************
     * When I add the style at the 2nd ImageBackground, this children that are in it are manipulated
     * In this example, I am adding padding to the left of the children. The children is the image
     * paddingTop refers to adding space to the top of the container
     * In addition, paddingTop messes with the bottom left image
     * paddingLeft refers to adding space to the left of the container
    *************************************************************************************************/
    bottomcontainer: {
        paddingLeft: 30,
    },
    // This is the style for any header text
    title: {
        textAlign: "center",
        fontFamily: fonts.mainFont,
        fontSize: 48,
        fontStyle: "normal",
        fontWeight: '800',
        alignItems: 'center'
    },
    // This is the style for any subheader text
    subtitle: {
        textAlign: 'center',
        fontFamily: fonts.mainFont,
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400'
    }
})

export default FirstPageMiddle;