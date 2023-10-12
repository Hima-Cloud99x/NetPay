/* eslint-disable prettier/prettier */
// FaceVerify.js
// // FaceVerify.js
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FaceVerify = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const yourImage = require('../../assets/FaceVer.png');
  const backgroundColor = '#CFD7E2'; // Customize the background color

  const navigateToOtherPage = () => {
    // Define the navigation logic here to navigate to other pages
    // Example: navigation.navigate('OtherPage');
  };

  return (
    <View style={[styles.window, { backgroundColor: backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Image source={back} />
        </TouchableOpacity>
        <View style={styles.centeredContent}>
          <Image source={yourImage} style={styles.image} resizeMode="cover" />
          <Text style={styles.title}>Title</Text>
          <Text style={styles.description}>Description</Text>
          <TouchableOpacity onPress={navigateToOtherPage}>
            <Image source={require('../../assets/mail.png')} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
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
    width: 420,
    height: 850,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default FaceVerify;
