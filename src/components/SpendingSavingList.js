import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

function SpendingSavingList (props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            
            <Text style={styles.category}>{props.category}</Text>
            <Text style={styles.goal}>{props.goal}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 60,
        width: 342,
        height: 68.93,
        backgroundColor: '#808080',

    }
})

export default SpendingSavingList;