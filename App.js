/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');


import { styles } from "./Style/style"

//Reusable Component
import INPUT from "./Component/Input";
import BUTTON from "./Component/button";

//Action
import { check_email } from "./Action/validationCtrl"


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  onChangeEmail = (email) => {
    this.setState({ email, errorMessage: "" })
  }

  onChangePassword = (password) => {
    this.setState({ password, errorMessage: "" })
  }

  onPressSignInButton() {
    if (Boolean(this.state.email) && Boolean(this.state.password)) {
           if(check_email(this.state.email)){
               alert("Login Successful")
           }
           else{
            this.setState({ errorMessage: "Please enter valid email" })
           }
    }
    else {
      this.setState({ errorMessage: "Email and Input field are required" })
    }
  }

  render() { 
    return (
      <View style={styles.container}>

        <View style={styles.top}>

        </View>

        <View style={styles.center}>

          <View style={styles.centerInner}>

            <View style={styles.centerInnerItem}>
              <Text style={styles.textLabel}>Email</Text>
              <INPUT INPUT_TYPE="TEXT" onChange={this.onChangeEmail} />
            </View>

            <View style={styles.centerInnerItem}>
              <Text style={styles.textLabel}>Password</Text>
              <INPUT INPUT_TYPE="PASSWORD" onChange={this.onChangePassword} />
            </View>

            {this.state.errorMessage? <View style={{ ...styles.centerInnerItem, justifyContent: "flex-end", }}>
              <Text style={styles.errorTextLabel}>{this.state.errorMessage}</Text>
            </View> : null }

            <View style={{ ...styles.centerInnerItem, justifyContent: "flex-end" }}>
              <BUTTON onPress={() => this.onPressSignInButton()} />
            </View>

          </View>

        </View>


      </View>
    );
  }
}

