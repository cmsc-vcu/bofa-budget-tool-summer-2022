import {
    Text,
    StyleSheet,
    View,
    Image,
    Button,
    Dimensions,
    ImageBackground,
    Pressable,
    ScrollView,
    AppRegistry,
    processColor,
} from 'react-native';
import React , { useState } from 'react';

import OrangeButton from "../components/OrangeButton";
import CheckBox from '@react-native-community/checkbox'
import fonts from '../res/fonts';
import figmaColors from '../res/figmaColors';
import Pie from 'react-native-pie'
import PencilSVG from '../res/svg/pencil.svg';
import AllSVG from '../res/svg/all.svg';
import AutoSVG from '../res/svg/autoCat.svg';
import BillsSVG from '../res/svg/billsCat.svg';
import CashSVG from '../res/svg/cashCat.svg';
import DiningSVG from '../res/svg/diningCat.svg';
import EduSVG from '../res/svg/eduCat.svg';
import EntertainSVG from '../res/svg/entertainCat.svg';
import FamSVG from '../res/svg/famCat.svg';
import GroceriesSVG from '../res/svg/groceriesCat.svg';
import HealthSVG from '../res/svg/healthCat.svg';
import HomeSVG from '../res/svg/homeCat.svg';
import LoanSVG from '../res/svg/loanCat.svg';
import PetSVG from '../res/svg/petCat.svg';
import ShopSVG from '../res/svg/shopCat.svg';
import TechSVG from '../res/svg/techCat.svg';
import TaxSVG from '../res/svg/taxCat.svg';
import TravelSVG from '../res/svg/travelCat.svg';
import ArrowDropdown from '../res/svg/arrowDownwards.svg';
import VerticalSeparator from '../res/svg/budgetingToolSeparatorVertical.svg';
import HorizontalSeparator from '../res/svg/budgetingToolSeparatorHorizontal.svg';
import appText from "../res/appText";
import BudgetingToolIncomeScreen from "./BudgetingToolIncomeScreen";
import BudgetingToolScreen from "./BudgetingToolScreen";
import NavBar from "../components/NavBar";
import BulletPoints from "../components/BulletPoints";
import {PieChart} from 'react-native-gifted-charts';

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const data = [      
    {value: 6.25, color:'#F5BF44'},
    {value: 6.25, color:'#EE9676'},
    {value: 6.25, color:'#EF8733'},
    {value: 6.25, color:'#F29051'},
    {value: 6.25, color:'#9AE492'},
    {value: 6.25, color:'#66C588'},
    {value: 6.25, color:'#58BCC7'},
    {value: 6.25, color:'#5EBCE8'},
    {value: 6.25, color:'#367CEA'},
    {value: 6.25, color:'#2C5DBD'},
    {value: 6.25, color:'#8AAFD0'},
    {value: 6.25, color:'#4A7CB3'},
    {value: 6.25, color:'#1D2F47'},
    {value: 6.25, color:'#5968D1'},
    {value: 6.25, color:'#D94E80'},
    {value: 6.25, color:'#B43B5D'},
]


const BudgetingToolSpendingScreen = () =>
{
    let currentBudgetingMonth = 'July';
    let currentBudgetingYear = 2022;
    let spentAmount = 1200;
    let goalAmount = 1300;

    const [pressablePressed, setPressablePressed] = useState(2);

    if(pressablePressed === 2) {
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
                        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '3%'}}>
                            <PieChart
                                donut
                                focusOnPress={ true }
                                radius={ width * 0.2 }
                                innerCircleColor={ figmaColors.primaryOffWhite }
                                innerRadius={width * 0.1}
                                data={data}
                                centerLabelComponent={() => {
                                return <Text style={{fontSize: 18, fontFamily: fonts.mainFont, fontWeight:'700', textAlign: 'center'}}>Total $1,200</Text>;
                                }}
                            />
                        </View>

                    <View style={[{marginTop: '0%'}, styles.label]}>
                        <Text style={[{color: figmaColors.primaryOffWhite}, styles.paragraph3]}>Spending / Goal</Text>
                        <Text style={[{color: figmaColors.primaryOffWhite}, styles.heading4]}>{'$' + spentAmount + ' / ' + '$' + goalAmount}</Text>   
                    </View>
                </View>


                <View style={styles.transactionsSection}>
                    <Text style={[{color: figmaColors.primaryOffBlack, marginBottom: '0%'}, styles.heading4]}>Category</Text>
                    <ScrollView horizontal = {true}>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '1%'}}>
                            <View style={{elevation: 5,}}>
                               <AllSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>All</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
                            <View style={{elevation: 5, }}>
                               <AutoSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Auto {"\&"} Transport</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <BillsSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Bills</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <CashSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Cash {"\&"} Check</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <DiningSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Dining</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <EduSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Education</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <EntertainSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Entertainment</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <FamSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Family Care</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <GroceriesSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Groceries</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <HealthSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Health {"\&"} Wellness</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <HomeSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Home</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <LoanSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Loan Payment</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <PetSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Pets</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <ShopSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Shopping</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <TechSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Software {"\&"} Tech</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <TaxSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Taxes</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <View style={{elevation: 5, }}>
                               <TravelSVG/>  
                            </View>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '800', color: figmaColors.primaryOffBlack}}>Travel</Text>
                            <Text style={{fontFamily: fonts.mainFont, fontSize: 15, fontWeight: '400', color: figmaColors.primaryGray}}>$180 | $200</Text>
                        </View>
                        
                    </ScrollView>

                    <View
                        style={{
                            borderBottomColor: 'rgba(96,95,88,0.25)',
                            borderBottomWidth: 2,
                            marginRight: '6%'
                        }}
                    />
                    <Text style={[{color: figmaColors.primaryOffBlack, marginBottom: '1%', marginTop: '1%'}, styles.heading4]}>Transactions</Text>
                </View>
                
                <View style={[{marginLeft: '10%', flexDirection: 'row', marginBottom: '3%', marginTop: '3%'}]}>
                    <Text style={styles.transactionsLabels}>Cat.</Text>
                    <Text style={styles.transactionsLabels}>Date</Text>
                    <Text style={styles.transactionsLabels}>Name</Text>
                    <Text style={styles.transactionsLabels}>Amount</Text>
                </View>


                <View style={[{height: '20%'}]}>
                    <ScrollView nestedScrollEnabled = {true} showsVerticalScrollIndicator={false}>
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
        width: width,
        height: height * 0.47,
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    topheader:{
        backgroundColor: figmaColors.primaryTeal,
        width: '100%',
        height: '50%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 2,
    },
    heading4: {
        backgroundColor: 'transparent',
        fontSize: 24,
        fontWeight: '800',
        fontStyle: 'normal',
        fontFamily: fonts.mainFont,
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
        marginLeft: '0.9%',
        backgroundColor:'rgba(96, 95, 88,0.05)',
        borderRadius: 20,
        color: figmaColors.primaryOffBlack,
    }, 
});

export default BudgetingToolSpendingScreen;

