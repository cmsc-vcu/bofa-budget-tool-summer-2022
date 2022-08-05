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
import NavBar from '../components/NavBar';
import { Pagination } from "react-native-snap-carousel";
import ResizableButton from '../components/ResizableButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const cardItems = [
    {
        ImagePath: require('../res/images/Variant3.png'),
        Title: 'What is Budgeting',
        ImagePath2: require('../res/images/WhatIsBudgeting.png'),

    },
    {
        ImagePath: require('../res/images/Variant4.png'),
        Title: 'Budgeting is _______',
        ImagePath2: require('../res/images/component_10.png'),
    },
]
function BudgetingChapterOne(props) {
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
                <Text style={[styles.title2, { top: "-220%", left: "-8%" }]}>{item.Title}</Text>
            </View>
            <Image style={styles.imageSize2} source={item.ImagePath2} />
        </View>
    ), []);

    if (activeIndex == 0) {
        return (
            <View style={styles.container}>
                <Image source={require('../res/images/WhiteRectangle.png')} style={{ top: "-5%", position: 'absolute', width: "100%" }} />
                <Image source={require('../res/images/TailArrow.png')} style={{ top: "2%", left: '3%' }} navigatepage='Connect' />
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

                <Image source={require('../res/images/BarOne.png')} style={{ top: "-15%", left: '5%', width: "92%" }} />
                <View style={{ bottom: '103%' }}>
                    <NavBar>
                    </NavBar>
                </View>
            </View>
        )
    }

    if (activeIndex == 1) {
        return (
            <View style={styles.container}>
                <Image source={require('../res/images/WhiteRectangle.png')} style={{ top: "-5%", position: 'absolute', width: "100%" }} />
                <Image source={require('../res/images/TailArrow.png')} style={{ top: "2%", left: '3%' }} navigatepage='Connect' />
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
                <Image source={require('../res/images/pinkImageButton.png')} style={{ top: "-15%", left: '35%'}} />
                <Image source={require('../res/images/BarTwo.png')} style={{ top: "-15%", left: '5%', width: "92%" }} />
                <View style={{ bottom: '103%' }}>
                    <NavBar>
                    </NavBar>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
        backgroundColor: "#EF5F82",
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
        fontSize: 35,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        //paddingLeft: "5%",
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
        width: width * 0.25,
        height: height * 0.23,
        left: "-35%",
        top: "-5%",
        resizeMode: 'contain'
    },

    imageSize2: {
        width: width * 0.98,
        height: height * 0.57,
        top: "-15%",
        resizeMode: 'contain'
    },
    pageView: {
        left: '-2%',
        top: '90%',
    },
});

export default BudgetingChapterOne;