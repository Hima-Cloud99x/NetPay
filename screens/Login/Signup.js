/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
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
import React, { useState } from 'react';
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

const Signup = () => {
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
  const [name, setName] = React.useState('');
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

  const handleNameChange = name => {
    setName(name);
  };



  const [isChecked, setIsChecked] = useState(false);

  

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };


  return (
    <ScrollView contentContainerStyle={styles.window}>
      {/* Back button for navigation */}
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate('Login')}>
        <Image source={back} />
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        {/* Logo or other images can be added here */}
      </View>

      {/* Title */}
      <Text style={styles.textStyle1}>Sign up</Text>
      <Text style={styles.textStyle2}>Create account and enjoy all services </Text>

      {/* Text label for email field */}
      <Text style={styles.textLabel1}>Full Name</Text>
      <View style={styles.inputFieldContainer}>
        <Image source={emailIcon} />
        {/* Email input field */}
        <TextInput
          style={styles.inputField}
          value={name}
          onChangeText={handleNameChange}
          placeholder="Full Name"
          placeholderTextColor="#C2C3CB"
        />
      </View>

      {/* Text label for email field */}
      <Text style={styles.textLabel1}>Email</Text>
      <View style={styles.inputFieldContainer}>
        <Image source={emailIcon} />
        {/* Email input field */}
        <TextInput
          style={styles.inputField}
          value={email}
          onChangeText={handleEmailChange}
          placeholder="Email Address"
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
      
       {/* Checkbox */}
       <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={toggleCheckbox}>
          <Image
            source={isChecked ? require('../../assets/checked.png') : require('../../assets/Checkbox.png')}
            style={styles.checkboxIcon}
          />
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>
    I agree to the company {' '} and {' '} 
    <Text style={{ color: '#7D5DF6' }}>Terms of Services </Text>
    <Text style={{ color: '#7D5DF6' }}>Privacy Policy</Text>
  </Text>
  </View>
      
{/* 

      Forget password link
        <View style={styles.forgetPasswordContainer}>
        <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={[styles.forgetPassword, { marginTop: -40 },{left: '68%'}]}>
            Forget Password ?
            </Text>
        </TouchableOpacity>
        </View> */}


      {/* Login button */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.buttonStyle1}
         onPress={() => navigation.navigate('Home')}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={google} />
            <Text style={styles.buttonText1}>Sign up with google</Text>
        </View>
        </TouchableOpacity>


      <View style={{ alignSelf: 'center', flexDirection: 'row', gap: 5 }}>
        <Text style={[styles.buttonText, { color: '#ACADB9' }]}>
          Have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.buttonText, { color: '#7D5DF6' }]}>Login</Text>
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
    top: 30,
    left: 16,
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
    bottom: '4%',
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
    fontSize: 28,
    bottom: '8%',
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: -17,
    bottom: '5%',
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
    bottom: '2%',
  },
  textLabel: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    bottom: '2%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    width: 290,
  },
  checkboxIcon: {
    width: 24,
    height: 24,
    left: 40,
    bottom: 38,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#C2C3CB',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    bottom: 34,
    left: 50,
  },
});


export default Signup;
