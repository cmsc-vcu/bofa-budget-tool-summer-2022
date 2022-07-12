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

const ContinueLearningCards = (props) =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View 
            style={styles.left}
            backgroundColor={props.moduleTheme}
            >
                <Image 
                source={props.image}
                style={styles.image}/>
            </View>
            <View style={styles.right}>
                <View style={styles.progress}>
                    <CircularProgress
                    value={props.progress}
                    radius={25}
                    />
                </View>
                <Text style={styles.title}>
                    {props.moduleTitle}
                </Text>
                <Text>
                    {props.units} Units Done
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '74.3%',
        height: '36%',
        borderRadius: 30,
        backgroundColor: figmaColors.primaryOffWhite,
        overflow: 'hidden',
        alignContent:'center',
        margin: 12
    },

    left: {
        width: '50%',
        height: '100%'
    },

    image: {
        marginTop: '20%',
        marginHorizontal: '5%'
    },

    right: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        left: '50%',
        top: '30%',
        left: '55%'

    },

    title: {
        width: 112,
        height: 28,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 28,
        display: 'flex',
        color: '#605F58',
        
    },

    progress: {
        top: '-15%'
    }
    

})

export default ContinueLearningCards;