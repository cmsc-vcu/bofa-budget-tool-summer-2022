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
import CircularBackground from '../res/svg/cardIntroCircularBackground.svg'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


// This acts as the cards on the figma onboarding process, where the user
// clicks on the arrow and it will turn to the next card.

const cardItems = [
    {
        ImagePath: require('../res/images/cardIntroFirstImage.png'),
        Title: 'Budgeting\nfor your\nstudent\nsuccess.',
        subtitle: 'We know financial literacy is\nnot always the top of your\npriority when you have classes\nand a life to juggle.'
    },
    {
        ImagePath: require('../res/images/cardIntroSecondImage.png'),
        Title: 'Conquer\nyour\nfinancial\ngoals.',
        subtitle: 'So we\'re here to help you\nnavigate your finance to achieve\nyour goals--whether it\'s to buy a\nnew PC or to pay off your debt.'
    },
    {
        ImagePath: require('../res/images/cardIntroThirdImage.png'),
        Title: 'Get started\non your\njourney to \nfinancial\nfreedom.',
        subtitle: 'This is your first step to\naffording the lifestyle you want.'
    }
]

function CardIntro(props) {
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
    if (activeIndex == 2) {

        const renderCardItem = useCallback(({ item, index }) => (
            <View style={styles.subcontainer}>
                <Image style={styles.imageSize} source={item.ImagePath} />
                <View>
                    <Text style={[styles.title2, { paddingTop: 0, paddingBottom: 20 }]}>{item.Title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            </View>
        ), []);

        return (
            <View style={styles.container}>
                <CircularBackground style={styles.circularBackgroundStyle} />
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

                <OrangeButton
                    text={'I\'m ready!'}
                    navigatepage='LastOnboarding'
                />
            </View>
        )
    }
    if (activeIndex == 0) {
        const renderCardItem = useCallback(({ item, index }) => (
            <View style={styles.subcontainer}>
                <Image style={styles.imageSize} source={item.ImagePath} />
                <View>
                    <Text style={[styles.title, { paddingTop: 0, paddingBottom: 20 }]}>{item.Title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            </View>
        ), []);
        return (
            <View style={styles.container}>
                <CircularBackground style={styles.circularBackgroundStyle} />
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
                <Pagination
                    dotsLength={cardItems.length}
                    carouselRef={ref}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.activeDotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={1}
                />
                <Image
                    source={require('../res/images/frontArrow.png')}
                    style={{ top: "-7.5%", left: "75%" }}
                    navigatepage="card"
                />
            </View>
        )
    }

    else {
        const renderCardItem = useCallback(({ item, index }) => (
            <View style={styles.subcontainer}>
                <Image style={styles.imageSize} source={item.ImagePath} />
                <View>
                    <Text style={[styles.title, { paddingTop: 0, paddingBottom: 20 }]}>{item.Title}</Text>
                    <Text style={styles.subtitle}>{item.subtitle}</Text>
                </View>
            </View>
        ), []);
        return (
            <View style={styles.container}>
                <CircularBackground style={styles.circularBackgroundStyle} />
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
                <Pagination
                    dotsLength={cardItems.length}
                    carouselRef={ref}
                    activeDotIndex={activeIndex}
                    dotStyle={styles.activeDotStyle}
                    inactiveDotStyle={styles.inactiveDotStyle}
                    inactiveDotOpacity={0.5}
                    inactiveDotScale={1}
                />

                <Image
                    source={require('../res/images/bothArrows.png')}
                    style={{ top: "-7.5%", left: "15%" }}
                    navigatepage="card"
                />
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
        paddingBottom: 30,
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
        fontSize: 48,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
    },

    title2: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 48,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        lineHeight: 27,
    },
    activeDotStyle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: figmaColors.primaryOffWhite
    },
    inactiveDotStyle: {
        borderColor: figmaColors.primaryOffWhite,
        borderWidth: 1,
        backgroundColor: 'transparent'
    },
    circularBackgroundStyle: {
        position: 'absolute',
        top: width * 0.4
    },
    imageSize: {
        width: width * 0.7,
        height: height * 0.3,
        resizeMode: 'contain'
    }
});

export default CardIntro;