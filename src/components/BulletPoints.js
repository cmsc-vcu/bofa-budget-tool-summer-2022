import {
    StyleSheet,
    View
} from 'react-native';
import React from 'react';
import figmaColors from '../res/figmaColors';

const BulletPoints = (props) => {
    return (
        <View style={[styles.outerCircle, { backgroundColor: props.passedColor }]}>
            <View style={[styles.innerCircle]}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerCircle: {
        width: 17,
        height: 17,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCircle: {
        width: 8,
        height: 8,
        backgroundColor: figmaColors.primaryOffWhite,
        borderRadius: 22
    }
});

export default BulletPoints;