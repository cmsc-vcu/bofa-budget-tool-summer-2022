import {
    StyleSheet, 
    View,
    Text,
    Pressable,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import figmaColors from '../res/figmaColors';
import { fonts } from '@rneui/base';

const NavBar = () =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}> 
                <View style={styles.navbar}>
                    <View style={styles.rangeone}>
                        <Pressable onPress={() => navigation.navigate('HomePage')}>
                            <Image source={require('../res/images/homeIcon.png')} style={styles.homeicon}/>
                            <Text style={styles.texts}>
                                Home
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.rangetwo}>
                        <Pressable onPress={() => navigation.navigate('FinancialLiteracyCategories')}>
                            <Image source={require('../res/images/budgetIcon.png')} style={styles.homeicon}/>
                            <Text style={styles.texts}>
                                Budget
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.rangethree}>
                        <Pressable onPress={() => navigation.navigate('Rewards')}>
                            <Image source={require('../res/images/what-ifIcon.png')} style={styles.homeicon}/>
                            <Text style={styles.texts}>
                                What-if
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.rangefour}>
                        <Pressable onPress={() => navigation.navigate('Connect')}>
                            <Image source={require('../res/images/learnIcon.png')} style={styles.homeicon}/>
                            <Text style={styles.texts}>
                                Learn
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
    },

    navbar: {
        width: 365,
        height: 63,
        backgroundColor: figmaColors.primaryOffWhite,
        left: '4%',
        top: '1105%',
        borderRadius: 20,
        elevation: 3,
    },

    homeicon: {
        position: 'absolute', 
        left: '30%',
        top: '30%'
    },

    budgeticon: {
        position: 'absolute', 
        left: '35%',
        top: '60%'
    },

    whatificon: {
        position: 'absolute', 
        left: '33%',
        top: '40%'
    },
    
    learnicon: {
        position: 'absolute', 
        left: '33%',
        top: '45%'
    },

    rangeone: {
        position: 'absolute',
        height: '100%',
        width: '25%',
    },

    rangetwo: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        left: '25%',
    },

    rangethree: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        left: '50%',
    },

    rangefour: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        left: '75%',
    },

    texts: {
        top: '195%',
        textAlign: 'center',
        fontFamily: fonts.mainFont,
        fontWeight: '700',
        fontSize: 13

    }

})

export default NavBar;