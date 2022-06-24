import {
    StyleSheet, View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import figmaColors from '../res/figmaColors';


const CategoriesCards = () =>
{
    return(
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '40%',
        backgroundColor: figmaColors.primaryOffWhite
    },
    title: {

    },
    modules: {

    },
    nextArrowImage: {
        width: '10%',
        height: '10%'
    },

})

export default CategoriesCards;