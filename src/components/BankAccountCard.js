import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    SafeAreaView
} from 'react-native';
import React from 'react';

import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

    /*************************************************************************************************
     * The BankAccountCard.js functions as a reusuable component
     * Ideally, pull in the user's bank account information and store them within a list
     * Each item in the list will be generated into a card that displays the information in the item
    *************************************************************************************************/

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const bankAccountsList = [
    {
        AccountType: 'Checking',
        MoneyAmount: 2500,
        ImageRequire: require('../res/images/bofaIcon.png')
    },
    {
        AccountType: 'Savings',
        MoneyAmount: 500,
        ImageRequire: require('../res/images/bofaIcon.png')
    },
    {
        AccountType: 'Credit Card',
        MoneyAmount: 'N/A',
        ImageRequire: require('../res/images/bofaIcon.png')
    },
    {
        AccountType: 'Venmo',
        MoneyAmount: 600,
        ImageRequire: require('../res/images/venmoIcon.png')
    }
]

const Item = ({  AccountType, MoneyAmount, ImagePath}) =>
(
    <View style={styles.container}>
        <Image source={ ImagePath } style={{ resizeMode: 'contain', width: width * 0.1 , height: height * 0.05 }} />
        <View style={{flexDirection: 'column', paddingLeft: width * 0.03}}>
            <Text style={styles.accountTypeTextStyle}>{ AccountType }</Text>
            <Text style={styles.accountMoneyTextStyle}> { '$' + MoneyAmount } </Text>
        </View>
    </View>
);

const Separator = () =>
{
    return(
        <View style={{width: width * 0.03 }}/>
    );
};

    /*************************************************************************************************
     * BankAccountCard 
    *************************************************************************************************/

const BankAccountCard = (props) =>
{
    const renderCard = ({ item }) => 
    (
        <Item AccountType={item.AccountType} MoneyAmount={item.MoneyAmount} ImagePath={item.ImageRequire}/>
    );

    return(
        <SafeAreaView>
            <FlatList
                horizontal
                data={bankAccountsList}
                renderItem={renderCard}
                ItemSeparatorComponent={Separator}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: width * 0.03,
        width: width * 0.40,
        height: height * 0.075,
        borderRadius: 15,
        backgroundColor: figmaColors.primaryOffWhite,
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
});

export default BankAccountCard;