import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable
} from 'react-native'

import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import PencilSVG from '../res/svg/pencil.svg'
import ArrowDropdown from '../res/svg/arrowDownwards.svg'
import appText from "../res/appText";
import OrangeButton from '../components/OrangeButton';

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const BudgetingToolScreen = () =>
{

    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;
    let userMoneyRemaining = 200
    const [pressablePressed, setPressablePressed] = useState(1);

    return(
        <View style={styles.container}>
            <View style={styles.topDateEditBarContainer}>
                <Pressable>
                    <View style={styles.topDateDropdownContainer}>
                        <Text style={styles.dateStyle}>
                            { currentBudgetingMonth + ' ' + currentBudgetingYear }
                        </Text>
                        <View style={{width: 10}}/>
                        <ArrowDropdown/>
                    </View>
                </Pressable>
                <Pressable style={styles.pencilEditStyle}>
                    <PencilSVG/>
                </Pressable>
            </View>
            <View style={styles.topBudgetingBarContainer}>
                <Pressable onPress={() => setPressablePressed(1)} 
                            style={[{backgroundColor: pressablePressed === 1? figmaColors.primaryOffBlack : figmaColors.primaryTeal}, styles.buttonStyle]}>
                    <Text style={styles.textStyle}> {appText.BudgetingToolTextScreen.headerTab1} </Text>
                </Pressable>
                <Pressable onPress={() => setPressablePressed(2)} 
                            style={[{backgroundColor: pressablePressed === 2? figmaColors.primaryOffBlack : figmaColors.primaryTeal}, styles.buttonStyle]}>
                    <Text style={styles.textStyle}> {appText.BudgetingToolTextScreen.headerTab2} </Text>
                </Pressable>
                <Pressable onPress={() => setPressablePressed(3)} 
                            style={[{backgroundColor: pressablePressed === 3? figmaColors.primaryOffBlack : figmaColors.primaryTeal}, styles.buttonStyle]}>
                    <Text style={styles.textStyle}> {appText.BudgetingToolTextScreen.headerTab3} </Text>
                </Pressable>
            </View>
            <View style={styles.moneyDaysContainer}>
                <View>
                    <Text style={styles.moneyTextStyle}>
                        {'$' + userMoneyRemaining}
                    </Text>
                    <Text style={styles.subTextStyle}>
                        {appText.BudgetingToolTextScreen.moneyRemaining}
                    </Text>
                </View>
                <View>
                    <Text style={styles.moneyTextStyle}>
                            {'$' + userMoneyRemaining}
                    </Text>
                    <Text style={styles.subTextStyle}>
                        {appText.BudgetingToolTextScreen.moneyRemaining}
                    </Text>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.monthlySpendingGoalStyle}>
                        {appText.BudgetingToolTextScreen.monthlySpendingGoal}
                    </Text>
                </View>
                <Text style={styles.totalSpentStyle}>
                    {appText.BudgetingToolTextScreen.totalSpent}
                </Text>
            </View>
            <OrangeButton
                    text={'Transactions'}
                    navigatepage='Transactions'
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.4,
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
    },
    topDateEditBarContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 25,
        paddingLeft: 25,
        justifyContent: 'space-between'
    },
    topBudgetingBarContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-between',
    },
    topDateDropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    moneyDaysContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    buttonStyle: {
        width: width * 0.3,
        height:height * 0.05,
        borderRadius: 30,
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
        paddingTop: 3
    },
    textStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '700',
        fontSize: 20
    },
    moneyTextStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '800',
        fontSize: 48
    },
    dateStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '700',
        fontSize: 24
    },
    pencilEditStyle: {
        paddingRight: width * 0.05,
    },
    subTextStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '500',
        fontSize: 18
    },
    monthlySpendingGoalStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '700',
        fontSize: 18
    },
    totalSpentStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '400',
        fontSize: 16
    }
});

export default BudgetingToolScreen;