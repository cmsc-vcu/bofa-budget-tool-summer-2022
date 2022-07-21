import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import ContinueLearningCards from '../components/ContinueLearningCards';
import NavBar from '../components/NavBar';
import HomepageCards from '../components/HomepageCards';
import fonts from '../res/fonts';

const Connect = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <NavBar>
                
            </NavBar>

            <HomepageCards>

            </HomepageCards>

        </View>
    );
}








const styles = StyleSheet.create({
    
})

export default Connect;