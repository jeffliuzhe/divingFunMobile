/**
 * Created by zheliu on 3/28/17.
 */
import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width; // 320, 320, 375, 414
const windowHeight = Dimensions.get('window').height; // 480, 568, 667, 736
const LoginStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 0.6,    // 0.7 if no signUp
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight*40/667,

  },
  bgImage: {
    backgroundColor: 'blue',
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0,
    resizeMode: 'cover'
  },
  logo: {
    flex: 1,
    width: 200,
    height: 300,
    resizeMode: 'contain',
  },
  fields: {
    flex: 0.4,    // 0.3 if no signUp
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  emailField: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: windowWidth*25/375,
    marginRight: windowWidth*25/375,
    marginBottom: windowHeight*10/667,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    backgroundColor: 'transparent',
  },
  emailInput: {
    flex: 1,  // make sure that TextInput takes over all of email or password field
    width: windowWidth - windowWidth*50/375,
    textAlign: 'left',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  passwordField: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: windowWidth*25/375,
    marginRight: windowWidth*25/375,
    marginBottom: windowHeight*5/667,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
    backgroundColor: 'transparent',
  },
  signUp: {
    flex: 0.1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    // alignSelf: 'center'
  },
  button: {
    flex: 0.1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
  },
  login: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  signUpText: {fontFamily: 'Cochin', fontSize: 16, color: 'white', fontWeight: 'bold',},
  forgotBtn: {flex: 3, backgroundColor: 'transparent', paddingLeft: 15, alignItems: 'flex-start', justifyContent: 'center'},
  signUpBtn: {flex: 2, backgroundColor: 'transparent', paddingRight: 15, alignItems: 'flex-end', justifyContent: 'center'},
});

export {
  LoginStyles,
}