
import React, { Component } from 'react';
import {
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width, height } = Dimensions.get('window');

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { styles } from "./style"

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => this.props.onPress()}>
        <Text style={styles.textLabel}>Sign-In</Text>
      </TouchableOpacity>
    );
  }
}
