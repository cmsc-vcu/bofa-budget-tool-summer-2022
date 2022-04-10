/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   View,
   Image,
   ImageBackground
 } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import FirstPageMiddle from './src/screens/FirstPageMiddle';
 import CardIntro from './src/screens/CardIntro';

 
 
 /**
  * Idea: Create a function component (screens.js example) that will return
  * a React element
  * A React element is a JavaScript object containing at least a type and props
  * 
  * @returns a Screen for the users to view
  */
 const Stack = createNativeStackNavigator();
 
 
 const OnboardingStart = ({ navigation }) => {
   // I want to return a view
   return (
 
     // This will start the navigation of the onboarding process
     <NavigationContainer>
         {/* We added screenOptions to not show the header*/}
         <Stack.Navigator initialRouteName='OnboardingHome' screenOptions={{headerShown: false}}>
           <Stack.Screen name='OnboardingHome' component={FirstPageMiddle} />
           <Stack.Screen name='CardIntro' component={CardIntro} />
         </Stack.Navigator>
       </NavigationContainer>
   )
 }
 
 export default OnboardingStart;
 