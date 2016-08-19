/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

class ProjectName extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '123'
    }
  }
  onPress = () => {
    console.log('pressed');
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.instructions}
          onChangeText={(text) => setState(text)}
          value={this.state.text}
        />
        <Text style={styles.welcome}>
          Welcome to React Native!{this.state.text}
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ProjectName', () => ProjectName);
