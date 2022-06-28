import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import OrangeButton from '../components/OrangeButton';
import CategoriesCards from '../components/CategoriesCards';
import figmaColors from '../res/figmaColors';



const FinancialLiteracyCategories = () =>
{
    return (
        <View style={styles.container}>

            <View style={styles.topnavtabcontainer}>
                <View style={styles.topNavTab}>
                    <TouchableOpacity>
                        <Text style={styles.topNavTextStyle}>
                            Categories
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.topNavTextStyle}>
                            Games
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.topNavTextStyle}>
                            Achievements
                        </Text>
                    </TouchableOpacity>
                </View> 
            </View>
            

            
            <View style={styles.topAppBar}>
                <View style={styles.topAppContainer}>
                    <Text style={styles.topAppTitle}>
                        Learn
                    </Text>
                </View>
            </View>
            
            <ScrollView style={styles.container} contentContainerStyle={styles.innerScrollViewContainer}>


                {/* PERSONA CARD */}
                <View style={styles.personaCard}>
                    <View style={styles.personaImageContainer}>
                        <Image source={require('../res/images/defaultPersonaImage.png')} style={styles.personaImage}>

                        </Image>
                    </View>
                    
                    <View style={styles.personaTextContainer}>
                        <Text style={styles.personaName}>
                            {/* Persona Name goes Here */}
                            Emilio Johnson
                        </Text>
                        <Text style={styles.personaJob}>
                            {/* Persona Job Title goes Here */}
                            Graphic Designer
                        </Text>
                        <Text style={styles.personaResidence}>
                            {/* Persona Residence goes Here */}
                            Richmond, VA
                        </Text>
                    </View>
                </View>

                {/* Career Snapshot */}
                <View style={styles.careerSnapshotContainer}>
                    <Text style={styles.careerSnapshotTextStyle} >View Career Snapshot</Text>
                </View>

                

                <View>
                    <OrangeButton
                        navigatepage='FinancialLiteracyModules'
                        text='Modules'/>
                </View>

                <CategoriesCards></CategoriesCards>
            </ScrollView>
        </View>
        
    );
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerScrollViewContainer: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#CCDBBF',
    },
    settings: {
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        textAlign: 'center',
        fontWeight: '400',
    },
    topAppTitle: {
        fontFamily: 'Roboto',
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        color: figmaColors.primaryOffBlack,

    },
    topAppContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingLeft: 27,
    },
    topAppBar: {
        width: '100%',
        height: '7%',
        backgroundColor: figmaColors.primaryOffWhite,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        position: 'absolute'
    },
    topNavTab: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: figmaColors.primaryGreen,
        justifyContent: 'space-evenly',
        paddingTop: 70,
    },
    topNavTextStyle:{
        color: figmaColors.primaryOffWhite,
        fontFamily: 'Roboto',
        fontSize: 18,
        lineHeight: 21,
    },
    topnavtabcontainer: {
        width: '100%',
        height: '14%'
    },
    personaCard: {
        width: '90%',
        height: '22%',
        borderRadius: 22,
        backgroundColor: figmaColors.primaryOffWhite,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 4,
    },
    personaImageContainer: {
        // Do not add width
        // It'll make the container contain % of the personaCard, which will make it
        // look like there's padding between the image and text
        width: '30%',
        height: '70%',
        resizeMode: 'repeat',
        marginLeft: 14
    },
    personaTextContainer: {
        marginRight: 100
    },
    personaName: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 33,
        color: '#000000'
    },
    personaJob: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 23,
    },
    personaResidence: {
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 15,
    },
    careerSnapshotContainer: {
        width: '90%',
        height: '12%',
        borderRadius: 22,
        backgroundColor: figmaColors.primaryOffWhite,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        elevation: 4,
    },
    careerSnapshotTextStyle: {
        color: '#000000',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 20,
        lineHeight: 23,
    }
})

export default FinancialLiteracyCategories;