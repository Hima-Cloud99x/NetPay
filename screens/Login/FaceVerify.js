/* eslint-disable prettier/prettier */
// FaceVerify.js

// import React from 'react';
// import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import PhoneNo from './PhoneNo';

// const FaceVerify = () => {
//   const navigation = useNavigation();

//   const back = require('../../assets/Back.png');
//   const yourImage = require('../../assets/FaceVer.png');
//   const backgroundColor = '#CFD7E2'; // Customize the background color

//   const navigateToOtherPage = () => {
//     // Define the navigation logic here to navigate to other pages
//     // Example: navigation.navigate('OtherPage');
//   };

//   return (
//     <View style={[styles.window, { backgroundColor: backgroundColor }]}>
//       <Image source={yourImage} style={styles.image} resizeMode="cover" />
//       <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
//         <Image source={back} />
//       </TouchableOpacity>
//       <View style={styles.centeredContent}>
//         <Text style={styles.title}>Title</Text>
//         <Text style={styles.description}>Description</Text>
//         <TouchableOpacity onPress={navigateToOtherPage} style={styles.clickableImage}>
//           <Image source={require('../../assets/But.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={PhoneNo} style={styles.clickableImage1}>
//           <Image source={require('../../assets/Button.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={PhoneNo} style={styles.clickableImage2}>
//           <Image source={require('../../assets/Buttonn.png')} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   window: {
//     flex: 1,
//   },
//   backIcon: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//   },
//   centeredContent: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%', // Take the full width of the screen
//     height: 850,     // Define the desired height
//     position: 'absolute',
//     top: 0,
//     left: 0,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     marginTop: 10,
//   },
//   clickableImage: {
//     position: 'absolute',
//     // Define the position and size of your clickable images
//     // Example:
//     top: '85%',
//     left: '42%',
//     width: 100,
//     height: 100,
//   },
//   clickableImage1:{
//     top: '39%',
//     right: '20%',
//   },
//   clickableImage2: {
//     top:'32%',
//     left: '23%',
//   },
// });

// export default FaceVerify;
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PhoneNo from './PhoneNo';

const FaceVerify = () => {
  const navigation = useNavigation();

  const yourImage = require('../../assets/FaceVer.png');
  const backgroundColor = '#CFD7E2'; // Customize the background color

  const navigateToOtherPage = () => {
    // Define the navigation logic here to navigate to other pages
    // Example: navigation.navigate('OtherPage');
    navigation.navigate('Sucess'); // Replace 'OtherPage' with the actual route name
  };

  return (
    <View style={[styles.window, { backgroundColor: backgroundColor }]}>
      <Image source={yourImage} style={styles.image} resizeMode="cover" />
      <View style={styles.centeredContent}>
        <Text style={styles.title}>Center yor face</Text>
        <Text style={styles.description}>point your face right at the box,then take a photo.</Text>
        <TouchableOpacity onPress={navigateToOtherPage} style={styles.clickableImage}>
          <Image source={require('../../assets/But.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToOtherPage} style={styles.clickableImage1}>
          <Image source={require('../../assets/Button.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToOtherPage} style={styles.clickableImage2}>
          <Image source={require('../../assets/Buttonn.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%', // Take the full width of the screen
    height: 850,     // Define the desired height
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
    top: '30%',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: '#fff',
    top: '30%',
  },
  clickableImage: {
    position: 'absolute',
    top: '85%',
    left: '42%',
    width: 100,
    height: 100,
  },
  clickableImage1: {
    top: '39%',
    right: '20%',
  },
  clickableImage2: {
    top: '32%',
    left: '23%',
  },
});

export default FaceVerify;
