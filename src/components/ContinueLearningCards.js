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


const ContinueLearningCards = (props) =>
{
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Pressable>
                <View style={styles.left}>
                    
                </View>
                <View style={styles.right}>


                </View>
            </Pressable>
            
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
    

})

export default ContinueLearningCards;