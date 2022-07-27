import {
    Text,
    StyleSheet,
    View,
    Image,
    Button,
    ImageBackground,
} from 'react-native';
import React , { useState } from 'react';
import OrangeButton from "../components/OrangeButton";
import CheckBox from '@react-native-community/checkbox'
import fonts from '../res/fonts';

// This page is for the Terms & Conditions with the Privacy Policy
// TESTING PULL FOR ANEESH
const TermsConditions = () => {
    
    //const [value, setValue] = useState('first');
    //const [checked, setChecked ] = React.useState({checked2: false, checked3: false, checked4: false, checked5});
    //const [checked2, setChecked2] = React.useState(false);
    //const [checked3, setChecked3] = React.useState(false);
    //const [checked4, setChecked4] = React.useState(false);
    //const [checked5, setChecked5] = React.useState(false);

    //const [checked, setChecked] = useState(false);

    const [isSelected, setSelection] = useState(false);

    

    return (
        <View style={style.container}>
                
            <View style = {style.container}>
                <Image source={require('../res/images/bubble_top.png')}/> 
            </View>

            <View style = {style.container}>
                <Image source={require('../res/images/t&c_check.png')}
                style ={style.termsChecklogo} /> 
                <Text style={style.header}>
                    Terms and{"\n"}Conditions
                </Text>
            </View>


            
            <View style ={style.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkbox}
                 />
                 <Text style={style.label}>Agree All</Text>
                 
                </View>



                <View style ={style.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkbox}
                 />
                 <Text style={style.label}>(Required)Lorem ipsum dolor</Text>
                </View>



                <View style ={style.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkbox}
                 />
                 <Text style={style.label}>(Required)Lorem ipsum dolor</Text>
                </View>


                <View style ={style.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkbox}
                 />
                 <Text style={style.label}>(Required)Lorem ipsum dolor</Text>
                </View>



                <View style ={style.checkboxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={style.checkbox}
                 />
                 <Text style={style.label}>(Optional)Lorem ipsum dolor</Text>
                </View>




                <OrangeButton
                    text={'ACCEPT & CONTINUE'}
                    navigatepage='UsernameScreen'
                    
                />

                <OrangeButton
                 text={'privacy policy'}
                navigatepage='PrivacyPolicy'
                />
      
      <OrangeButton
                    text={'budgetingtool'}
                    navigatepage='BudgetingToolScreen'
                />
            
        </View>



    )
}

const style = StyleSheet.create({

    container: {
        
            flex: 1,
            top: -10
        
      },
      checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
      },
      label: {
        margin: 8,
      },
      termsChecklogo:{
        position: 'absolute',
        width: 123,
        height: 111,
        left: 30,
        top: -90,
      },
      header: {
        fontFamily: fonts.mainFont,
        fontStyle: 'normal',
        fontSize: 37,
        fontWeight: '800',
        left: 15,
        top: 50,
        height: 200,
        color: "#FFFEF6"
    }

      
    });




export default TermsConditions;




