import React, {
    useState,
    useRef,
    useCallback
} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import NavBar from '../components/NavBar';
import fonts from '../res/fonts';
import TopBar from '../components/TopHome';
import figmaColors from '../res/figmaColors';
import HomepageButtons from '../components/HomepageButtons';
import Carousel from 'react-native-snap-carousel';
import { Pagination } from "react-native-snap-carousel";
import OrangeButton from "../components/OrangeButton";
import GrayButton from "../components/GrayButton";
import ResizableButton from "../components/ResizableButton";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


// This acts as the cards on the figma onboarding process, where the user
// clicks on the arrow and it will turn to the next card.

const cardItems = [
    {
        ImagePath: require('../res/images/homeSlideOne.png'),
        Title: 'Your budget is your roadmap.',
        subtitle: 'The most efficient way to reach your goals.',
        button: 'VIEW MY BUDGET'
    },
    {
        ImagePath: require('../res/images/homeSlideTwo.png'),
        Title: 'Daily financial tip:',
        subtitle: 'Planning when to fly can save you hundreds',
        button: 'READ MORE'
    },
    {
        ImagePath: require('../res/images/homeSlideThree.png'),
        Title: 'One step at a time.',
        subtitle: 'Your journey to financial independence starts here.',
        button: 'VIEW MY BUDGET'
    }
]

const Connect = (props) => {
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
    const renderCardItem = useCallback(({item}) => (
        <View style={styles.subcontainer}>
            <Text style={styles.title}>{item.Title}</Text>
            <Image style={styles.imageSize} source={ item.ImagePath }/>
            <View style={styles.textContainer}>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.buttonView}>
                <ResizableButton text={item.button}/>
            </View>
            
            
        </View>
    ), []);


    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
                <TopBar
                header={'Home'}
                style={styles.bar}/>

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
            </View>
        

            <View style={styles.test}>
            <HomepageButtons 
            header='Budget'
            subheader='Manage your spendings and savings.'
            themeColor='#7AC032'
            navigatePage='BudgetingToolScreen'/>
            <HomepageButtons
            header='What if'
            subheader='Create simulations for your future.'
            themeColor='#5B93D6'
            navigatePage='HomePage'
            />
            <HomepageButtons
            header='Learn'
            subheader='Expand your financial knowledge.'
            themeColor='#E08734'
            navigatePage='FinancialLiteracyCategories'/>
            </View>
            
            

            <NavBar
            topAlign= '1105%'
            leftAlign= '4%'
            >
                
            </NavBar>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: figmaColors.primaryOffWhite
    },

    test: {
        left: '3.5%',
        top: '-3%',
        
    },

    bar: {
        position: 'absolute'
    },

    carousel: {
        height: '53.7%',
        width: '100%',
        backgroundColor: '#4CB998',

    },

    imageSize: {
        width: width * 0.8,
        height: height * 0.35,
        resizeMode: 'contain',
        left: '30%',
        top: '-5%'
    },

    title: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        top: '1%',
        left: '7%'
    },

    textContainer: {
        width: '50%',
        top: '-58%',
        left: '7%'
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 32,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        lineHeight: 37.5,
    },
    activeDotStyle: {
        width:10,
        height:10,
        borderRadius: 10,
        marginHorizontal: -3,
        backgroundColor: figmaColors.primaryOffWhite,
    },
    inactiveDotStyle: {
        borderColor: figmaColors.primaryOffWhite,
        borderWidth: 1,
        backgroundColor: 'transparent'
    },

    buttonView: {
        position: 'absolute',
        top: '45%',
        left: '7%',
    },

    pageView: {
        left: '-37%',

        
    },

    gap: {
        top: '10%'
    }


})

export default Connect;