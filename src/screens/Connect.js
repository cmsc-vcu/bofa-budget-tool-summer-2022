import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import ContinueLearningCards from '../components/ContinueLearningCards';

const Connect = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <ContinueLearningCards
            moduleTitle={'Credit'}
            units={'7/14'}
            progress={50}
            image={require('../res/images/test.png')}
            moduleTheme={'#EF5F82'}
            >
                
            </ContinueLearningCards>
            <Image source={require('../res/images/learningScrollOne.png')} style={styles.ok}>

            </Image>


        </View>
    );
}








const styles = StyleSheet.create({
    ok: {
        top: -10,
        left: 8
    }
})

export default Connect;