import {
    Text,
    StyleSheet,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';
import { useNavigation } from "@react-navigation/native";
import CircularProgress from 'react-native-circular-progress-indicator';
import ContinueLearningCards from '../components/ContinueLearningCards';



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
                    <View style={style.level}>
                        <CircularProgress 
                        value={80} 
                        radius={101}
                        activeStrokeColor={'#FFFEF6'}
                        inActiveStrokeColor={'#E0EDCC'}
                        inActiveStrokeOpacity={.5}
                        >

                        </CircularProgress>
                    </View>
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
                            {/* Text needs to be dynamically aligned to center */}
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
                <View style={style.topvector}/>
                <Image source={require('../res/images/Settings.png')} style={style.settings}/>
                <Text style={[style.home]}>
                    Home
                </Text>
            </View>

            <View style={style.bottomcontainer}> 
                <View style={style.navbar}>
                    <View>
                        <TouchableOpacity activeOpacity={1}>
                            <Image source={require('../res/images/homeIcon.png')} style={style.homeicon}/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.learnicon}>
                        <TouchableOpacity onPress={() => navigation.navigate('FinancialLiteracyCategories')}>
                            <Image source={require('../res/images/learnIcon.png')}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Rewards')}>
                        <Image source={require('../res/images/rewardsIcon.png')} style={style.rewardsicon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Connect')}>
                        <Image source={require('../res/images/connectIcon.png')} style={style.connecticon}/>
                    </TouchableOpacity>
                    <View style={style.box}/>
                </View>
            </View>
        </View>

    )
}


const style = StyleSheet.create({
    box: {
        position: 'absolute',
        height: 65,
        width: 43,
        backgroundColor: '#808080',
        opacity: .5,
        left: 1
    }, 
    topcontainer: {
        position: 'absolute',
        width: '100%'
    },

    topvector: {
        height: '300%',
        backgroundColor: '#FFFEF6',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    home: {
        fontFamily: fonts.mainFont,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 28,
        position: 'absolute',
        left: '8%',
        top: '150%',
        color: '#2E2E2E'
    },

    settings: {
        textAlign: 'center',
        fontFamily: fonts.mainFont,
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400',
        left: '85%',
        top: '-150%',
    },

    toppage: {
        height: 570,
        width: '100%',
        top: '-1%',
    },

    toptext: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 32,
        lineHeight: 38,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: '#FFFEF6',
        top: '24%'
    },

    level: {
        top: '29.5%',
        left: '22.5%'
    },

    character: {
        top: '-1.5%',
        left: '26.8%'
    },

    exp: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center',
        alignContent: 'center',
        color: '#FFFEF6',
        top: '3%'
    },

    career: {
        width: 216,
        height: 46,
        left: '3%',
        top: '7%',
        backgroundColor: '#FFFEF6',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5


    },

    careertext: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        top: '30%',
        color: '#605F58'
    },

    module: {
        width: 141,
        height: 46,
        left: '61%',
        top: '-1%',
        backgroundColor: '#EB7723',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 5
    },

    moduletext: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 18,
        lineHeight: 21,
        textAlign: 'center',
        top: '63%',
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
        top: '-2%',
        backgroundColor: '#FFFEF6',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 0
    },

    subheaderone: {
        left: '7%',
        top: '2.6%',
        fontWeight: '800',
        fontSize: 24,
        color: '#2E2E2E',
        fontFamily: fonts.mainFont,
    },

    learningscroll: {
        top: '11%',
        left: '7%'
    },

    subheadertwo: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        color: '#2E2E2E',
        top: '6.5%',
        left: '7%'
    },

    tips: {
        height: 153,
        width: 351,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        top: '8.3%',
        left: '5%',
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
        top: '20%'
    },

    subheaderthree: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        alignItems: 'center',
        color: '#2E2E2E',
        top: '11.1%',
        left: 35
    },

    rewardspage: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'right',
        color: '#E08734',
        top: '9%',
        right: 30
    },

    rewardscroll: {
        top: '31%',
        left: 25
    },

    rewardstwo: {
        marginLeft: 50
    },

    subheaderfour: {
        fontFamily: fonts.mainFont,
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
        fontFamily: fonts.mainFont,
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
        fontFamily: fonts.mainFont,
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
        left: 30,
        top: 10,
        tintColor: '#4CB998'
    },

    learnicon: {
        left: 100,
        top: -22,
    },

    rewardsicon: {
        left: 170,
        top: -53
    },

    connecticon: {
        left: 245,
        top: -82
    },

})

export default HomePage;