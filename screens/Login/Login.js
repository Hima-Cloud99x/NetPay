/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


// /* eslint-disable prettier/prettier */
// /* eslint-disable react-native/no-inline-styles */
// /* eslint-disable no-trailing-spaces */
// /* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const navigation = useNavigation();

  // Importing necessary images/icons
  const back = require('../../assets/Back.png');
  const emailIcon = require('../../assets/sms.png');
  const lockIcon = require('../../assets/lock.png');
  const eyeOffIcon = require('../../assets/eye.png');
  const google = require('../../assets/google.png');
  const apple = require('../../assets/logo.png');

  // State variables to store user input
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [eye, setEye] = React.useState(false);

  // Event handlers for input field changes
  // eslint-disable-next-line no-shadow
  const handleEmailChange = email => {
    setEmail(email);
  };
  // eslint-disable-next-line no-shadow
  const handlePasswordChange = password => {
    setPassword(password);
  };

  return (
    <ScrollView contentContainerStyle={styles.window}>
      {/* Back button for navigation */}
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate('Welcome')}>
        <Image source={back} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {/* Logo or other images can be added here */}
      </View>

      {/* Title */}
      <Text style={styles.textStyle1}>Welcome back!</Text>
      <Text style={styles.textStyle2}>Sign in to your account</Text>

      {/* Text label for email field */}
      <Text style={styles.textLabel1}>Email</Text>
      <View style={styles.inputFieldContainer}>
        <Image source={emailIcon} />
        {/* Email input field */}
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Enter Your Email"
          placeholderTextColor="#C2C3CB"
        />
      </View>

      {/* Text label for password field */}
      <Text style={styles.textLabel}>Password</Text>
      <View style={styles.inputFieldContainer}>
        <Image source={lockIcon} />
        {/* Password input field */}
        <TextInput
          style={[styles.inputField, { width: 255 }]}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          placeholderTextColor="#C2C3CB"
          secureTextEntry={!eye}
        />
        {/* Toggle password visibility */}
        <TouchableOpacity onPress={() => setEye(!eye)}>
          <Image source={eyeOffIcon} />
        </TouchableOpacity>
      </View>

      {/* Forget password link */}
      {/* <TouchableOpacity
        style={{ alignSelf: 'flex-end', marginBottom: 20 }}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgetPassword}>Forget Password ?</Text>
      </TouchableOpacity> */}

      {/* Forget password link */}
        <View style={styles.forgetPasswordContainer}>
        <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.forgetPassword, { marginTop: -40 },{left: '68%'}]}>
            Forget Password ?
            </Text>
        </TouchableOpacity>
        </View>

      {/* Login button */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.buttonStyle1}
         onPress={() => navigation.navigate('Home')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={google} />
            <Text style={styles.buttonText1}>Login with google</Text>
        </View>
        </TouchableOpacity>


      <View style={{ alignSelf: 'center', flexDirection: 'row', gap: 5 }}>
        <Text style={[styles.buttonText, { color: '#ACADB9' }]}>
          Create New Account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={[styles.buttonText, { color: '#7D5DF6' }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#111827',
    paddingHorizontal: '5%',
    paddingTop: '7%',
    justifyContent: 'center',
  },
  backIcon: {
    width: 45,
    height: 45,
    position: 'absolute',
    top: 20,
    left: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  inputFieldContainer: {
    backgroundColor: '#23262F',
    height: 65,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    marginBottom: 20,
    bottom: '10%',
  },
  inputField: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#C2C3CB',
    paddingTop: 13,
    marginLeft: 10,
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 30,
    bottom: '15%',
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: -17,
    bottom: '12%',
 },
  buttonStyle: {
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonStyle1: {
    height: 65,
    backgroundColor: '#4B5563',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
  buttonText1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
    right: -10,
  },
  
  forgetPassword: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#7D5DF6',
    bottom: '5%',
  },
  textLabel1: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    bottom: '5%',
  },
  textLabel: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    bottom: '5%',
  },
});


export default Login;
