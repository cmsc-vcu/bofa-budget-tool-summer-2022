import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

{/* This is the OrangeButton component where it will be reused */}
{/* Function: Create a Pressable element given the navigation page where the User wants to go.
    In addition, text that are passed into the OrangeButton will be used as the text for the button.
*/}
function OrangeButtonMedium (props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => { navigation.navigate(props.navigatepage, {
                    pigValue: props.pigValue,
                })} }
                style={styles.buttonstyle}
            >
                <Text style={styles.textstyle}>
                    {props.text}
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonstyle: {
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: figmaColors.primaryOrange,
        alignItems: 'center',
        borderRadius: 20,
        flexShrink: 3,
        width: width * 0.5,
        height: height * 0.040,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    textstyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 14,
        color: figmaColors.primaryOffWhite
    },
})

export default OrangeButtonMedium;