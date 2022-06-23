import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import React from 'react';
import OrangeButton from '../components/OrangeButton';


const FinancialLiteracyCategories = () =>
{
    return (
        <ScrollView>
            <View style={styles.topcontainer}> 
                    <Image source={require('../res/images/HPtopvector.png')} style={styles.topvector}/> 
                    <Image source={require('../res/images/Settings.png')} style={styles.settings}/>
                    <Text style={[styles.topnavtitle]}>
                        Learn
                    </Text>
            </View>
            <OrangeButton
                navigatepage='FinancialLiteracyModules'
                text='Modules'/>
        </ScrollView>
        
    );
        
}

const styles = StyleSheet.create({
    container: {

    },
    topvector: {
        width: 393,
        height: 90,
        left: 0,
        top: -10

    },
    settings: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400',
        left: 350,
        top: -55,
    },
    topnavtitle: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 28,
        position: 'absolute',
        left: 20,
        top: 35,
        color: '#2E2E2E'
    },
})

export default FinancialLiteracyCategories;