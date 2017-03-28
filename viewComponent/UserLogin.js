/**
 * Created by zheliu on 3/28/17.
 */
import React, { Component }  from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  findNodeHandle,
  Keyboard
} from 'react-native';
import {LoginStyles} from '../pageStyle/LoginStyles';



var keyboardWillShowListener = null;
var keyboardWillHideListener = null;

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this._onPressLogin = this._onPressLogin.bind(this);
    this._onPressSignup = this._onPressSignup.bind(this);
    this._onPressForgotPassword = this._onPressForgotPassword.bind(this);
    this._onPressResetPassword = this._onPressResetPassword.bind(this);
    this._onPressCancel = this._onPressCancel.bind(this);
    this._onPressStart = this._onPressStart.bind(this);
    this.keyboardWillShow = this.keyboardWillShow.bind(this);
    this.keyboardWillHide = this.keyboardWillHide.bind(this);
    this.state = {
      keyboardHeight: 0,
      email: '',
      password: '',
      errorMessage: null,
      login: null,
      signUp: null,
      forgotPwd: null,
    };
  }



  componentWillMount() {
    keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow); 
    keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide); 
  }

  componentWillUnmount() {

    keyboardWillShowListener.remove();
    keyboardWillHideListener.remove();

  }

  componentDidMount() {
      this.setState({login: true});
  }

  keyboardWillShow(e) {
    this.setState({keyboardHeight: e.endCoordinates.height});

    // inputFocused(this,'signUpField','scrollView');
  }

  keyboardWillHide(e) {
    this.setState({keyboardHeight: 0});
    // inputFocused(this,'header','scrollView');
  }

  _onPressLogin() {

    console.log("Clicked login");
    console.log("email: " + this.state.email);
    console.log("password: " + this.state.password);
    if(this.state.login) {
      if(this.state.email==='123' && this.state.password==='123') {

      }

    } else if(this.state.signUp) {

    } else {

    }

  }

  _onPressSignup() {
    this.setState({login: false, signUp: true, forgotPwd: false});
  }

  _onPressForgotPassword() {
    this.setState({login: false, signUp: false, forgotPwd: true});
  }

  _onPressResetPassword() {
  }

  _onPressCancel() {
    this.setState({login: true, signUp: false, forgotPwd: false, errorMessage: null});
  }
  _onPressStart() {
    this.setState({firstCome: false, login: true});
  }
  render() {

    if(this.state.login) {
      return (
        <View style={{flex: 1}}>
          <Image source={{uri: 'SplashBackground'}} style={LoginStyles.bgImage} />
          <ScrollView ref = 'scrollView'
                      keyboardDismissMode = 'interactive'
                      keyboardShouldPersistTaps = {true}
                      contentContainerStyle = {LoginStyles.container}
                      contentInset = {{top:0,left:0,bottom:this.state.keyboardHeight,right:0}}
                      scrollIndicatorInsets = {{top:0,left:0,bottom:this.state.keyboardHeight,right:0}}>
            <View ref = 'header' style={LoginStyles.header}>
              <Image source={{uri: 'LoginLogo'}} style={LoginStyles.logo} />
            </View>
            <Text style={{fontSize: 15, color: 'red', backgroundColor: 'transparent', textAlign: 'center', padding: 4,}}>{this.state.errorMessage}</Text>
            <View style={LoginStyles.fields}>
              <View ref = 'emailField' style={LoginStyles.emailField}>
                <Text style={{fontSize: 14, color: 'white', opacity: 0.8, fontFamily: 'Cochin'}}>Email</Text>
                <TextInput ref='email'
                           style={LoginStyles.emailInput}
                           keyboardType='email-address'
                           onChange={(event) => {this.setState({email: event.nativeEvent.text})}}
                           value={this.state.email}
                           autoCapitalize = {'none'}
                           autoCorrect = {false} />
              </View>
              <View ref = 'passwordField' style={LoginStyles.passwordField}>
                <Text style={{fontSize: 14, color: 'white', opacity: 0.8, fontFamily: 'Cochin'}}>Password</Text>
                <TextInput style={LoginStyles.emailInput}
                           secureTextEntry={true}
                           onChange={(event) => this.setState({password: event.nativeEvent.text})}
                           returnKeyType={'go'}
                           onKeyPress={(e) => {if(e.nativeEvent.key === "Enter") { this._onPressLogin(); }}} />
              </View>
              <TouchableHighlight style = {LoginStyles.button} onPress={this._onPressLogin}>
                <Text style={LoginStyles.login}>Log in</Text>
              </TouchableHighlight>
              <View ref = 'signUpField' style={LoginStyles.signUp} >
                <TouchableHighlight style = {LoginStyles.forgotBtn} onPress={this._onPressForgotPassword}>
                  <View >
                    <Text style = {LoginStyles.signUpText}>Forgot password</Text>
                  </View>
                </TouchableHighlight>
                <View style={{flex: 1}} />
                <TouchableHighlight style = {LoginStyles.signUpBtn} onPress={this._onPressSignup}>
                  <View >
                    <Text style = {LoginStyles.signUpText}>Sign up</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else if(this.state.signUp) {
      return (
        <View style={{flex: 1}}>
          <Image source={{uri: 'SplashBackground'}} style={LoginStyles.bgImage} />
          <ScrollView ref = 'scrollView'
                      keyboardDismissMode = 'interactive'
                      keyboardShouldPersistTaps = {true}
                      contentContainerStyle = {LoginStyles.container}
                      contentInset = {{top:0,left:0,bottom:this.state.keyboardHeight,right:0}}
                      scrollIndicatorInsets = {{top:0,left:0,bottom:this.state.keyboardHeight,right:0}}>
            <View ref = 'header' style={LoginStyles.header}>
              <Image source={{uri: 'LoginLogo'}} style={LoginStyles.logo} />
            </View>
            <Text style={{fontSize: 15, color: 'red', backgroundColor: 'transparent', textAlign: 'center', padding: 4,}}>{this.state.errorMessage}</Text>
            <View style={LoginStyles.fields}>
              <View ref = 'emailField' style={LoginStyles.emailField}>
                <Text style={{fontSize: 14, color: 'white', opacity: 0.8, fontFamily: 'Cochin'}}>Email</Text>
                <TextInput ref='email'
                           style={LoginStyles.emailInput}
                           keyboardType='email-address'
                           onChange={(event) => {this.setState({email: event.nativeEvent.text})}}
                           value={this.state.email}
                           autoCapitalize = {'none'}
                           autoCorrect = {false} />
              </View>
              <View ref = 'passwordField' style={LoginStyles.passwordField} />
              <TouchableHighlight style = {LoginStyles.button} onPress={this._onPressLogin}>
                <Text style={LoginStyles.login}>Sign up</Text>
              </TouchableHighlight>
              <View ref = 'signUpField' style={LoginStyles.signUp} >
                <TouchableHighlight style = {[LoginStyles.button, {backgroundColor: 'transparent'}]} onPress={this._onPressCancel}>
                  <View >
                    <Text style = {LoginStyles.signUpText}>Cancel</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </View>
      );
    } else if(this.state.forgotPwd) {
      return (
        <View style={{flex: 1}}>
          <Image source={{uri: 'SplashBackground'}} style={LoginStyles.bgImage} />
          <ScrollView ref = 'scrollView'
                      keyboardDismissMode = 'interactive'
                      keyboardShouldPersistTaps = {true}
                      contentContainerStyle = {LoginStyles.container}
                      contentInset = {{top:0,left:0,bottom:this.state.keyboardHeight,right:0}}
                      scrollIndicatorInsets = {{top:0,left:0,bottom:this.state.keyboardHeight,right:0}}>
            <View ref = 'header' style={LoginStyles.header}>
              <Image source={{uri: 'LoginLogo'}} style={LoginStyles.logo} />
            </View>
            <Text style={{fontSize: 15, color: 'red', backgroundColor: 'transparent', textAlign: 'center', padding: 4,}}>{this.state.errorMessage}</Text>
            <View style={LoginStyles.fields}>
              <View ref = 'emailField' style={LoginStyles.emailField}>
                <Text style={{fontSize: 14, color: 'white', opacity: 0.8, fontFamily: 'Cochin'}}>Email</Text>
                <TextInput ref='email'
                           style={LoginStyles.emailInput}
                           keyboardType='email-address'
                           onChange={(event) => {this.setState({email: event.nativeEvent.text})}}
                           value={this.state.email}
                           autoCapitalize = {'none'}
                           autoCorrect = {false} />
              </View>
              <View ref = 'passwordField' style={LoginStyles.passwordField} />
              <TouchableHighlight style = {LoginStyles.button}  onPress={this._onPressResetPassword}>
                <Text style={LoginStyles.login}>Reset password</Text>
              </TouchableHighlight>
              <View ref = 'signUpField' style={LoginStyles.signUp} >
                <TouchableHighlight style = {[LoginStyles.button, {backgroundColor: 'transparent'}]} onPress={this._onPressCancel}>
                  <View >
                    <Text style = {LoginStyles.signUpText}>Cancel</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </ScrollView>
        </View>
      );

    } else {
      console.log('Error: invalid states login, signUp, forgotPwd', this.state.login, this.state.signUp, this.state.forgotPwd);
      return <View />;
    }
  }


}

module.exports = UserLogin;
