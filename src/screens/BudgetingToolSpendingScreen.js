import {
    Text,
    StyleSheet,
    View,
    Image,
    Button,
    Dimensions,
    ImageBackground,
    Pressable,
    ScrollView
} from 'react-native';
import React , { useState } from 'react';

import OrangeButton from "../components/OrangeButton";
import CheckBox from '@react-native-community/checkbox'
import fonts from '../res/fonts';
import figmaColors from '../res/figmaColors';
import Pie from 'react-native-pie'
import PencilSVG from '../res/svg/pencil.svg';
import ArrowDropdown from '../res/svg/arrowDownwards.svg';
import VerticalSeparator from '../res/svg/budgetingToolSeparatorVertical.svg';
import HorizontalSeparator from '../res/svg/budgetingToolSeparatorHorizontal.svg';
import appText from "../res/appText";
import BudgetingToolIncomeScreen from "./BudgetingToolIncomeScreen";
import BudgetingToolScreen from "./BudgetingToolScreen";
import NavBar from "../components/NavBar";
import BulletPoints from "../components/BulletPoints";

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const pieChartColors = [
    {percentage: 6.25, color:'#F5BF44'},
    {percentage: 6.25, color:'#EE9676'},
    {percentage: 6.25, color:'#EF8733'},
    {percentage: 6.25, color:'#F29051'},
    {percentage: 6.25, color:'#9AE492'},
    {percentage: 6.25, color:'#66C588'},
    {percentage: 6.25, color:'#58BCC7'},
    {percentage: 6.25, color:'#5EBCE8'},
    {percentage: 6.25, color:'#367CEA'},
    {percentage: 6.25, color:'#2C5DBD'},
    {percentage: 6.25, color:'#8AAFD0'},
    {percentage: 6.25, color:'#4A7CB3'},
    {percentage: 6.25, color:'#1D2F47'},
    {percentage: 6.25, color:'#5968D1'},
    {percentage: 6.25, color:'#D94E80'},
    {percentage: 6.25, color:'#B43B5D'},  
]

const BudgetingToolSpendingScreen = () =>
{
    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;
    let spentAmount = 1200;
    let goalAmount = 1300;
    let userMoneyRemaining = 200;
    let remainingDaysInMonth = 15;
    let userMonthlyGoal = 1500;
    let userTotalSpent = 1200;
    let userSpending = 1000;
    let userSavings = 100;
    let userBills = 100;

    const [pressablePressed, setPressablePressed] = useState(2);

    if(pressablePressed === 2) {
        return(
            <View style={styles.container}>
                <View style={styles.topheader}>
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
                    <View style={{alignItems: 'center', justifyContent: 'center', elevation: 3 }}>
                        <Pie
                            radius={80}
                            innerRadius={45}
                            sections={[
                                {percentage: 6.25, color:'#F5BF44'},
                                {percentage: 6.25, color:'#EE9676'},
                                {percentage: 6.25, color:'#EF8733'},
                                {percentage: 6.25, color:'#F29051'},
                                {percentage: 6.25, color:'#9AE492'},
                                {percentage: 6.25, color:'#66C588'},
                                {percentage: 6.25, color:'#58BCC7'},
                                {percentage: 6.25, color:'#5EBCE8'},
                                {percentage: 6.25, color:'#367CEA'},
                                {percentage: 6.25, color:'#2C5DBD'},
                                {percentage: 6.25, color:'#8AAFD0'},
                                {percentage: 6.25, color:'#4A7CB3'},
                                {percentage: 6.25, color:'#1D2F47'},
                                {percentage: 6.25, color:'#5968D1'},
                                {percentage: 6.25, color:'#D94E80'},
                                {percentage: 6.25, color:'#B43B5D'},
                            ]}
                            backgroundColor='#FFFEF6'
                        />
                        <View style={styles.gauge}>
                            <Text style={styles.gaugeText}>
                                {'Total' + '\n' + '$' + spentAmount}
                            </Text>
                        </View>
                    </View>
                    <View style={[{marginTop: '2%'}, styles.label]}>
                        <Text style={[{color: figmaColors.primaryOffWhite}, styles.paragraph3]}>Spending / Goal</Text>
                        <Text style={[{color: figmaColors.primaryOffWhite}, styles.heading4]}>{'$' + spentAmount + ' / ' + '$' + goalAmount}</Text>   
                    </View>
                       
                </View>
                <View style={styles.transactionsSection}>
                    <Text style={[{color: figmaColors.primaryOffBlack, marginBottom: '3%'}, styles.heading4]}>Category</Text>
                    <View
                        style={{
                            borderBottomColor: 'rgba(96,95,88,0.25)',
                            borderBottomWidth: 2,
                            marginRight: '6%'
                        }}
                    />
                    <Text style={[{color: figmaColors.primaryOffBlack, marginBottom: '3%', marginTop: '3%'}, styles.heading4]}>Transactions</Text>
                </View>
                <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '3%', marginTop: '3%'}]}>
                    <Text style={styles.transactionsLabels}>Cat.</Text>
                    <Text style={styles.transactionsLabels}>Date</Text>
                    <Text style={styles.transactionsLabels}>Name</Text>
                    <Text style={styles.transactionsLabels}>Amount</Text>
                </View>
                <View style={[{height: '20%'}]}>
                    <ScrollView >
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                        <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '2%'}]}>
                            <BulletPoints passedColor={ '#4CB998' }/>
                            <Text style={styles.transactionsText}>7/20</Text>
                            <Text style={styles.transactionsText}>Venmo</Text>
                            <Text style={styles.transactionsText}>$50</Text>
                            <Text style={styles.transactionsText}>Edit</Text>
                        </View>
                    </ScrollView>    
                </View>
            </View>
        );
    }
    else if(pressablePressed === 1)
    {
        return(
            <BudgetingToolScreen/>
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
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
        backgroundColor: figmaColors.primaryOffWhite,
    },
    topheader:{
        backgroundColor: figmaColors.primaryTeal,
        width: '100%',
        height: '50%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 2,
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        color: '#605F58',
        fontSize: 18,
        fontWeight: '800',
        fontStyle: 'normal',
        fontFamily: fonts.mainFont,
        textAlign: 'center'
    },
    heading4: {
        backgroundColor: 'transparent',
        fontSize: 24,
        fontWeight: '800',
        fontStyle: 'normal',
        fontFamily: fonts.mainFont,
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
        fontSize: 24,
        paddingBottom: height * 0.01
    },
    paragraph3:{
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '400'
    },
    label:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '5%'
    },
    transactionsSection:{
        marginLeft: '6%',
        marginTop: '3%'
    },
    transactionsText:{
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '400',
        textAlign: 'center',
        marginRight: '5%',
        marginLeft: '5%'
    },
    transactionsLabels:{
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: '800',
        textAlign: 'center',
        marginRight: '5%',
        backgroundColor:'rgba(96, 95, 88,0.05)',
        borderRadius: 20,
        color: figmaColors.primaryOffBlack,
    }
});

export default BudgetingToolSpendingScreen;

