import {
    Text,
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import figmaColors from '../res/figmaColors';
import { useNavigation } from "@react-navigation/native";
import OrangeButton from "../components/OrangeButton";

const HomePage = () => {
    const navigation = useNavigation();
    return (
        // Whole page view
        <View> 

            <ScrollView style={style.scrollcontainer}>
                <LinearGradient 
                style={style.toppage}
                colors={['#85BB4E','#4CB998']}>
                    <Text style={style.toptext}>
                        Welcome back, Alex!
                    </Text>
                    <Image source={require('../res/images/userLevel.png')} style={style.level}/>
                    <Image source={require('../res/images/characterIcon.png')} style={style.character}/>
                    <Text style={style.exp}>
                        Level 1: 200/250 EXP
                    </Text>
                    <View style={style.career}>
                        <Text style={style.careertext}>
                            CAREER SNAPSHOOT
                        </Text>
                    </View>
                    <View style={style.module}>
                        <TouchableOpacity onPress={() => navigation.navigate('FinancialLiteracyCategories')}>
                            <Text style={style.moduletext}>
                                MODULE
                            </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                    <View style={style.bottompage}>
                        <Text style={[style.subheaderone]}>
                            CONTINUE LEARNING
                        </Text>
                        <View>
                            <ScrollView 
                            style={style.learningscroll}
                            horizontal= {true}>
                            <Image source={require('../res/images/learningScrollOne.png')}/>
                            <Image source={require('../res/images/learningScrollTwo.png')}/>
                            </ScrollView>
                        </View>
                        <Text style={style.subheadertwo}>
                            DAILY FINANCIAL TIP
                        </Text>
                        <View style={style.tips}>
                            <TouchableOpacity 
                            style={style.tiptouchable}
                            onPress={() => navigation.navigate('DailyFinancialTip')}>
                                <Text style={style.tiptext}>
                                    Check to see if your credit card has any deals on gas to save money as gas prices rise.
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={style.subheaderthree}>
                            REWARDS
                        </Text>
                        <Text 
                        style={style.rewardspage}
                        onPress={() => navigation.navigate('Rewards')}>
                            View More
                        </Text>
                        <View>
                            <ScrollView 
                            style={style.rewardscroll}
                            horizontal= {true}>
                            <Image source={require('../res/images/rewardsCFA.png')}/>
                            <Image source={require('../res/images/rewardsVCUDine.png')} style={style.rewardstwo}/>
                            </ScrollView>
                        </View>
                        <Text style={style.subheaderfour}>
                            CONNECT
                        </Text>
                        <Text 
                        style={style.connectpage}
                        onPress={() => navigation.navigate('Connect')}>
                            View More
                        </Text>
                        <View style={style.connect}>
                            <TouchableOpacity 
                            style={style.connecttouchable}
                            onPress={() => navigation.navigate('Connect')}>
                                <Image source={require('../res/images/friendIcon.png')} style={style.friendicon}/>
                                <Text style={style.connecttext}>
                                    Add Friend
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>


                <View style={style.topcontainer}> 
                    <Image source={require('../res/images/HPtopvector.png')} style={style.topvector}/> 
                    <Image source={require('../res/images/Settings.png')} style={style.settings}/>
                    <Text style={[style.home]}>
                        Home
                    </Text>
                </View>

                <View style={style.bottomcontainer}> 
                    <View style={style.navbar}>
                        <TouchableHighlight>
                            <Image source={require('../res/images/homeIcon.png')} style={style.homeicon}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('FinancialLiteracyCategories')}>
                            <Image source={require('../res/images/learnIcon.png')} style={style.learnicon}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('Rewards')}>
                            <Image source={require('../res/images/rewardsIcon.png')} style={style.rewardsicon}/>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => navigation.navigate('Connect')}>
                            <Image source={require('../res/images/connectIcon.png')} style={style.connecticon}/>
                        </TouchableHighlight>
                    </View>
                </View>

                
        </View>

    )
}


const style = StyleSheet.create({
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

    toppage: {
        height: 570,
        width: '100%',
        top: -20,
    },

    toptext: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: 38,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFEF6',
        top: 140
    },

    level: {
        top: 170,
        left: 85
    },

    character: {
        top: -10,
        left: 108
    },

    exp: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        alignContent: 'center',
        color: '#FFFEF6',
        top: 20
    },

    career: {
        width: 216,
        height: 46,
        left: 10,
        top: 40,
        backgroundColor: '#FFFEF6',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5


    },

    careertext: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        top: 12,
        color: '#605F58'
    },

    module: {
        width: 141,
        height: 46,
        left: 240,
        top: -6,
        backgroundColor: '#EB7723',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5
    },

    moduletext: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        top: 12,
        color: '#FFFEF6'
    },

    scrollcontainer: {
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


    bottompage: {
        height: 1150,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        top: -40,
        backgroundColor: '#FFFEF6',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 0
    },

    subheaderone: {
        left: 31,
        top: 30,
        fontWeight: '800',
        fontSize: 24,
        color: '#2E2E2E',
        fontFamily: 'Roboto',
    },

    learningscroll: {
        top: 50,
        left: 10
    },

    subheadertwo: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        color: '#2E2E2E',
        top: 100,
        left: 28
    },

    tips: {
        height: 153,
        width: 351,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        top: 125,
        left: 20,
        backgroundColor: '#2E2E2E',
    },

    tiptouchable: {
        height: '100%',
        width: '100%'
    },

    tiptext: {
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 24,
        textAlign: 'center',
        fontStyle: 'italic',
        lineHeight: 28,
        top: 30
    },

    subheaderthree: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        color: '#2E2E2E',
        top: 180,
        left: 35
    },

    rewardspage: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        color: '#E08734',
        top: 157,
        right: 30
    },

    rewardscroll: {
        top: 180,
        left: 25
    },

    rewardstwo: {
        marginLeft: 50
    },

    subheaderfour: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        color: '#2E2E2E',
        top: 225,
        left: 35
    },

    connectpage: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        color: '#E08734',
        top: 200,
        right: 30
    },

    connect: {
        height: 153,
        width: 351,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        top: 225,
        left: 20,
        backgroundColor: 'rgba(133, 187, 78, 0.25)',
    },

    connecttouchable: {
        height: '100%',
        width: '100%'
    },

    friendicon: {
        top: 25,
        left: 140
    },

    connecttext: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#2E2E2E',
        top: 35
    },

    bottomcontainer: {
        position: 'absolute',
        
    },

    navbar: {
        width: 382,
        height: 63,
        backgroundColor: '#FFFEF6',
        left: 5,
        top: 685,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 15,
    },

    homeicon: {
        left: 10,
        tintColor: '#4CB998'
    },

    learnicon: {
        left: 100,
        top: -25,
    },

    rewardsicon: {
        left: 175,
        top: -50
    },

    connecticon: {
        left: 250,
        top: -75
    },

})

export default HomePage;