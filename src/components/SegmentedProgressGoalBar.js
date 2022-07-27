import React from "react";
import {
    View,
    StyleSheet,
    Dimensions,
    Text
} from 'react-native';

import figmaColors from "../res/figmaColors";

const width = Dimensions.get('window').width;;
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
            <View>
                <View>
                    <View style={styles.rowContainer}>
                        <Text>Spending</Text>
                        <Text> {props.userSpending} </Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text>Savings</Text>
                        <Text> {props.userSavings} </Text>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text>Bills</Text>
                        <Text> {props.userBills} </Text>
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
        flexDirection: 'row'
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
    }
});

export default SegmentedProgressGoalBar;