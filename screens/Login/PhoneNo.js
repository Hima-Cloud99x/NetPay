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
// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
//   TextInput,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';


// const PhoneNo = () => {
//   const navigation = useNavigation();

//   // Importing necessary images/icons
//   const back = require('../../assets/Back.png');
//   const emailIcon = require('../../assets/sms.png');
  
//   // State variables to store user input
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [eye, setEye] = React.useState(false);

//   // Event handlers for input field changes
//   // eslint-disable-next-line no-shadow
//   const handleEmailChange = email => {
//     setEmail(email);
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.window}>
//       {/* Back button for navigation */}
//       <TouchableOpacity
//         style={styles.backIcon}
//         onPress={() => navigation.navigate('Welcome')}>
//         <Image source={back} />
//       </TouchableOpacity>

//       <View style={styles.imageContainer}>
//         {/* Logo or other images can be added here */}
//       </View>

//       {/* Title */}
//       <Text style={styles.textStyle1}>Welcome back!</Text>
//       <Text style={styles.textStyle2}>Sign in to your account</Text>

//       {/* Text label for email field */}
//       <Text style={styles.textLabel1}>Email</Text>
//       <View style={styles.inputFieldContainer}>
//         <Image source={emailIcon} />
//         {/* Email input field */}
//         <TextInput
//           style={styles.inputField}
//           value={email}
//           onChangeText={handleEmailChange}
//           placeholder="Enter Your Email"
//           placeholderTextColor="#C2C3CB"
//         />
//       </View>


//       {/* Login button */}
//       <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={() => navigation.navigate('Home')}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   window: {
//     flex: 1,
//     backgroundColor: '#111827',
//     paddingHorizontal: '5%',
//     paddingTop: '7%',
//     justifyContent: 'center',
//   },
//   backIcon: {
//     width: 45,
//     height: 45,
//     position: 'absolute',
//     top: 20,
//     left: 20,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 30,
//   },
//   inputFieldContainer: {
//     backgroundColor: '#23262F',
//     height: 65,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     paddingLeft: '5%',
//     paddingRight: '5%',
//     marginBottom: 20,
//     bottom: '10%',
//   },
//   inputField: {
//     flex: 1,
//     fontFamily: 'Poppins-Medium',
//     fontSize: 14,
//     color: '#C2C3CB',
//     paddingTop: 13,
//     marginLeft: 10,
//   },
//   textStyle1: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 30,
//     bottom: '15%',
//   },
//   textStyle2: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 16,
//     marginTop: -17,
//     bottom: '12%',
//  },
//   buttonStyle: {
//     height: 65,
//     backgroundColor: '#7D5DF6',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   buttonText: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 16,
//     color: '#F3F5F6',
//   },
  
//   forgetPassword: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 14,
//     color: '#7D5DF6',
//     bottom: '5%',
//   },
//   textLabel1: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Medium',
//     fontSize: 14,
//     bottom: '5%',
//   },
// });


// export default PhoneNo;

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

const PhoneNo = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const phoneIcon = require('../../assets/phoneicon.png'); // Assuming you have a phone icon image

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.window}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate('Welcome')}>
        <Image source={back} />
      </TouchableOpacity>

      <View style={styles.imageContainer}></View>

      <Text style={styles.textStyle1}>Set Up 2-Step Verification</Text>
      <Text style={styles.textStyle2}>Enter your phone number, we will send an </Text>
        <Text style={styles.textStyle3}>authentication code</Text>
      <Text style={styles.textLabel}>Mobile Number</Text>
      <View style={styles.inputFieldContainer}>
        <Image source={phoneIcon} />
        <TextInput
          style={styles.inputField}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          placeholder="Enter Your Mobile Number"
          placeholderTextColor="#C2C3CB"
          keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
    top: 40,
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
    paddingLeft: '7%',
    paddingRight: '7%',
    marginBottom: 20,
    bottom: '42%',

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
    bottom: '30%',
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -17,
    bottom: '27%',
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -17,
    bottom: '25%',
  },
  buttonStyle: {
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    bottom: '13%',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
  textLabel: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    bottom: '20%',
  },
});

export default PhoneNo;
