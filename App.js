/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import FinancialHubGradientText from './src/screens/financialHubpractice';

const HelloWorldApp = () => {
  // I want to return a view
  return (
    // This view is given a style of the container
    // All the children within this view will have the styles.container applied to them
    <View style={styles.container}>
      {/* This view will handle the header*/}
      <View>
        <ImageBackground source={require('./src/res/images/topRightVector.png')}>  
          <Image source={require('./src/res/images/Vector.png')}/> 
        </ImageBackground>
      </View>
      {/* This text is imported from another file and will handle the middle text*/}
      <FinancialHubGradientText style={styles.title}/>  
      {/* This view will handle the footer*/}
      <View>
        <ImageBackground source={require('./src/res/images/bottomleftVector.png')} style={styles.bottom}>  
          <Image source={require('./src/res/images/bottomrightVector.png')}/> 
        </ImageBackground> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // This refers to all of the children in the container
  // space-between means spacing the children within the view between each other
  // This means that the first view, the financialhubgradienttext, and the second view
  // are spaced between each other
  container: {
    flex: 1,
    justifyContent:'space-between'
  },
  title: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 48,
    fontStyle: "normal",
    fontWeight: 'bold'
  },
  // When I add the style at the 2nd ImageBackground, this children that are in it are manipulated
  // In this example, I am adding padding to the left of the children. The children is the image
  bottom: {
    paddingLeft: 30
  }
});

export default HelloWorldApp;
