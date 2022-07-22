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
import TopAppBar from '../components/TopAppBar';

const Connect = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            <View>
                <TopAppBar
                title='Home'/>
            </View>
            

            <View style={styles.test}>
            <HomepageCards/>
            <HomepageCards/>
            <HomepageCards/>
            </View>
            
            

            <NavBar>
                
            </NavBar>

        </View>
    );
}








const styles = StyleSheet.create({
    test: {
        left: '3.5%'
    }
})

export default Connect;