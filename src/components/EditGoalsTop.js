import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';
import ResizableButton from './ResizableButton';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

function EditGoalsTop (props) {
    

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit</Text>
            <ResizableButton
            text={'Spending'}
            background={figmaColors.primaryGray}
            color={figmaColors.primaryOffWhite}
            style={styles.spending}
            />
            <ResizableButton
            text={'Saving'}
            background={figmaColors.primaryGray}
            color={figmaColors.primaryOffWhite}
            style={styles.spending}/>
            <View style={styles.line}/>
            <Text style={styles.overallspending}>
                Overall Monthly Spending:
            </Text>
            <Text style={styles.number}>
                $10,000
            </Text>

            

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 234,
        width: '100%',
        backgroundColor: figmaColors.primaryTeal,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,

    },

    header: {
        fontFamily: fonts.mainFont,
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 33,
        textAlign: 'center',
        color: figmaColors.primaryOffWhite,
        marginTop: height * 0.05,
        
    },

    line: {
        width: 355,
        height: 1,
        borderRadius: 10,
        backgroundColor: figmaColors.primaryOffWhite,
        left: 10
    },

    overallspending: {
        fontFamily: fonts.mainFont,
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 19,
        color: figmaColors.primaryOffWhite

    },

    number: {
        fontFamily: fonts.mainFont,
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 38,
        color: figmaColors.primaryOffWhite
    },

})

export default EditGoalsTop;