import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BlueFunnelButton = (props) =>
{
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.whiteTextStyle}>
                {props.text}
            </Text>
            <Pressable onPress={() => {
                navigation.navigate(props.navigatepage)
            }}>
                <View style={styles.clickableContainer}>
                    <Image source={require('../res/images/frontArrow.png')} style={styles.imageStyle}/>
                </View>
            </Pressable>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: '#4F97A3',
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        paddingLeft: width * 0.06
    },
    clickableContainer: {
        width: width * 0.06,
        height: height * 0.03,
        borderRadius: 50,
        backgroundColor: 'rgba(96, 95, 88, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 3,
        marginRight: width * 0.05
    },
    whiteTextStyle: {
        fontFamily: fonts.mainFont,
        fontWeight: '500',
        fontSize: 16,
        fontStyle: 'normal',
        color: figmaColors.primaryOffWhite,
        marginRight: 'auto',
    },
    imageStyle: {
        width: width * 0.03,
        height: height * 0.05,
        resizeMode: 'contain'
    }
})

export default BlueFunnelButton;