import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import figmaColors from '../res/figmaColors';


{/* This is the OrangeButton component where it will be reused */}
{/* Function: Create a Pressable element given the navigation page where the User wants to go.
    In addition, text that are passed into the OrangeButton will be used as the text for the button.
*/}
function OrangeButton (props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => navigation.navigate(props.navigatepage)}
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
        backgroundColor: '#EB7723',
        alignItems: 'center',
        borderRadius: 20,
        width: 306,
        height: 53,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    textstyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
        color: figmaColors.primaryOffWhite
    },
})

export default OrangeButton;