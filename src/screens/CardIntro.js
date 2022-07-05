import React, {
    useState,
    useRef,
    useCallback
} from "react";
import {
    Text,
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native'
import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import OrangeButton from "../components/OrangeButton";
import { useNavigation } from "@react-navigation/native";
import Carousel from 'react-native-snap-carousel';
import { Pagination } from "react-native-snap-carousel";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


// This acts as the cards on the figma onboarding process, where the user
// clicks on the arrow and it will turn to the next card.

const cardItems = [
    {
        ImagePath: require('../res/images/financialtarget.png'),
        Title: 'Define your\nfinancial\ngoals.',
        subtitle: 'Don\'t know what\'s your need?\nDon\'t worry, we will guide you\nstep by step.'
    },
    {
        ImagePath: require('../res/images/Yourpath.png'),
        Title: 'Lead your\nown path.',
        subtitle: 'Build a financial path that best\nsuits you.'
    },
    {
        ImagePath: require('../res/images/Conquerfuture.png'),
        Title: 'Conquer your\nfuture.',
        subtitle: 'Prepare with strong financial\ncompetency for your life after college.'
    }
]

function CardIntro (props) {
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
    const renderCardItem = useCallback(({item, index}) => (
        <View style={styles.subcontainer}>
            <Image source={ item.ImagePath } />
            <Text style={[styles.title, { paddingTop: 0, paddingBottom: 20 }]}>{item.Title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    ), []);

    return (
        <View style={styles.container}>
                <Carousel
                    layout="default"
                    ref={ref}
                    data={carouselItems}
                    sliderWidth={width * 0.98}
                    itemWidth={width * 0.9}
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
                <OrangeButton
                    text={'I\'m ready!'}
                    navigatepage='TermsConditions'
                />
        </View>
    )
}
const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: figmaColors.primaryOffWhite,
        paddingBottom: 50,
        paddingTop: 20
        
    },
    // Be care of adding left and bottom attributes when pulling from figma
    // This acts as the card container
    subcontainer: {
        alignItems: 'flex-start',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryGreen,
        width: width * 0.9,
        height: height * 0.9,
        paddingLeft: 35,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    // This refers to the main title of the cards
    title: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        paddingTop: 50,
        paddingRight: 30
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        lineHeight: 28,
        paddingBottom: 35
    },
    activeDotStyle: {
        width:20,
        height:20,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: figmaColors.primaryGreen
    },
    inactiveDotStyle: {
        borderColor: figmaColors.primaryGreen,
        borderWidth: 2,
        backgroundColor: figmaColors.primaryOffWhite
    }

});

export default CardIntro;