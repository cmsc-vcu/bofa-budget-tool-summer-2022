import {
    Text,
    StyleSheet,
    View,
    Image,
    Button,
    TouchableHighlight
} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

// This page is for the Terms & Conditions page with the Privacy Policy

function handlePress () {
    const navigation = useNavigation();

    return (
        <Button>
                onPress={() => navigation.goBack()}
        </Button>
    )
}

const PrivacyPolicy = () => {
    
    return (
        <View>
            <View style={style.topContainer}>
                <Image source={require('../res/images/privacyPolicyVector.png')} style={style.vector}/> 
                
                


                <TouchableHighlight onPress={() => this.handlePress}>
                    <Image source={require('../res/images/backArrow.png')} style={style.arrow}/>
                </TouchableHighlight>

                


                <Text style={style.header}>
                    Privacy Policy
                </Text>
                <Text style={style.subheader}>
                    Updated: February 22, 2022
                </Text>
            </View>

            <View style={style.midContainer}>
                <Image source={require('../res/images/border.png')} style={style.borderone}/>
                <Text style={style.statement}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis condimentum odio. Duis at condimentum nisi. Aenean finibus iaculis maximus. Duis a finibus ligula, in viverra arcu. Curabitur et mauris eu metus tempor malesuada id sit amet ex. Mauris ultrices at justo vitae pharetra. Suspendisse id lorem mauris.

                    In hac habitasse platea dictumst. Proin vestibulum, neque eget pulvinar eleifend, dui magna pulvinar dui, molestie aliquam metus mi id nibh. Integer dapibus, nisl sit amet lobortis fringilla, lectus nibh posuere risus, ut porttitor lectus leo in nulla. Quisque suscipit iaculis justo, quis iaculis urna laoreet eget. Vivamus a enim vitae risus vehicula volutpat. In tincidunt velit eget lorem malesuada lobortis. Nunc mollis mollis scelerisque. Aenean felis velit, cursus ac mattis sit amet, rutrum id nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed at feugiat quam, quis venenatis leo.

                    Donec varius mauris quis iaculis luctus. Aenean vehicula libero elementum consequat molestie. Proin nunc elit, ornare vitae massa et, iaculis finibus mi. Vivamus finibus orci quis quam tristique ultricies. Nunc scelerisque, tellus eget varius posuere, sem magna venenatis elit, vitae accumsan arcu augue in sapien. Aenean vestibulum finibus magna in tempor. Praesent imperdiet purus leo, nec aliquam ligula placerat vitae. Suspendisse lobortis orci a venenatis pellentesque.

                    Phasellus at purus quis massa blandit lobortis. Sed faucibus massa sit amet lacus viverra condimentum. Vivamus ultrices eros id consequat consectetur. Integer ex dolor, pharetra vel tortor vitae, dapibus sollicitudin nunc. Integer non velit molestie, fringilla odio id, condimentum lacus. Suspendisse non porttitor felis, a maximus justo. Praesent ultricies vulputate bibendum. Maecenas eget facilisis lectus, et laoreet lorem. Mauris tincidunt, leo vitae egestas pretium, tellus tellus ultricies nunc, vel viverra elit tortor vel velit. In est dolor, maximus et gravida maximus, accumsan nec diam. Phasellus risus urna, ullamcorper a aliquet sed, volutpat quis ante. Vivamus varius erat at tempus suscipit. Etiam varius mattis est vel sodales. Sed a tristique odio.

                    Curabitur sollicitudin leo nulla, vel hendrerit metus vulputate a. Donec scelerisque, magna vel efficitur scelerisque, ipsum mauris condimentum velit, vitae sollicitudin lectus velit eget odio. Integer dapibus ut dui ut porttitor. Vivamus vehicula condimentum blandit. Curabitur egestas libero lorem, ut aliquam dolor lobortis nec. Donec mattis, ligula eu porttitor scelerisque, mi nulla bibendum nulla, quis mollis nunc risus sed nunc. Sed dapibus risus quis porttitor fermentum. Curabitur et neque pulvinar, porttitor libero id, tempus ligula. Vivamus id massa quis augue consequat efficitur sed quis dolor. Etiam orci nisl, venenatis ut massa vel, blandit feugiat mauris. Sed sollicitudin orci eget ipsum sodales, lobortis vestibulum massa placerat. Nulla et ultrices sapien. Curabitur eu felis condimentum nulla euismod mattis. Nulla facilisi. Nam at turpis at risus eleifend maximus in ut quam.
                </Text>
                <Image source={require('../res/images/border.png')} style={style.bordertwo}/>
            </View>

        </View>
        
    );

}








const style = StyleSheet.create({
    topContainer: {
        

    },

    header: {
        fontSize: 44,
        fontWeight: '800',
        fontFamily: 'Roboto',
        width: 309,
        height: 56,
        top: -220,
        left: 29,
        color: '#FFFEF6'
        

    },

    subheader: {
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'Roboto',
        width: 309,
        height: 28,
        left: 29,
        top: -220,
        color: '#FFFEF6'


    },

    vector: {
        width: 400,
        top: -50
    },

    arrow: {
        left: 29,
        top: -235
    },

    midContainer: {
        borderTopColor: '#E2E2E2'
        // flexDirection: 'row',
        // justifyContent: 'center',
        // display: 'flex'
    },

    borderone: {
        left: 15,
        top: -125
    },

    statement: {
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: '400',
        width: 330,
        height: 250,
        color: '#2E2E2E',
        
        left: 15,
        top: -120
    },

    bordertwo: {
        left: 15,
        top: 0
    }

})

export default PrivacyPolicy;