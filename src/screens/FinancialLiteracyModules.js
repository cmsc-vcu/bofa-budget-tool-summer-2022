import React, {
    useState,
    useRef,
    useCallback,
} from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Dimensions
} from 'react-native'
import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import OrangeButton from "../components/OrangeButton";
import { useNavigation } from "@react-navigation/native";
import Carousel from 'react-native-snap-carousel';
import { Pagination } from "react-native-snap-carousel";
import NavBar from '../components/NavBar';
import Modules from '../components/Modules';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


// This acts as the cards on the figma onboarding process, where the user
// clicks on the arrow and it will turn to the next card.

const cardItems = [
    {
        ImagePath: require('../res/images/headercard_budgeting.png'),
        Title: 'Budgeting',
        subtitle: 'Plan for every dollar!',
        text: 'Ever wonder How you can pay for your textbooks, meal plan, & housing with the money you earned from your summer job? That’s where budgeting comes In!'
    },
    {
        ImagePath: require('../res/images/headercard_credit.png'),
        Title: 'Credit',
        subtitle: 'Build your reputation!',
        text: 'Credit cards are both incredibly useful and fundamental to building your credit score, but if not used responsibly they could become dangerous.'
    },
    {
        ImagePath: require('../res/images/headercard_bankaccounts.png'),
        Title: 'Bank Accounts',
        subtitle: 'Your Financial Diet!',
        text: 'Choosing where you place your money plays a big role in creating your future. it’s important to understand the rules'
    }
]
function FinancialLiteracyModules(props) {
    const navigation = useNavigation();



    // This is used for the Pagination
    // activeIndex is the current value
    // setActiveIndex is a function that changes activeIndex
    // The useState initializes activeIndex to 0
    const [activeIndex, setActiveIndex] = useState(() => {
        return 0
    });

    // This is used for the carousel
    // carouselItems is the current Item
    // setCarouselItem is the function that changes carouselItems
    // The useState initializes carouselItems to the array of cardItems
    // defined at the top
    const [carouselItems, setCarouselItem] = useState(cardItems);

    const ref = useRef(null);

    // This acts as a template for the cards
    const renderCardItem = useCallback(({ item, index }) => (
        <View style={styles.subcontainer}>
            <Image style={styles.imageSize} source={item.ImagePath} />
            <View>
                <Text style={[styles.title2, { paddingTop: 0, paddingBottom: 0 }]}>{item.Title}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text style={styles.title}>{item.text}</Text>
            </View>
        </View>
    ), []);
    if (activeIndex == 0) {
        return (
            <View style={styles.container}>
                <Image source={require('../res/images/WhiteRectangle.png')} style={{ top: "-5%", position:'absolute'}} />
                <Image source={require('../res/images/TailArrow.png')} style={{ top: "-3.5%", left: '3%' }} navigatepage='Connect'/>
                <Carousel
                    layout="default"
                    ref={ref}
                    data={carouselItems}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    renderItem={renderCardItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    paddingRight={100}
                />
                <View style={styles.pageView}>
                <Pagination
                    dotsLength={cardItems.length}
                    carouselRef={ref}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.activeDotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={1}
                /> 
                </View>
                <Image
                    source={require('../res/images/backArrowBlack.png')}
                    style={{ top: "-12%", left: "18%" }}
                />
                <Image
                    source={require('../res/images/frontArrowBlack.png')}
                    style={{ top: "-15%", left: "73%" }}
                />
                <Text style = {styles.text}>Chapters</Text>
            <View style = {styles.progress}>
            <Modules
                text={'What is Budgeting'}
                text2 = {'40 min'}
            />
            <Modules
                text={'Learn How to Start'}
                text2 = {'40 min'}
            />
            <Modules
                text={'Why is it important'}
                text2 = {'40 min'}
            />
            </View>
                
                <NavBar
                    topAlign='1105%'
                    leftAlign='4%'
                >
    
                </NavBar>
    
            </View>
    
        )
    }

    if (activeIndex == 1) {
        return (
            <View style={styles.container}>
                <Image source={require('../res/images/WhiteRectangle.png')} style={{ top: "-5%", position:'absolute'}} />
                <Image source={require('../res/images/TailArrow.png')} style={{ top: "-3.5%", left: '3%' }} navigatepage='Connect'/>
                <Carousel
                    layout="default"
                    ref={ref}
                    data={carouselItems}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    renderItem={renderCardItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    paddingRight={100}
                />
                <View style={styles.pageView}>
                <Pagination
                    dotsLength={cardItems.length}
                    carouselRef={ref}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.activeDotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={1}
                /> 
                </View>
                <Image
                    source={require('../res/images/backArrowBlack.png')}
                    style={{ top: "-12%", left: "18%" }}
                />
                <Image
                    source={require('../res/images/frontArrowBlack.png')}
                    style={{ top: "-15%", left: "73%" }}
                />
                <Text style = {styles.text}>Chapters</Text>
            <View style = {styles.progress}>
            <Modules
                text={'Choose a credit card'}
                text2 = {'40 min'}
            />
            <Modules
                text={'What is credit score'}
                text2 = {'40 min'}
            />
            <Modules
                text={'What is credit report'}
                text2 = {'40 min'}
            />
            </View>
                
                <NavBar
                    topAlign='1105%'
                    leftAlign='4%'
                >
    
                </NavBar>
    
            </View>
    
        )
    }

    if (activeIndex == 2) {
        return (
            <View style={styles.container}>
                <Image source={require('../res/images/WhiteRectangle.png')} style={{ top: "-5%", position:'absolute'}} />
                <Image source={require('../res/images/TailArrow.png')} style={{ top: "-3.5%", left: '3%' }} navigatepage='Connect'/>
                <Carousel
                    layout="default"
                    ref={ref}
                    data={carouselItems}
                    sliderWidth={width * 1}
                    itemWidth={width * 1}
                    renderItem={renderCardItem}
                    onSnapToItem={(index) => setActiveIndex(index)}
                    paddingRight={100}
                />
                <View style={styles.pageView}>
                <Pagination
                    dotsLength={cardItems.length}
                    carouselRef={ref}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.activeDotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={1}
                /> 
                </View>
                <Image
                    source={require('../res/images/backArrowBlack.png')}
                    style={{ top: "-12%", left: "18%" }}
                />
                <Image
                    source={require('../res/images/frontArrowBlack.png')}
                    style={{ top: "-15%", left: "73%" }}
                />
                <Text style = {styles.text}>Chapters</Text>
            <View style = {styles.progress}>
            <Modules
                text={'Types of Accounts'}
                text2 = {'40 min'}
            />
            <Modules
                text={'Apply for an account'}
                text2 = {'40 min'}
            />
            <Modules
                text={'Choosing the bank'}
                text2 = {'40 min'}
            />
            </View>
                
                <NavBar
                    topAlign='1105%'
                    leftAlign='4%'
                >
    
                </NavBar>
    
            </View>
    
        )
    }
}
const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
        backgroundColor: figmaColors.primaryOffWhite,
        paddingTop: 40,
        // paddingBottom: 0,
    },

    progress: {
        left: 12,
        top: "-28%"
    },

    // Be care of adding left and bottom attributes when pulling from figma
    // This acts as the card container
    subcontainer: {
        alignItems: 'center',
    },
    // This refers to the main title of the cards
    title: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 15,
        color: "#605F58",
        paddingLeft: "5%",
        paddingRight: "5%"
    },

    text: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 20,
        color: "#605F58",
        fontWeight: '800',
        paddingLeft: "5%",
        top: "-13%"
    },

    title2: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: "#2E2E2E",
        paddingLeft: "5%",
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'bold',
        fontSize: 18,
        fontWeight: '800',
        color: "#D9D9D9",
        paddingLeft: "5%",
    },
    activeDotStyle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: '#605F58',
    },
    inactiveDotStyle: {
        borderColor: '#2E2E2E',
        borderWidth: 1,
        backgroundColor: 'transparent',
    },
    circularBackgroundStyle: {
        position: 'absolute',
        top: width * 0.4
    },
    imageSize: {
        width: width * 1.01,
        height: height * 0.23,
        resizeMode: 'contain'
    },
    pageView: {
        left: '-2%',
        top: '-5%',
    },
});

export default FinancialLiteracyModules;