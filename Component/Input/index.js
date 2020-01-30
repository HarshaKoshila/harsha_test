
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  StatusBar,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');


import { styles } from "./style"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TextInput 
      style={styles.textInputStyle}  
      secureTextEntry={this.props.INPUT_TYPE === "PASSWORD"? true : false }
      onChangeText={(text) => this.props.onChange(text)}
      />  
    );
  }
}
