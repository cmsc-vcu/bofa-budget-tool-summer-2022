import React, {
    useState,
    useRef,
    useCallback
} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import NavBar from '../components/NavBar';
import fonts from '../res/fonts';
import TopBar from '../components/TopHome';
import figmaColors from '../res/figmaColors';
import HomepageButtons from '../components/HomepageButtons';
import Carousel from 'react-native-snap-carousel';
import { Pagination } from "react-native-snap-carousel";
import ResizableButton from "../components/ResizableButton";
import EditGoalsTop from "../components/EditGoalsTop";
import { styles } from "react-native-gifted-charts/src/BarChart/styles";


const EditGoals = (props) => {
    return (
        <View>
            <EditGoalsTop/>
            <Text style={style.header}>Category</Text>
            <Text style={style.header}>Monthly Goal</Text>
            
        </View>

        
    );
}

const style = StyleSheet.create ({
    header: {
        position: 'absolute',
        fontFamily: fonts.mainFont,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        color: figmaColors.primaryGray
    },
})

export default EditGoals;