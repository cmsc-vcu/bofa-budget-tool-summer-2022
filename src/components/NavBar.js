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
import CircularProgress from 'react-native-circular-progress-indicator';

const NavBar = (props) =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}> 
                <View style={styles.navbar}>
                    <View style={styles.homerange}>
                        {/* unrequired pressable? */}
                        <Pressable>
                            <Image source={require('../res/images/homeIcon.png')} style={styles.othericons}/>
                            <Text style={styles.texts}>
                                Home
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.learnrange}>
                        <Pressable onPress={() => navigation.navigate('FinancialLiteracyCategories')}>
                            <Image source={require('../res/images/learnIcon.png')} style={styles.othericons}/>
                            <Text style={styles.texts}>
                                Learn
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.careerrange}>
                        <Pressable onPress={() => navigation.navigate('Rewards')}>
                            <Image source={require('../res/images/careerIcon.png')} style={styles.othericons}/>
                            <Text style={styles.texts}>
                                Career
                            </Text>
                        </Pressable>
                    </View>
                    <View style={styles.profilerange}>
                        <Pressable onPress={() => navigation.navigate('Connect')}>
                            <Image source={require('../res/images/profileIcon.png')} style={styles.othericons}/>
                            <Text style={styles.texts}>
                                Profile
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
        top: 685,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        elevation: 15,
    },

    homeicon: {
        left: '33%',
        top: 10,
        tintColor: '#4CB998'
    },

    homerange: {
        position: 'absolute',
        height: '100%',
        width: '25%',
        backgroundColor: '#808080',
        opacity: .5

    },

    othericons: {
        position: 'absolute', 
        left: '33%', 
        top: '35%'
    },

    learnrange: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        left: '25%',
        backgroundColor: '#808080',
        opacity: .75
    },

    careerrange: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        left: '50%',
        backgroundColor: '#808080',
        opacity: .5
    },

    profilerange: {
        position: 'absolute',
        width: '25%',
        height: '100%',
        left: '75%',
        backgroundColor: '#808080',
        opacity: .75
    },

    texts: {
        top: '195%',
        left: '30%'
    }

})

export default NavBar;