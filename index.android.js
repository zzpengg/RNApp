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
  TouchableOpacity,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

class ProjectName extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: '123',
      height: 170,
      weight: 60,
      BMI: 0,
      poc: 123,
      color: '#ff5533'
    }
  }
  onPressButton = () => {
    console.log('pressed');
    const BMIanswer = this.state.weight/(this.state.height*this.state.height/10000) ;
    this.setState({BMI:BMIanswer});
  }
  changeButton1 = () => {
    console.log('pressed');
    this.setState({
      color: '#FF5FFF'
    })
  }
  changeButton2 = () => {
    console.log('pressed');
    this.setState({
      color: '#FF8FFF'
    })
  }
  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.color}]}>
        <TouchableOpacity>
          <Text>{this.state.BMI}</Text>
        </TouchableOpacity>
        <TextInput 
          style={styles.instructions}
          onChangeText={ (text) => this.setState({text}) }
          value={this.state.text}
        />
        <TextInput 
          style={styles.instructions}
          onChangeText={ (height) => this.setState({height}) }
        />
        <TextInput 
          style={styles.instructions}
          onChangeText={ (weight) => this.setState({weight}) }
        />
        <TouchableHighlight onPress={this.onPressButton}>
          <Text>Submit</Text>
        </TouchableHighlight>
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
        <TextInput 
          style={styles.instructions}
          onChangeText={ (poc) => this.setState({poc}) }
        />
        <Image
          style={{ width: 60, height: 70 }}
          source={{uri: `https://pokeadvisor.com/img/mon/${this.state.poc}.png`}}
        />
        <TouchableHighlight onPress={this.changeButton1}>
          <Text>Color1</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.changeButton2}>
          <Text>Color2</Text>
        </TouchableHighlight>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
