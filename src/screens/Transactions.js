import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    ImageBackground,
    TextInput,
    Image,
    Button
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';
import PopUp from '../components/PopUp';

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;
function Transactions() {
    return (
        <View style={style.container}>
            <View style={style.container_1}>
                <PopUp/>
                
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: figmaColors.primaryGray
    },

    container_1: {
        width: width,
        height: height * 0.65,
        backgroundColor: figmaColors.primaryOffWhite,
        top: '40%'
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
        textAlign: 'center',
        paddingTop: 0,
        paddingLeft: 15,
        color: figmaColors.primaryOffBlack
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

export default Transactions;