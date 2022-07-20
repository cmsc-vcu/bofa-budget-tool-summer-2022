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

const Connect = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <NavBar>
                
            </NavBar>

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