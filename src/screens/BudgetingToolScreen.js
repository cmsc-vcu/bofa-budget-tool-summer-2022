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
import SegmentedProgressGoalBar from "../components/SegmentedProgressGoalBar";
import appText from "../res/appText";
import BudgetingToolIncomeScreen from "./BudgetingToolIncomeScreen";
import BudgetingToolSpendingScreen from "./BudgetingToolSpendingScreen";
import NavBar from "../components/NavBar";
import OrangeButtonTiny from "../components/OrangeButtonTiny";
import BankAccountCard from "../components/BankAccountCard";
import OrangeButton from "../components/OrangeButton";
import BlueFunnelButton from "../components/BlueFunnelButton";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BudgetingToolScreen = () =>
{

    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;
    let userMoneyRemaining = 200;
    let remainingDaysInMonth = 15;
    let userMonthlyGoal = 1500;
    let userTotalSpent = 1200;
    let userSpending = 1000;
    let userSavings = 100;
    let userBills = 100;
    let userNetWorth = 2700;


    const [pressablePressed, setPressablePressed] = useState(1);


    if(pressablePressed === 1)
    {
        return(
            <View>
                <View style={styles.container}>
                    {/* DATE TAB */}
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
                    {/* OVERVIEW SPENDING INCOME TAB */}
                    <View style={styles.topBudgetingBarContainer}>
                        <Pressable onPress={() => setPressablePressed(1)} 
                                    style={[{backgroundColor: pressablePressed === 1? 'rgba(96, 95, 88, 0.25)' : figmaColors.primaryTeal}, styles.buttonStyle]}>
                            <Text style={styles.textStyle}> {appText.BudgetingToolTextScreen.headerTab1} </Text>
                        </Pressable>
                        <Pressable onPress={() => setPressablePressed(2)} 
                                    style={[{backgroundColor: pressablePressed === 2? 'rgba(96, 95, 88, 0.25)' : figmaColors.primaryTeal}, styles.buttonStyle]}>
                            <Text style={styles.textStyle}> {appText.BudgetingToolTextScreen.headerTab2} </Text>
                        </Pressable>
                        <Pressable onPress={() => setPressablePressed(3)} 
                                    style={[{backgroundColor: pressablePressed === 3? 'rgba(96, 95, 88, 0.25)' : figmaColors.primaryTeal}, styles.buttonStyle]}>
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
                <View style={{ marginLeft: width * 0.06, paddingTop: height * 0.01}}>
                    <Text style={styles.boldedTextStyle}>
                        Goal Track
                    </Text>
                    <SegmentedProgressGoalBar userSpending={ userSpending } userSavings = { userSavings } userBills = { userBills }/>
                </View>
                <HorizontalSeparator style={[styles.horizontalSeparatorStyle, { backgroundColor: figmaColors.primaryGray }]}/>
                <View style={{paddingLeft: width * 0.05, paddingRight: width * 0.05}}>
                    <View>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.boldedTextStyle, { paddingBottom: 0, marginRight: 'auto'}]}>Accounts</Text>
                            <OrangeButtonTiny 
                            text={appText.BudgetingToolTextScreen.linkAccount}
                            navigatepage='Transactions'
                            />
                        </View>
                        <Text>{appText.BudgetingToolTextScreen.netWorth + userNetWorth}</Text>
                    </View>
                    <BankAccountCard accountTotalMoney={2500} />
                    <View style={styles.blueFunnelStyle}>
                        <BlueFunnelButton 
                        text={appText.BudgetingToolTextScreen.blueFunnelText} 
                        navigatepage='HomePage'/>
                    </View>
                    
                </View>
                <NavBar
                    topAlign='1105%'
                    leftAlign='4%'
                />
            </View>
            
        );
    }
    else if(pressablePressed === 2)
    {
        return(
            <BudgetingToolSpendingScreen/>
        );
    }
    else if(pressablePressed === 3)
    {
        return(
            <BudgetingToolIncomeScreen/>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.38,
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
    },
    topDateEditBarContainer: {
        flex: 2,
        flexDirection: 'row',
        paddingTop: height * 0.045,
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
        flexDirection: 'row',
        marginBottom: height * 0.03
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
    boldedTextStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffBlack,
        fontWeight: '800',
        fontSize: 24,
        paddingBottom: height * 0.01
    },
    blueFunnelStyle: {
        marginTop: height * 0.02
    }
});

export default BudgetingToolScreen;