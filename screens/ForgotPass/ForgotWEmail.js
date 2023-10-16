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

const ForgotWEmail = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const phoneIcon = require('../../assets/sms.png'); // Assuming you have a phone icon image

  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };

  return (
    <ScrollView contentContainerStyle={styles.window}>
      <TouchableOpacity
        style={styles.backIcon}
        onPress={() => navigation.navigate('Login')}>
        <Image source={back} />
      </TouchableOpacity>

      <View style={styles.imageContainer}></View>

      <Text style={styles.textStyle1}>Reset Password</Text>
      <Text style={styles.textStyle2}>Enter your email, we will send a </Text>
        <Text style={styles.textStyle3}>verification code</Text>
      <Text style={styles.textLabel}>Email</Text>
      <View style={styles.inputFieldContainer}>
        <Image source={phoneIcon} />
        <TextInput
          style={styles.inputField}
          value={phoneNumber}
          onChangeText={handlePhoneNumberChange}
          placeholder="alexscth@email.com"
          placeholderTextColor="#C2C3CB"
         // keyboardType="phone-pad"
        />
      </View>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('ForgotWphone')}>
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
    fontFamily: 'Inter-Regular',
    fontSize: 30,
    bottom: '30%',
  },
  textStyle2: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginTop: -17,
    bottom: '27%',
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    marginTop: -17,
    bottom: '24%',
  },
  buttonStyle: {
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    top: '33%',
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

export default ForgotWEmail;
