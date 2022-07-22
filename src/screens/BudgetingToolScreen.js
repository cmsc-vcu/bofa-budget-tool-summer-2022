import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Pressable
} from 'react-native'

import figmaColors from "../res/figmaColors";
import fonts from "../res/fonts";

const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;

const BudgetingToolScreen = () =>
{

    const [pressablePressed, setPressablePressed] = useState(false);

    return(
        <View style={styles.container}> 
            <View style={styles.topBudgetingBarContainer}>
                <Pressable onPress={() => setPressablePressed(1)} 
                            style={[{backgroundColor: pressablePressed === 1? figmaColors.primaryOffBlack : figmaColors.primaryTeal}, styles.buttonStyle]}>
                    <Text style={styles.textStyle}>Overview</Text>
                </Pressable>
                <Pressable onPress={() => setPressablePressed(2)} 
                            style={[{backgroundColor: pressablePressed === 2? figmaColors.primaryOffBlack : figmaColors.primaryTeal}, styles.buttonStyle]}>
                    <Text style={styles.textStyle}>Spending</Text>
                </Pressable>
                <Pressable onPress={() => setPressablePressed(3)} 
                            style={[{backgroundColor: pressablePressed === 3? figmaColors.primaryOffBlack : figmaColors.primaryTeal}, styles.buttonStyle]}>
                    <Text style={styles.textStyle}>Income</Text>
                </Pressable>
            </View>
            <View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height * 0.4,
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    topBudgetingBarContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'space-between',
        paddingTop: 20
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
    }
});

export default BudgetingToolScreen;