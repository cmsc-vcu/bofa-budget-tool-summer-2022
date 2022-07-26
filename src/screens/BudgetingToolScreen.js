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
import PencilSVG from '../res/svg/pencil.svg';
import ArrowDropdown from '../res/svg/arrowDownwards.svg';
import VerticalSeparator from '../res/svg/budgetingToolSeparatorVertical.svg';
import HorizontalSeparator from '../res/svg/budgetingToolSeparatorHorizontal.svg';
import appText from "../res/appText";

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const BudgetingToolScreen = () =>
{

    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;
    let userMoneyRemaining = 200;
    let remainingDaysInMonth = 15;
    let userMonthlyGoal = 1500;
    let userTotalSpent = 1200;

    const [pressablePressed, setPressablePressed] = useState(1);

    return(
        <View>
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
                    <View style={{marginLeft: width * 0.1}}>
                        <Text style={styles.moneyTextStyle}>
                            {'$' + userMoneyRemaining}
                        </Text>
                        <Text style={styles.subTextStyle}>
                            {appText.BudgetingToolTextScreen.moneyRemaining}
                        </Text>
                    </View>
                    <VerticalSeparator style={styles.verticalSeparatorStyle}/>
                    <View style={{marginTop: height * 0.01}}>
                        <Text style={styles.daysLeftNumberStyle}>
                                { remainingDaysInMonth }
                        </Text>
                        <Text style={styles.daysLeftStyle}>
                            {appText.BudgetingToolTextScreen.daysLeft}
                        </Text>
                    </View>
                </View>
                <HorizontalSeparator style={styles.horizontalSeparatorStyle}/>
                <View style={styles.totalSpentGoalContainer}>
                    <View>
                        <Text style={styles.monthlySpendingGoalStyle}>
                            {appText.BudgetingToolTextScreen.monthlySpendingGoal + '$' + userMonthlyGoal}
                        </Text>
                    </View>
                    <Text style={styles.totalSpentStyle}>
                        {appText.BudgetingToolTextScreen.totalSpent + '$' + userTotalSpent}
                    </Text>
                </View>
            </View>
            <Text style={styles.goalTrackTextStyle}>
                Goal Track
            </Text>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.45,
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
    },
    topDateEditBarContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: height * 0.05,
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
    },
    daysLeftNumberStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '600',
        fontSize: 32
    },
    daysLeftStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite,
        fontWeight: '400',
        fontSize: 14
    },
    verticalSeparatorStyle: {
        marginLeft: width * 0.23,
        marginTop: height * 0.02,
        marginRight: width * 0.05
    },
    horizontalSeparatorStyle: {
        marginTop: height * 0.02,
        marginLeft: width * 0.04,
        marginBottom: height * 0.01
    },
    totalSpentGoalContainer: {
        marginLeft: width * 0.1,
        marginTop: height * 0.01,
        paddingBottom: height * 0.04
    },
    goalTrackTextStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffBlack,
        fontWeight: '800',
        fontSize: 24
    }
});

export default BudgetingToolScreen;