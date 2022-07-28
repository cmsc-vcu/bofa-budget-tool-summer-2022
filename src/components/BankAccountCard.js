import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BankAccountCard = () =>
{
    return(
        <View style={styles.container}>
            <Text>Hello</Text>
            <Text>World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: width * 0.45,
        height: height * 0.075,
        borderRadius: 21,
        backgroundColor: figmaColors.primaryOffWhite,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    }
})

export default BankAccountCard;