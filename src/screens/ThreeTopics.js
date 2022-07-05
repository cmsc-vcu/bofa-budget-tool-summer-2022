import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    Image,
    Button
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';
import LinearGradient from 'react-native-linear-gradient';
import OrangeButtonTiny from '../components/OrangeButtonTiny';
import SelectionButtons from '../components/SelectionButtons';

const ThreeTopics = (props) => {
    return (
        <LinearGradient
            colors={[figmaColors.primaryGreen, figmaColors.primaryTeal]}
            style={style.container}>

            <View style={style.container}>
                <Image source={require('../res/images/onboardingProgressThree.png')} style={style.progress} />
                <Text style={style.header}>
                    What are you{"\n"}interested in{"\n"}learning?
                </Text>
                <Text style={style.subtitle}>
                    Select your top 3:
                </Text>
            </View>

            <View style={style.container}>
                <Image
                    source={require('../res/images/Vector_bottom.png')}
                    style={{ bottom: "-220%" }}
                />
                <Image
                    source={require('../res/images/btn_common.png')}
                    style={{ left: 15, bottom: -5 }}
                    navigatepage='PigCarousel'
                />
            </View>
            <View style={{
                flex: 1,
                top: 160,
                left: -70
            }}>
                <SelectionButtons
                    text={'Building Credit'}
                />
            </View>

            <View style={{
                flex: 1,
                top: 105,
                left: 90
            }}>
                <SelectionButtons
                    text={'Tax'}
                />
            </View>

            <View style={{ flex: 1, top: 120, left: -80 }}>
                <SelectionButtons
                    text={'Budgeting'}
                />
            </View>

            <View style={{ flex: 1, top: 65, left: 95 }}>
                <SelectionButtons
                    text={'Retirement'}
                />
            </View>

            <View style={{ flex: 1, top: 80, left: -5 }}>
                <SelectionButtons
                    text={'Appeciation of Assets'}
                />
            </View>

            <View style={{ flex: 1, top: 92, left: -90 }}>
                <SelectionButtons
                    text={'Real Estate'}
                />
            </View>


            <View style={{ flex: 1, top: 40, left: 80 }}>
                <SelectionButtons
                    text={'Investing'}
                />
            </View>

            <View style={{ flex: 1, top: 53, left: -80 }}>
                <SelectionButtons
                    text={'Loans'}
                />
            </View>

            <View style={{ flex: 1, top: -1, left: 70 }}>
                <SelectionButtons
                    text={'Banking'}
                />
            </View>

            <View style={{ flex: 1, top: 12, left: -110 }}>
                <SelectionButtons
                    text={'Saving'}
                />
            </View>

            <View style={{ flex: 1, top: -40, left: 70 }}>
                <SelectionButtons
                    text={'Cryptocurrencies'}
                />
            </View>

            <View style={style.container_2}>
                <Text style={style.bodyText}>
                    Don't see your interests?{"\n"}Suggest it here
                </Text>
            </View>
            <View style={style.container_1}>
                <OrangeButtonTiny
                    text={'Next'}
                    navigatepage='PigCarousel'
                />
            </View>
        </LinearGradient>
    )
};

const style = StyleSheet.create({
    container: {
        flex: 1,
    },

    container_1: {
        flex: 1,
        top: -30,
        left: 90,
    },

    container_2: {
        flex: 1,
        top: -25,
    },

    progress: {
        position: 'absolute',
        left: 12,
        top: 25
    },

    progress_1: {
        position: 'absolute',
        left: 12,
        top: 80
    },

    header: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 37,
        fontWeight: '800',
        left: 15,
        top: 50,
        height: 200,
        color: "#FFFEF6"
    },

    subtitle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'left',
        paddingTop: 0,
        paddingLeft: 15,
        color: "#FFFEF6"
    },

    bodyText: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        color: "#605F58"
    },

    textstyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
        color: figmaColors.primaryOffBlack
    },

    imageSize: {
        width: 1250.41,
        height: 955.81,
        top: 838.46,
        left: -657,
        resizeMode: 'contain' // Adding resizeMode with contain will resize the image without having the image clipped
    }
});

export default ThreeTopics;