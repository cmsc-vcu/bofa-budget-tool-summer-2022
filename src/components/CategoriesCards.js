import {
    StyleSheet, 
    View,
    Text,
    ImageBackground,
    Pressable,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import figmaColors from '../res/figmaColors';
import BulletPoints from './BulletPoints';
import CircularProgress from 'react-native-circular-progress-indicator';


const CategoriesCards = (props) =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <ImageBackground 
                source={require('../res/images/categoriesCardCurve.png')} 
                resizeMode='stretch' 
                style={styles.curvedImage} 
                imageStyle={{ tintColor: props.colorTheme }} >

                <View style={styles.headerContainer}>

                    <Text style={styles.title}>
                        { props.cardTitle }
                    </Text>
                    <Pressable
                        onPress={() =>{
                            navigation.navigate(props.navigatePage)
                        }}>
                        <Image source={require('../res/images/forwardArrow.png')} style={styles.nextArrowImage}>

                        </Image>
                    </Pressable>


                </View>
                    
                </ImageBackground>

                <View style={styles.modulesContainer}>
                    <View style={styles.modulesProgressContainer}>
                        <View>
                            { props.cardModulesList.map((moduleTitles) => {
                                return ( <View style={styles.modulesTextContainer}>
                                    <BulletPoints passedColor={ props.colorTheme }/>
                                    <Text style={styles.modulesTextStyle}>
                                        { moduleTitles }
                                    </Text>
                                </View>
                                )
                            }) }
                        </View>

                        <View style={ styles.circularProgBar }>
                            <CircularProgress 
                                value={80}
                                progressValueColor={ props.colorTheme }
                                activeStrokeColor={ props.colorTheme }
                                radius={36}
                                valueSuffix={'%'}
                                valueSuffixStyle={styles.circularValueStyle}
                                progressValueFontSize={20}
                                progressValueStyle={styles.circularValueStyle}
                                inActiveStrokeWidth={5}
                                inActiveStrokeColor={props.secondaryColorTheme}
                            />
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '20%',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryOffWhite,
        overflow: 'hidden',
        alignContent:'center',
        margin: 12
    },
    headerContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        marginLeft: 20,
        marginTop: 10,
        flexDirection: 'row',
    },
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffWhite,
        width: '55%'
    },
    modulesContainer: {
        flex: 1,
        paddingLeft: 25,
        justifyContent: 'center',
        marginTop: 65,
    },
    modulesTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    modulesTextStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 18,
        padding: 5
    },
    modulesProgressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    curvedImage: {
        position: 'absolute',
        width: '100%',
        height: '61%',
    },
    nextArrowImage: {
        marginTop: '65%',
        left: '300%'
    },
    circularProgBar: {
        marginTop: '20%',
        marginRight: '5%'
    },
    circularValueStyle: {
        alignSelf: 'center',
        paddingRight: 0,
        fontSize: 20
    }
})

export default CategoriesCards;