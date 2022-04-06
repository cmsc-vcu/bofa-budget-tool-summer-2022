/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { render } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';
import FinancialHubGradientText from './src/screens/financialHubpractice';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground source={require('./src/res/images/topRightVector.png')}>  
          <Image source={require('./src/res/images/Vector.png')}/> 
        </ImageBackground>
      </View>
      <FinancialHubGradientText style={styles.title}/>  
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
  // The view of the top, middle text, and bottom view are all space inbetween each other
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

  // <MaskedView
  //     style={{ flex: 1, flexDirection: 'column', height: '100%' }}
  //     maskElement={
  //       <View
  //         style={{
  //           // Transparent background because mask is based off alpha channel.
  //           backgroundColor: 'transparent',
  //           flex: 1,
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //         }}
  //       >
  //         <Text
  //           style={{
  //             fontSize: 60,
  //             color: 'black',
  //             fontWeight: 'bold',
  //           }}
  //         >
  //           Financial {"\n"} Hub
  //         </Text>
  //       </View>
  //     }
  //   >
  //   {/* Shows behind the mask, you can put anything here, such as an image */}
  //   <View style={{ flex: 1, height: '100%', backgroundColor: '#85BB4E'}} />
  //   <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
  // </MaskedView>

export default HelloWorldApp;
