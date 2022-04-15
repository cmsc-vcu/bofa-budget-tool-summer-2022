import React from "react";
import {
    Button,
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native'
import figmaColors from "../res/figmaColors";
import OrangeButton from "../components/OrangeButton";
import { useNavigation } from "@react-navigation/native";
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

// This acts as the cards on the figma onboarding process, where the user
// clicks on the arrow and it will turn to the next card.
function CardIntro (props) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
                <ProgressSteps {...progressStepsStyle}>
                    <ProgressStep nextBtnText={'Next'}  nextBtnTextStyle={nextbuttonstyle}>
                        <View style={styles.subcontainer}>
                            <Image source={require('../res/images/financialtarget.png')} />
                            <Text style={[styles.title, { paddingTop: 0, paddingBottom: 20 }]}>{'Define your\nfinancial\ngoals.'}</Text>
                            <Text style={styles.subtitle}>{'Don\'t know what\'s your need?\nDon\'t worry, we will guide you\nstep by step.'}</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep nextBtnText={'Next'} previousBtnTextStyle={nextbuttonstyle} nextBtnTextStyle={nextbuttonstyle}>
                        <View style={[styles.subcontainer, { backgroundColor: '#4CB998' }]}>
                            <Image source={require('../res/images/Yourpath.png')} />
                            <Text style={styles.title}>{'Lead your\nown path.'}</Text>
                            <Text style={styles.subtitle}>{'Build a financial path that best\nsuits you.'}</Text>
                        </View>
                    </ProgressStep>
                    <ProgressStep previousBtnTextStyle={nextbuttonstyle} nextBtnTextStyle={nextbuttonstyle} onSubmit={() => navigation.navigate('TermsConditions')}>
                        <View style={styles.subcontainer}>
                            <Image source={require('../res/images/Conquerfuture.png')} />
                            <Text style={styles.title}>{'Conquer your\nfuture.'}</Text>
                            <Text style={styles.subtitle}>{'Prepare with strong financial\ncompetency for your life after college.'}</Text>
                        </View>
                    </ProgressStep>
                </ProgressSteps>


            {/* <OrangeButton
            text={'I\'m ready!'}
                /> */}
        </View>
    )
}
const nextbuttonstyle = {

    padding: 10,
    backgroundColor: '#EB7723',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 5,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: '400',
    color: figmaColors.primaryOffWhite,
};


const progressStepsStyle = {
    activeStepIconBorderColor: "#85BB4E",
    activeStepNumColor: "transparent",
    activeStepIconColor: "#85BB4E",
    completedStepIconColor: "#85BB4E",
    completedProgressBarColor: "#85BB4E",
    disabledStepNumColor: "transparent",
    completedCheckColor: "transparent"
};

const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: figmaColors.primaryOffWhite,
    },
    // Be care of adding left and bottom attributes when pulling from figma
    // This acts as the card container
    subcontainer: {
        alignItems: 'flex-start',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryGreen,
        width: 360,
        height: 541,
        paddingBottom: 50,
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
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        paddingTop: 50,
        paddingRight: 30
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '400',
        color: figmaColors.primaryOffWhite,
        lineHeight: 28,
        paddingBottom: 35
    },

});

export default CardIntro;