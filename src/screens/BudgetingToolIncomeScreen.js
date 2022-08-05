import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    Image,
    ScrollView
} from 'react-native';
import React , { useState } from 'react';

import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import PencilSVG from '../res/svg/pencil.svg';
import ArrowDropdown from '../res/svg/arrowDownwards.svg';
import appText from "../res/appText";
import BudgetingToolScreen from "./BudgetingToolScreen";
import BudgetingToolSpendingScreen from './BudgetingToolSpendingScreen';
import OrangeButtonMedium from '../components/OrangeButtonMedium';
import BulletPoints from "../components/BulletPoints";
import NavBar from '../components/NavBar';
import { PieChart } from 'react-native-gifted-charts';

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const BudgetingToolIncomeScreen = () =>
{
    const renderLegendComponent = () => {
        return (
            <View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: height * 0.01}}>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <BulletPoints passedColor='#F96666'/>
                        <Text style={{paddingLeft: width * 0.01, paddingRight: width * 0.1}}>{ '15% Allowance' }</Text>
                        <BulletPoints passedColor='#1F456E'/>
                        <Text style={{paddingLeft: width * 0.01}}>{ '75% Scholarships' }</Text>
                    </View>
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <BulletPoints passedColor={figmaColors.primaryGray}/>
                    <Text style={{paddingLeft: width * 0.01, paddingRight: width * 0.1}}>{ '10% Other' }</Text>
                </View>
            </View>
        );
    }

    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;
    let spentAmount = 1200;
    let userSpending = 1000;
    let userIncome = 18000;
    let userMonthlyBills = 1000;

    const userIncomeData = [
        {value: 15, color: '#F96666'}, 
        {value: 75, color: '#1F456E'},
        {value: 10, color: figmaColors.primaryGray},
    ];

    const [pressablePressed, setPressablePressed] = useState(3);
    if(pressablePressed === 3)
    {
        return(
            <View> 
                <ScrollView showsVerticalScrollIndicator={false}>      
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

                        {/* PIE CHART */}
                        <View style={{alignItems: 'center', justifyContent: 'center'}}>
                            <PieChart
                                donut={ true }
                                showText
                                focusOnPress={ true }
                                textColor="black"
                                radius={ width * 0.2 }
                                innerCircleColor={ figmaColors.primaryOffWhite }
                                textBackgroundRadius={width * 0.04}
                                data={userIncomeData}
                                centerLabelComponent={() => 
                                {
                                    return (
                                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                            <Text style={styles.pieChartCenterText}>
                                                {'Total\n$' + spentAmount}
                                            </Text>
                                        </View>
                                    );
                                }}
                            />
                        </View>
                        {renderLegendComponent()}
                    </View>


                    <View style={styles.goalSuggestionContainer}>
                        <View style={{marginBottom: height * 0.01}}>
                            <Text style={styles.goalSuggestionTitleTextStyle}>Goal Suggestion</Text>
                        </View>
                        <View style={styles.goalSuggestionBox}>
                                <View style={styles.goalSuggestionHeaderContainer}>
                                    <Text style={styles.goalSuggestionUserSpendingTextStyle}>{'$' + userSpending }</Text>
                                    <View style={{marginLeft: width * 0.02}}>
                                        <Text>{'per month\nfor spending'}</Text>
                                    </View>
                                </View>
                                <View style={styles.horizontalSeparatorStyle}></View>
                                <View style={{marginLeft: width * 0.05, marginRight: width * 0.05}}>
                                    <View style={styles.goalSuggestionRowStyleContainer}>
                                        <Text style={styles.goalSuggestionSubheaders}>Total Income</Text>
                                        <Text style={styles.goalSuggestionNumbersStyle}>{ '$' + userIncome }</Text>
                                    </View>
                                    <View style={styles.goalSuggestionRowStyleContainer}>
                                        <Text style={styles.goalSuggestionSubheaders}>Monthly Bills</Text>
                                        <Text style={styles.goalSuggestionNumbersStyle}>{ '$' + userMonthlyBills }</Text>
                                    </View> 
                                </View>
                                <View style={{marginTop: height * 0.015}}>
                                    <OrangeButtonMedium text='EDIT MY GOAL'/>
                                </View>
                        </View>
                    </View>



                    <View style={{marginTop: height * 0.02}}>
                        <Text style={[styles.transactionsLabel, {marginLeft: width * 0.06}]}>Transactions</Text>
                        <View style={[{marginLeft: width * 0.1, flexDirection: 'row', marginBottom: '3%'}]}>
                            <Text style={styles.transactionsLabels}>Cat.</Text>
                            <Text style={styles.transactionsLabels}>Date</Text>
                            <Text style={styles.transactionsLabels}>Name</Text>
                            <Text style={styles.transactionsLabels}>Amount</Text>
                        </View>
                    </View>
                    <View style={[{height: '20%'}]}>
                        <ScrollView nestedScrollEnabled = {true} showsVerticalScrollIndicator={false}>
                            <View style={[{marginLeft: width * 0.1, flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$100</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                            <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$50</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                            <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$50</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                            <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$50</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                            <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$50</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                            <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$50</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                            <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                                <BulletPoints passedColor={ '#1F456E' }/>
                                <Text style={styles.transactionsText}>7/20</Text>
                                <Text style={styles.transactionsText}>Venmo</Text>
                                <Text style={styles.transactionsText}>$50</Text>
                                <Text style={styles.transactionsText}>Edit</Text>
                            </View>
                        </ScrollView>    
                    </View>
                </ScrollView>  
                <NavBar/>
            </View>
        );
    }
    else if(pressablePressed === 1)
    {
        return(
            <BudgetingToolScreen/>
        );
    }
    else if (pressablePressed === 2)
    {
        return(
            <BudgetingToolSpendingScreen/>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.45,
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
    },
    topDateEditBarContainer: {
        flexDirection: 'row',
        paddingTop: height * 0.045,
        paddingLeft: 25,
        justifyContent: 'space-between'
    },
    topBudgetingBarContainer: {
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
        paddingTop: height * 0.005
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
    horizontalSeparatorStyle: {
        marginTop: height * 0.01,
        marginLeft: width * 0.045,
        marginBottom: height * 0.01,
        width: width * 0.8,
        height: height * 0.001,
        backgroundColor: figmaColors.primaryOffBlack,
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
        fontSize: 24,
        paddingBottom: height * 0.01
    },
    goalSuggestionContainer: {
        marginTop: height * 0.01,
        marginLeft: width * 0.05,
    },
    goalSuggestionBox: {
        width: width * 0.9,
        height: height * 0.22,
        backgroundColor: figmaColors.primaryOffWhite,
        borderRadius: 15, 
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6
    },
    goalSuggestionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.01,
    },
    goalSuggestionRowStyleContainer: {
        flexDirection: 'row'
    },
    goalSuggestionTitleTextStyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: '800',
        color: figmaColors.primaryOffBlack
    },
    goalSuggestionUserSpendingTextStyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 32,
        color: figmaColors.primaryOffBlack
    },
    goalSuggestionSubheaders: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        color: figmaColors.primaryOffBlack,
        marginRight: 'auto',
    },
    goalSuggestionNumbersStyle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        color: figmaColors.primaryGray
    },
    transactionsLabel: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        color: figmaColors.primaryOffBlack,
    },
    categoriesTab: {
        position: 'absolute',
        width: 141,
        height: 22,
        left: 50,
        top: 570,
    },
    orangeButtoncontainer: {
        position: 'absolute',
        width: 218,
        height: 37,
        left: 99,
        top: 450,
      },
      transactionsLabels:{
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '800',
        marginRight: width * 0.05,
        backgroundColor: 'rgba(96, 95, 88,0.05)',
        borderRadius: 20,
        color: figmaColors.primaryOffBlack,
    },
    transactionsText:{
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginLeft: width * 0.06,
    },
    pieChartCenterText: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 16,
        color: figmaColors.primaryGray
    }
});

export default BudgetingToolIncomeScreen;

