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
import OrangeButton from "../components/OrangeButton";
import figmaColors from '../res/figmaColors';
import LinearGradient from 'react-native-linear-gradient';
import OrangeButtonTiny from '../components/OrangeButtonTiny';

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
                    style={{ bottom: '5%' }}
                />
                <Image
                    source={require('../res/images/Frame_52.png')}
                    style={style.progress_1}
                />
            </View>
            <View style={style.container_1}>
                <OrangeButtonTiny
                    text={'Next'}
                    navigatepage='PigCarousel'
                />

                <Image
                    source={require('../res/images/btn_common.png')}
                    style={{ left: -70, bottom: '26%' }}
                    navigatepage='PigCarousel'
                />
            </View>

            <View style={style.container}>
                <Text style={style.bodyText}>
                    Don't see your interests?{"\n"}Suggest it here
                </Text>
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
        top: 310,
        left: 100,
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
        fontFamily: "Roboto",
        fontStyle: 'normal',
        fontSize: 37,
        fontWeight: '800',
        left: 15,
        top: 50,
        height: 200,
        color: "#FFFEF6"
    },

    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 22,
        fontWeight: '400',
        textAlign: 'left',
        paddingTop: 0,
        paddingLeft: 15,
        color: "#FFFEF6"
    },

    bodyText: {

        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        paddingTop: 50,
        color: "#605F58"
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