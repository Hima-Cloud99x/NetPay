/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PassChanged = () => {
  const navigation = useNavigation();


  const yourImage = require('../../assets/Check.png');

  return (
    <View style={styles.window}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
       
          <Text style={styles.title}>Password Changed!</Text>
          <Text style={styles.description}>Password changed successfully,you can</Text>
          <Text style ={styles.description1}>login again with a new password</Text>
        <View style={styles.centeredContent}>
           <Image source={yourImage} style={styles.image} />  
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#111827',
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  centeredContent: {
    alignItems: 'center',
  },
  image: {
    width: 280,
    height: 180,
    marginTop: 20,
    bottom: '90%',
    right:'6%',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    marginTop: 20,
    top: '28%',
    fontStyle: 'bold',
  },
  description: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginVertical: 20,
    top: '28%',
  },
  description1:{
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginVertical: 20,
    top: '24%',
  },
  buttonStyle: {
    width: 350,
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    top: '20%',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
});

export default PassChanged;
