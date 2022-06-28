import {
    StyleSheet, 
    View,
    Text,
    ImageBackground
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import figmaColors from '../res/figmaColors';


const CategoriesCards = (props) =>
{
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={require('../res/images/categoriesCardCurve.png')} style={styles.curvedImage}>
                    <View>
                        <Text>
                            Spending
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '40%',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryOffWhite,
        overflow: 'hidden',
        alignContent:'center',
    },
    title: {

    },
    modules: {

    },
    curvedImage: {
        width: '100%',
        height: '10%'
    },
    nextArrowImage: {
        width: '10%',
        height: '10%'
    },
    header: {
        width: '100%',
        height: '40%',
    }

})

export default CategoriesCards;