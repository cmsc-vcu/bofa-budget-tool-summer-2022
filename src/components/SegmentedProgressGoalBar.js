import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";
import BulletPoints from "./BulletPoints";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SegmentedProgressGoalBar = (props) =>
{

    // The view Styles have to be in descending order starting from biggest to smallest
    return(
        <View style={styles.container}>
            <View style={styles.thirdBarContainer}>

            </View>
            <View style={styles.secondBarContainer}>

            </View>
            <View style={styles.firstBarContainer}>

            </View>
            <View style={styles.legendKeyContainer}>
                <View>
                    <View style={styles.rowContainer}>
                        <BulletPoints passedColor={ '#1F456E' }/>
                        <Text style={styles.textStyle}>Spending</Text>
                        <Text style={styles.numberStyle}> {'$' + props.userSpending} </Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <BulletPoints passedColor={ '#4F97A3' }/>
                        <Text style={styles.textStyle}>Savings</Text>
                        <Text style={styles.numberStyle}> {'$' + props.userSavings} </Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <BulletPoints passedColor={ '#4CB998' }/>
                        <Text style={styles.textStyle}>Bills</Text>
                        <Text style={styles.numberStyle}> {'$' + props.userBills} </Text>
                    </View>

                </View>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        elevation: 5,
    },
    rowContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        width: width,
        paddingBottom: height * 0.01
    },
    legendKeyContainer: {
        paddingTop: height * 0.05,
    },
    firstBarContainer: {
        position: 'absolute',
        height: height * 0.03,
        width: width * 0.6,
        backgroundColor: '#1F456E',
        borderRadius: 20,
    },
    secondBarContainer: {
        position: 'absolute',
        height: height * 0.03,
        width: width * 0.7,
        backgroundColor: '#4F97A3',
        borderRadius: 20,
    },
    thirdBarContainer: {
        position: 'absolute',
        height: height * 0.03,
        width: width * 0.8,
        backgroundColor: '#4CB998',
        borderRadius: 20,
    },
    textStyle: {
        paddingLeft: width * 0.03,
        fontFamily: fonts.mainFont,
        fontWeight: '500',
        fontSize: 18,
        fontStyle: 'normal',
        color: figmaColors.primaryOffBlack
    },
    numberStyle: {
        fontFamily: fonts.mainFont,
        fontSize: 16,
        color: figmaColors.primaryGray,
        marginLeft: 'auto',
        paddingRight: width * 0.2
    }
});

export default SegmentedProgressGoalBar;