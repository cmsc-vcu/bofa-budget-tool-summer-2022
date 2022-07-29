import React, { Component } from 'react';
import  { useState } from 'react';
import { Platform, Dimensions, SafeAreaView, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { inlineStyles } from 'react-native-svg';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';


const width = Dimensions.get('window').width;;
const height = Dimensions.get('window').height;
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.subtitle}>
          Zelle from [sender]
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  container: {
    width: width,
    height: height * 0.25,
    backgroundColor: '#35829A',
    borderRadius: 30,
    top: '-5%'
  },

  textstyle: {
    fontFamily: fonts.mainFont,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#605F58',
    textAlign: 'center',
    height: 25,
    //top: -45
  },

  subtitle: {
    fontFamily: fonts.mainFont,
    fontStyle: 'normal',
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 20,
    color: '#EFEFEF'
  },
});