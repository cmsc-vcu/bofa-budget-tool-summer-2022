import {
    StyleSheet, 
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import figmaColors from '../res/figmaColors';
import BulletPoints from './BulletPoints';


const CategoriesCards = (props) =>
{
    return(
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <ImageBackground source={require('../res/images/categoriesCardCurve.png')} resizeMode= 'stretch' style={styles.curvedImage}>

                <View style={styles.headerContainer}>

                    <Text style={styles.title}>
                        Spending
                    </Text>
                    <TouchableOpacity>
                        <Image source={require('../res/images/forwardArrow.png')} style={styles.nextArrowImage}>

                        </Image>
                    </TouchableOpacity>


                </View>
                    
                </ImageBackground>

                <View style={styles.modulesContainer}>
                    <View>
                        <BulletPoints>
                            
                        </BulletPoints>
                        <Text>
                            hello
                        </Text>
                    </View>
                    
                </View>
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
    headerContainer: {
        width: '100%',
        height: '100%',
        margin: 15,
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite
    },
    modulesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    curvedImage: {
        position: 'absolute',
        width: '100%',
        height: '65%'
    },
    nextArrowImage: {
        marginLeft: '50%',
        marginTop: '10%',
    },
})

export default CategoriesCards;