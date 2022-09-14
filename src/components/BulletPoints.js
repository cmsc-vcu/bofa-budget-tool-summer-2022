import {
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import React from 'react';

import figmaColors from '../res/figmaColors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

    /*************************************************************************************************  
     * BulletPoints
     * This component's function is to act as the bullet point image
    *************************************************************************************************/

const BulletPoints = (props) => {
    return (
        <View style={[styles.outerCircle]}>
            <View style={[styles.innerCircle, { backgroundColor: props.passedColor }]}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerCircle: {
        width: width * 0.06,
        height: height * 0.03,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: figmaColors.primaryOffWhite,
        elevation: 5
    },
    innerCircle: {
        width: width * 0.045,
        height: height * 0.023,
        borderRadius: 50
    }
});

export default BulletPoints;