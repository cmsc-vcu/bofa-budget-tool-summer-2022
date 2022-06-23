import {
    Text,
    StyleSheet,
    View,
    Image,
    ScrollView
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import figmaColors from '../res/figmaColors';
import Orangebutton from '../components/OrangeButton';


// This page is for the Terms & Conditions page with the Privacy Policy
const HomePage = () => {
    return (
        // Whole page view
        <View> 

            <ScrollView style={style.scrollcontainer}>
                <View>
                    <LinearGradient
                        colors={[figmaColors.primaryGreen, figmaColors.primaryTeal]}
                        style={style.gradient}>
                            
                        <View style={style.pigtop}>
                                <Text style={style.pigheader}>
                                    Welcome back, Abbie!
                                </Text>
                                <Text style={style.rank}>
                                    Rank/Total XP:
                                </Text>
                            </View>

                            <Image source={require('../res/images/tempHpPig.png')} style={style.pig}/>

                            <View style={style.pigsubheader}>
                                <Text style={style.pigheader}>
                                    LEVEL 1
                                </Text>
                                <Text style={style.xp}>
                                    200/250
                                </Text>
                            </View>

                            <Image source={require('../res/images/pigLine.png')} style={style.pigline}/>
                            <Text style={style.pigtext}>
                                Your financial journey:
                            </Text>


                            {/* <View>
                                <Orangebutton
                                    text='Daily Financial Tip'
                                    navigatepage='DailyFinancialTip'
                                />
                            </View>

                                <View style={style.rightbutton}>
                                    <StyleButton
                                        text={'continue'}
                                    />
                                </View>
                                

                                <Text style={[style.subheaderone]}>
                                    Daily Financial Tips
                                </Text> */}
                            </LinearGradient>

                    </View>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    <Text>
                        he
                    </Text>
                    
                    <Orangebutton
                        navigatepage='DailyFinancialTip'
                        style={style.tips}
                        text='tips'/>
                    
                    <Orangebutton
                        navigatepage='FinancialLiteracyCategories'
                        style={style.categories}
                        text='categories'/>

                </ScrollView>

                <View style={style.topcontainer}> 
                    <Image source={require('../res/images/HPtopvector.png')} style={style.topvector}/> 
                    <Image source={require('../res/images/Settings.png')} style={style.settings}/>
                    <Text style={[style.home]}>
                        Home
                    </Text>
                </View>
        </View>

    )
}


const style = StyleSheet.create({
    gradient: {
        flex: 1,
        height: 600
    },

    topcontainer: {
        position: 'absolute'
    },

    topvector: {
        width: 393,
        height: 90,
        left: 0,
        top: -10

    },

    home: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 28,
        position: 'absolute',
        left: 20,
        top: 35,
        color: '#2E2E2E'
    },

    settings: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400',
        left: 350,
        top: -55,
    },

    scrollcontainer: {
        
    },

    midcontainer: {
        flex: 1,
        height: 100,
        width: "100%",
        
    },

    pigtop: {
        position: 'absolute',
        left: 75,
        top: 120,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 28,        
    },

    pigheader: {
        fontWeight: '800',
        fontSize: 24,
        color: '#FFFEF6',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 4
    },


    rank: {
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
        color: '#FFFEF6',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 4
    },

    pig: {
        top: 185,
        left: 95,
        width: 198,
        height: 199
        // filter: drop-shadow(0, 0, 5, rgba(8, 88, 64, 0.5)),
    },

    pigsubheader: {
        position: 'absolute',
        left: 150,
        top: 400,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        lineHeight: 28,        
    },

    xp: {
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center',
        color: '#FFFEF6'
    },

    pigline: {
        position: 'absolute',
        width: 81,

        left: 155,
        top: 465,
        // border: 3px solid #FFFEF6
    },

    pigtext: {
        position: 'absolute',
        width: 301,
        height: 24,
        left: 45,
        top: 485,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        textAlign: 'center',
        color: '#FFFEF6'
    },

    rightbutton: {
        position: 'absolute',
        width: 17,
        height: 46,
        left: 223,
        top: 529

    },

    subheaderone: {
        position: 'absolute',
        width: 316,
        height: 25,
        left: 31,
        top: 116,
        fontWeight: '400',
        fontSize: 24
    }
})

export default HomePage;