import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import figmaColors from '../res/figmaColors';
import fonts from '../res/fonts';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    backgroundColor: '#D9D9D9',
    backgroundColor2: figmaColors.primaryOrange,
    pressed: false,
  };

  changeColor() {
    if (!this.state.pressed) {
      this.setState({ pressed: true, backgroundColor: figmaColors.primaryOrange, backgroundColor2: '#D9D9D9' });
    } else {
      this.setState({ pressed: false, backgroundColor: '#D9D9D9', backgroundColor2: figmaColors.primaryOrange });
    }
  }

  text(props) {
    <Text style={styles.textstyle}>{props.text}</Text>
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            backgroundColor: this.state.backgroundColor, padding: 15, borderRadius: 20, shadowColor: '#000000', maxWidth: 500, paddingHorizontal: 40,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 4,
            shadowOpacity: 1,
            elevation: 5,
          }}
          onPress={() => this.changeColor()}
        >
          <Text style={styles.textstyle}>{this.props.text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#605F58',
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
});