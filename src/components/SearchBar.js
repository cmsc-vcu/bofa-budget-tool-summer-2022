import {
    Text,
    StyleSheet,
    View,
    TextInput,
    Dimensions,
    Image,
} from 'react-native';
import React from 'react';

import figmaColors from '../res/figmaColors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SearchBar = () =>
{
    return(
        <View style={styles.container}>
            <TextInput style={styles.textInputStyle} placeholder='Search'/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: figmaColors.primaryOffWhite,
        width: width * 0.88,
        height: height * 0.05,
        borderRadius: 30,
        margin: 10,
    },
    textInputStyle: {
        
    }
})

export default SearchBar;