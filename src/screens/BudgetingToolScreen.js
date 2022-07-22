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
            <Pressable onPress={() => setPressablePressed(!pressablePressed)} 
                        style={[{backgroundColor: pressablePressed ? figmaColors.primaryTeal : figmaColors.primaryOffBlack}, styles.buttonStyle]}>
                <Text style={styles.textStyle}>Overview</Text>
            </Pressable>
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
    buttonStyle: {
        width: width * 0.2,
        height:height * 0.03,
        borderRadius: 30,
    },
    textStyle: {
        fontFamily: fonts.mainFont,
        color: figmaColors.primaryOffWhite
    }
});

export default BudgetingToolScreen;