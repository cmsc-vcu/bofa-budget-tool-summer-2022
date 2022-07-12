import {
    StyleSheet,
    View
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';

const BulletPoints = () => {
    return (
        <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerCircle: {
        width: 17,
        height: 17,
        backgroundColor: figmaColors.primaryOffBlack,
        borderRadius: 22,
        justifyContent: 'center'
    },
    innerCircle: {
        width: 8,
        height: 8,
        backgroundColor: figmaColors.primaryOffWhite,
        borderRadius: 22
    }
});

export default BulletPoints;