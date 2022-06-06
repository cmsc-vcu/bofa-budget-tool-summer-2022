/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import FirstPageMiddle from './src/screens/FirstPageMiddle';
 import CardIntro from './src/screens/CardIntro';
 import TermsConditions from './src/screens/TermsConditions';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import threetopics from './src/screens/threetopics';

 
 
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
         {/* We added screenOptions to not show the header
         OnboardingHome displays the FirstPageMiddle.js
         This is how the navigation/flow will work for now
         If we want to specify which screen to show, then simply pass the name
         */}
         <Stack.Navigator initialRouteName='OnboardingHome' screenOptions={{headerShown: false}}>
           <Stack.Screen name='OnboardingHome' component={FirstPageMiddle} />
           <Stack.Screen name='CardIntro' component={CardIntro} />
           <Stack.Screen name='TermsConditions' component={TermsConditions} />
           <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
           <Stack.Screen name='threetopics' component={threetopics} />
         </Stack.Navigator>
       </NavigationContainer>
   )
 }
 
 export default OnboardingStart;
 