import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import React from 'react';
import OrangeButton from "../components/OrangeButton";

const threetopics = (props) => {
    return (
        <View style={styles.container}>
            <Text>
                What are you{"\n"}interested in{"\n"}learning?
            </Text>
            <OrangeButton
                text={'Next'}
                navigatepage='PigCarousel'/>
            {/* <ImageBackground source={require('../res/images/Vector_bottom.png')}>  
                
            </ImageBackground> */}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontFamily: "Roboto",
        fontStyle: 'normal',

    },
    subtitle: {

    }
});

export default threetopics;