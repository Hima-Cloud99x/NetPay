/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */


import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FaceID = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const yourImage = require('../../assets/sec.png');
  const img = require('../../assets/first.png');

  return (
    <View style={styles.window}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack('Home')}>
          <Image source={back} />
          <Text style={styles.title}>Notification</Text>
          {/* <Text style={styles.description}>Unlock Paypay with your face ID quick and</Text> */}
        </TouchableOpacity>
        <View style={styles.centeredContent}>
       
           <Image source={yourImage} style={styles.image} /> 
           <Text style={styles.today}>TODAY</Text> 
        </View>
        <View style={styles.centeredContent}>
           <Image source={img} style={styles.image1} /> 
           <Text style={styles.yes}>YESTERDAY</Text>  
        </View>
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
  image1: {
    width: 370,
    height: 500,
    marginTop: 20,
    top: '40%',
  },

  image: {
    top: '35%',
    width: 370,
    height: 500,
  },

  title: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    marginTop: 20,
    bottom: '67%',
    left: '90%',
  },
  today: {
    color: '#9CA3AF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    bottom: '68%',
    right: '40%',
  },
  yes:{
    bottom: '59%',
    color: '#9CA3AF',
    fontSize: 14,
    right: '36%',
  },
  description1:{
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginVertical: 20,
    bottom: '24%',
    right: '40%',
  },
  buttonStyle: {
    width: 350,
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    top: '22%',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
});

export default FaceID;
