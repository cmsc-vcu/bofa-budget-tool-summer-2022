import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import OrangeButton from '../components/OrangeButton';
import CategoriesCards from '../components/CategoriesCards';
import figmaColors from '../res/figmaColors';



const FinancialLiteracyCategories = () =>
{
    return (
        <View style={styles.container}>

            <View style={styles.topnavtabcontainer}>
                <View style={styles.topNavTab}>
                    <TouchableOpacity>
                        <Text style={styles.topNavTextStyle}>
                            Categories
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.topNavTextStyle}>
                            Games
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.topNavTextStyle}>
                            Achievements
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View>
            

            
            <View style={styles.topAppBar}>
                <View style={styles.topAppContainer}>
                    <Text style={styles.topAppTitle}>
                        Learn
                    </Text>
                </View>
            </View>
            
            <ScrollView style={styles.container} contentContainerStyle={styles.innerScrollViewContainer}>
                <View>
                    <OrangeButton
                        navigatepage='FinancialLiteracyModules'
                        text='Modules'/>
                </View>
            </ScrollView>
        </View>
        
    );
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerScrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    settings: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400',
    },
    topAppTitle: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        color: figmaColors.primaryOffBlack,

    },
    topAppContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 27,
    },
    topAppBar: {
        width: '100%',
        height: '7%',
        backgroundColor: figmaColors.primaryOffWhite,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        position: 'absolute'
    },
    topNavTab: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: figmaColors.primaryGreen,
        justifyContent: 'space-evenly',
        paddingTop: 70,
    },
    topNavTextStyle:{
        color: figmaColors.primaryOffWhite,
        fontFamily: 'Roboto',
        fontSize: 18,
        lineHeight: 21,
    },
    topnavtabcontainer: {
        width: '100%',
        height: '14%'
    }
})

export default FinancialLiteracyCategories;