import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable,
    Image
} from 'react-native';
import React , { useState } from 'react';

import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import PencilSVG from '../res/svg/pencil.svg';
import ArrowDropdown from '../res/svg/arrowDownwards.svg';
import VerticalSeparator from '../res/svg/budgetingToolSeparatorVertical.svg';
import HorizontalSeparator from '../res/svg/budgetingToolSeparatorHorizontal.svg';
import SegmentedProgressGoalBar from "../components/SegmentedProgressGoalBar";
import appText from "../res/appText";
import BudgetingToolScreen from "./BudgetingToolScreen";



const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const BudgetingToolIncomeScreen = () =>
{

    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;


    const [pressablePressed, setPressablePressed] = useState(3);
    if(pressablePressed === 3)
    {
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
                </View>
                <Image source ={require('../res/images/incomeRectangle.png')}
                style = {styles.goalSuggestionBox}/>
                <Text style={styles.goalSuggestionLabel}>Goal Suggestion</Text>
                <Image source ={require('../res/images/goalLineVector.png')}
                style = {styles.goalLine}/>
            </View>
            
        );
    }
    else if(pressablePressed === 1 || 2)
    {
        return(
            <BudgetingToolScreen/>
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
        flex: 1,
        flexDirection: 'row',
        paddingTop: height * 0.05,
        paddingLeft: 25,
        justifyContent: 'space-between'
    },
    topBudgetingBarContainer: {
        flex: 4,
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
    goalSuggestionBox: {
        position: 'absolute',
        width: 373,
        height: 150,
        left: 15,
        top: 385,
    },
    goalSuggestionLabel: {
        position: 'absolute',
        width: 373,
        height: 218,
        left: 25,
        top: 355,
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 24,
        fontWeight: '800',
        color: "#2E2E2E"
    },
    goalLine: {
        position: 'absolute',
        width: 328,
        height: 0,
        left: 44,
        top: 150

    }
});

export default BudgetingToolIncomeScreen;

