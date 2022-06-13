import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    TextInput,
    Image,
    Button
} from 'react-native';
import React from 'react';
import OrangeButton from "../components/OrangeButton";
import figmaColors from '../res/figmaColors';
import LinearGradient from 'react-native-linear-gradient';

/*<ImageBackground source={require('background image path')} style={{width: '100%', height: '100%'}}>
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.title}>First, what should we call you?</Text>
            <Text style={styles.subtitle}>Don’t worry, you can change your username later!</Text>
        </View>
        </ImageBackground>*/

/*<View style={styles.topcontainer}>
    /*<ImageBackground source={require('../res/images/Username_Vector_top.png')}style={{position: 'relative', top: -3}}>  
        <Text style={styles.title}>First, what should we call you?</Text>
        <Text style={styles.subtitle}>Don’t worry, you can change your username later!</Text> 
    </ImageBackground> 
</View>*/ 

// This page is for the Username Page for Onboarding

const UsernameScreen = () => {
    const [text, onChangeText] = React.useState(null);
    return (
        
        <LinearGradient  
            colors={[figmaColors.primaryGreen, figmaColors.primaryTeal]}
            style={styles.container}>
    
            <Image 
                source={require('../res/images/Username_Vector_top.png')} 
                style={{top: '-5%'}}
            />
            <Image 
                source={require('../res/images/OnboardingProgress2.png')} 
                style={{position: 'absolute', marginVertical: 30, marginHorizontal: 13}}
            />
                
            <View style={{position: 'absolute', paddingHorizontal: 35, paddingVertical: 85}}>
                <Text style={styles.title}>First, what should{"\n"}we call you?</Text>
                <Text style={styles.subtitle}>Don’t worry, you can change{"\n"}your username later!</Text>
            </View>
            <View style={styles.box}>
                <View style={styles.subbox}>
                    <TextInput
                        style={styles.input}
                        value={text}
                        onChangeText={onChangeText}
                        placeholder="Username"
                    />
                    <OrangeButton 
                        style={{backgroundColor: 'rgba(0, 119, 35, 0.7)'}}
                        text='create profile'
                        navigatepage='ThreeTopics'
                    />
                </View>
            </View>
            

        </LinearGradient>
        /*<View>
            <Text>Hello World</Text>
            <OrangeButton
                text={'Create Profile'}
                navigatepage='threetopics'/>
        </View>*/
    )
}

// Note:
// Using paddingBottom or padding on the pagination does will increase the size of the dots
// Use marginBottom to increase the padding between the pagination dots and the siblings in the container

const styles = StyleSheet.create({
    // This is the main container that controls the WHOLE screen
    container: {
        flex: 1,
    },
    box: {
        width: 352,
        height: 202,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: figmaColors.primaryOffWhite,
        borderRadius: 20,
        elevation: 5,
        marginHorizontal: 20
        
    },
    subbox: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
        
    },
    input: {
        width: '100%',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 36,
        fontWeight: '800',
        color: figmaColors.primaryOffBlack,
        borderBottomWidth: 2,
        borderColor: '#A3A3A3',
        marginBottom: 35,
        textAlign: 'center'
    },
    topcontainer: {
        justifyContent:'space-between'
    },
    // Be care of adding left and bottom attributes when pulling from figma
    // This acts as the card container
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 30,
        height: 400,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 5,
    },
    header: {
        paddingBottom: 30
    },
    // This refers to the main title of the Pig Carousel
    title: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 40,
        fontWeight: '800',
        color: figmaColors.primaryOffBlack,
        textAlign: 'left'
    },
    // This refers to the subtitle of the card
    subtitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: '700',
        color: '#42413E',
        textAlign: 'left',
        paddingTop: 23
    },
    imageSize: {
        width: 250,
        height: 250,
        resizeMode: 'contain' // Adding resizeMode with contain will resize the image without having the image clipped
    }

});

export default UsernameScreen;