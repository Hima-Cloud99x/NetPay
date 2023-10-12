/* eslint-disable prettier/prettier */

import {View, StyleSheet, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';


const Welcome = () => {
  const navigation = useNavigation();

  const image = require('../../assets/Steps.png');
  const ima = require('../../assets/Info.png');
  const ima1 = require('../../assets/logoa.png');
  StatusBar.setBackgroundColor('#111827');

  return (
    <View style={styles.container}>
      <Image source={ima1} style={styles.pic1} />
      <Image source={image} style={styles.image} />
      <Image source={ima} style={styles.pic} />
      <Text style={styles.textStyle}>Before you started</Text>
      <Text style={styles.textStyle1}>
        Each section will need to be filled,it only take a couple of minutes.
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827', // Change the background color here
  },
  image: {
    marginTop: 20,
    top:'15%', // Adjust the margin as needed to move the image down
  },
  pic: {
    top: '17%',
  },
  pic1: {
    bottom: '5%',
  },
  textStyle: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 33,
    textAlign: 'center',
    width: 380,
    bottom: '55%',
     // You can adjust this margin as needed
  },
  textStyle1: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'center',
    width: 300,
    marginBottom: '5%',
    bottom:'53%', // You can adjust this margin as needed
  },
  buttonStyle: {
    marginTop: 10, // Adjust the margin as needed to move the button down
    bottom: '10%',
    alignSelf: 'flex-end',
    right: '10%',
    top: '6%',
    backgroundColor: '#7D5DF6', // Change the button color here
    padding: 10,
    borderRadius: 15,
    width: 327,
    height: 56,
  },
  buttonText: {
    // color: '#ffffff',
    // fontSize: 18,
    // textAlign: 'center',
    // padding: 10,
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '1%',
  },
});

export default Welcome;
