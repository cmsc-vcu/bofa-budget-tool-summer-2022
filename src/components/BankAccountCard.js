import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import React from 'react';

import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BankAccountCard = (props) =>
{

    let accountTotalMoney = props.accountTotalMoney

    return(
        <View style={styles.container}>
            <Image source={require('../res/images/bofaIcon.png')}/>
            <View style={{flexDirection: 'column'}}>
                <Text style={styles.accountTypeTextStyle}>Checking</Text>
                <Text style={styles.accountMoneyTextStyle}> {'$' + accountTotalMoney } </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width * 0.45,
        height: height * 0.075,
        borderRadius: 21,
        backgroundColor: figmaColors.primaryOffWhite,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    accountTypeTextStyle: {
        fontFamily: fonts.mainFont,
        fontWeight: '500',
        fontStyle: 'normal',
        fontSize: 16,
        color: figmaColors.primaryOffBlack
    },
    accountMoneyTextStyle: {
        fontFamily: fonts.mainFont,
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: 13,
        color: figmaColors.primaryGray
    }
})

export default BankAccountCard;