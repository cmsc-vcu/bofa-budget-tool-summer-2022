import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions,
    Pressable
} from 'react-native';
import React,
        { useState } from 'react';

import OrangeButton from '../components/OrangeButton';
import CategoriesCards from '../components/CategoriesCards';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';
import SearchBar from '../components/SearchBar';
import InactiveBookmarkCategories from '../res/svg/InactiveBookmarkCategories.svg';
import TopAppBar from '../components/TopAppBar';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const categoriesCard = [
    {
        categoryTitle: 'Spending',
        modulesTitlesList: ['Budgeting', 'Credit', 'Bank Accounts'],
        colorTheme: '#EF5F82',
        secondaryColorTheme: '#FED4D4'
    },
    {
        categoryTitle: 'Growth',
        modulesTitlesList: ['Investing', 'Retirement', 'Real Estate'],
        colorTheme: '#4CB998',
        secondaryColorTheme: '#CBECE4'
    },
    {
        categoryTitle: 'Income',
        modulesTitlesList: ['Net Worth', 'Grants', 'Scholarships', 'Taxes'],
        colorTheme: '#85BB4E',
        secondaryColorTheme: '#E6EBD4'
    },
    {
        categoryTitle: 'Borrow',
        modulesTitlesList: ['Loan', 'Debt', 'Mortgages'],
        colorTheme: '#E08734',
        secondaryColorTheme: '#FEEDD4'
    },
    {
        categoryTitle: 'Protect',
        modulesTitlesList: ['Insurance', 'Auto', 'Privacy', 'Contracts'],
        colorTheme: '#5B93D6',
        secondaryColorTheme: '#C9E0FB'
    }
]


const FinancialLiteracyCategories = () =>
{

    return (
        <View style={styles.container}>


            {/* Top app bar with the white background and title Learn */}
            <TopAppBar>

            </TopAppBar>
            
            <ScrollView contentContainerStyle={styles.innerScrollViewContainer}>

                {/* Search Bar */}
                <View>
                    <SearchBar>

                    </SearchBar>
                    {/* View Bookmarks Button */}
                    <Pressable>
                        <View style={styles.bookmarksContainer}>
                            <Text style={styles.bookmarksTextStyle}>
                                View Bookmarks
                            </Text>
                            <InactiveBookmarkCategories width={18} height={18} />
                        </View>
                    </Pressable>
                </View>
                
    

                

                {/* Category Cards */}
                {/* Pass in the JSON formatted list */}
                {categoriesCard.map((card) => {
                    return (
                        <CategoriesCards 
                            cardTitle={card.categoryTitle} 
                            cardModulesList={card.modulesTitlesList} 
                            colorTheme={card.colorTheme}
                            secondaryColorTheme={card.secondaryColorTheme}
                            navigatePage={'FinancialLiteracyModules'}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );     
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCDBBF'
    },
    innerScrollViewContainer: {
        alignItems: 'center',
        backgroundColor: '#CCDBBF',
        paddingBottom: 250
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
    topAppTitle: {
        fontFamily: fonts.mainFont,
        fontSize: 24,
        fontStyle: 'normal',
        fontWeight: '800',
        color: figmaColors.primaryOffBlack,
        flexGrow: 1,
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

export default FinancialLiteracyCategories;


/* PERSONA CARD */


                /* <View style={styles.personaCard}>
                    <View style={styles.personaImageContainer}>
                        <Image source={require('../res/images/defaultPersonaImage.png')} style={styles.personaImage}>

                        </Image>
                    </View>
                    
                    <View style={styles.personaTextContainer}>
                        <Text style={styles.personaName}>
                            
                            Emilio Johnson
                        </Text>
                        <Text style={styles.personaJob}>
                            
                            Graphic Designer
                        </Text>
                        <Text style={styles.personaResidence}>
                            
                            Richmond, VA
                        </Text>
                    </View>
                </View> */

                

                /* Career Snapshot */
                /* <View style={styles.careerSnapshotContainer}>
                    <Text style={styles.careerSnapshotTextStyle} >View Career Snapshot</Text>
                </View> */

// personaCard: {
//     width: '90%',
//     height: '22%',
//     borderRadius: 22,
//     backgroundColor: figmaColors.primaryOffWhite,
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#000000',
//     shadowOffset: {
//         width: 0,
//         height: 4
//     },
//     shadowRadius: 4,
//     shadowOpacity: 1,
//     elevation: 4,
// },
// personaImageContainer: {
//     // Do not add width
//     // It'll make the container contain % of the personaCard, which will make it
//     // look like there's padding between the image and text
//     width: '30%',
//     height: '70%',
//     resizeMode: 'repeat',
//     marginLeft: 14
// },
// personaTextContainer: {
//     marginRight: 100
// },
// personaName: {
//     fontStyle: 'normal',
//     fontWeight: '700',
//     fontSize: 28,
//     lineHeight: 33,
//     color: '#000000'
// },
// personaJob: {
//     fontStyle: 'normal',
//     fontWeight: '500',
//     fontSize: 20,
//     lineHeight: 23,
// },
// personaResidence: {
//     fontStyle: 'normal',
//     fontWeight: '300',
//     fontSize: 15,
// },
// careerSnapshotContainer: {
//     width: '90%',
//     height: '12%',
//     borderRadius: 22,
//     backgroundColor: figmaColors.primaryOffWhite,
//     marginTop: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000000',
//     shadowOffset: {
//         width: 0,
//         height: 4
//     },
//     shadowRadius: 4,
//     shadowOpacity: 1,
//     elevation: 4,
// },
// careerSnapshotTextStyle: {
//     color: '#000000',
//     fontStyle: 'normal',
//     fontWeight: '800',
//     fontSize: 20,
//     lineHeight: 23,
// }
{/* Top Navbar for the Learn Section */}
{/* <View style={styles.topnavtabcontainer}>
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
</View> */}
// topNavTab: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: figmaColors.primaryGreen,
//     justifyContent: 'space-evenly',
//     paddingTop: 70,
// },
// topNavTextStyle:{
//     color: figmaColors.primaryOffWhite,
//     fontFamily: fonts.mainFont,
//     fontSize: 18,
//     lineHeight: 21,
// },
// topnavtabcontainer: {
//     width: '100%',
//     height: '14%'
// },