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

// This is the OrangeButton component where it will be reused

/*************************************************************************************************
* Function: Create a Pressable element given the navigation page where the User wants to go.
* In addition, text that are passed into the OrangeButton will be used as the text for the button.
*************************************************************************************************/    
function Modules (props) {
  const navigation = useNavigation();

  return (
      <View style={styles.container}>
          <Pressable
              onPress={() => { navigation.navigate(props.navigatepage, {
                  pigValue: props.pigValue,
              })} }
              style={styles.buttonstyle}
          >         
          <View>
          <Image
                source={require('../res/images/checkMark.png')}
                style={{ left: "25%", top: "70%" }}
            />
          <Image
                source={require('../res/images/GrayBookmark.png')}
                style={{ left: "40%", top: "20%" }}
            />
            </View> 
            <View>
            <Text style={styles.textstyle}>
                  {props.text}
              </Text>
              <Image
                source={require('../res/images/tinyClock.png')}
                style={{ left: "-20%", top: "-40%" }}
            />
            <Text style={styles.tinyText}>
                  {props.text2}
              </Text></View> 
              
          </Pressable>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 15,
      left: "-2%",
      top: "60%"
  },
  buttonstyle: {
      justifyContent: 'center',
      textAlign: 'left',
      backgroundColor: figmaColors.primaryOffWhite,
      alignItems: 'center',
      borderRadius: 20,
      width: 325,
      height: 53,
      shadowColor: '#000000',
      shadowOffset: {width: 0, height: 4},
      shadowRadius: 4,
      shadowOpacity: 1,
      elevation: 2,
  },
  textstyle: {
      fontFamily: fonts.mainFont,
      textAlign: 'left',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      color: '#605F58', 
      top: "-45%",
      left: "-20%"
  },

  tinyText: {
    fontFamily: fonts.mainFont,
    textAlign: 'left',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#D3D3D3', 
    top: "-66%",
    left: "-15%"
},

  bookmarksContainer: {
    padding: 5,
    paddingLeft: 18,
    paddingRight: 10,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: figmaColors.primaryOffWhite,
    borderRadius: 18,
    marginRight: '3%',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    shadowOpacity: 1,
    elevation: 5,
},
bookmarksTextStyle: {
  fontFamily: fonts.mainFont,
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: 18,
  color: figmaColors.primaryGray,   
  marginRight: 10
},
bookmarkImageStyle: {
  tintColor: figmaColors.primaryGray,
}
})

export default Modules;