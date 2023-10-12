/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const FaceID = () => {
//   const navigation = useNavigation();

//   const back = require('../../assets/Back.png');
//   const yourImage = require('../../assets/Face.png');

//   return (
//     <View style={styles.window}>
//       <ScrollView contentContainerStyle={styles.scrollContent}>
//         <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
//           <Image source={back} />
//           <Text style={styles.title}>Face ID Verification</Text>
//           <Text style={styles.description}>Unlock Paypay with your face ID quick and</Text>
//           <Text style ={styles.description1}>secured</Text>
//         </TouchableOpacity>
//         <View style={styles.centeredContent}>
//            <Image source={yourImage} style={styles.image} />  
//         </View>
//         <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('FaceID')}>
//           <Text style={styles.buttonText}>Scan my face</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   window: {
//     flex: 1,
//     backgroundColor: '#111827',
//   },
//   scrollContent: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexGrow: 1,
//   },
//   backIcon: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//   },
//   centeredContent: {
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//     marginTop: 20,
//     top: '2%',
//   },
//   title: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 25,
//     marginTop: 20,
//   },
//   description: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     marginVertical: 20,
//     bottom: '6%',
//     // textAlign: 'center',
//     // width: '70%',
//   },
//   description1:{
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//     marginVertical: 20,
//     bottom: '24%',
//   },
//   buttonStyle: {
//     width: 350,
//     height: 65,
//     backgroundColor: '#7D5DF6',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: 20,
//     top: '22%',
//   },
//   buttonText: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 16,
//     color: '#F3F5F6',
//   },
// });

// export default FaceID;

import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FaceID = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const yourImage = require('../../assets/Face.png');

  return (
    <View style={styles.window}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Image source={back} />
          <Text style={styles.title}>Face ID Verification</Text>
          <Text style={styles.description}>Unlock Paypay with your face ID quick and</Text>
          <Text style ={styles.description1}>secured</Text>
        </TouchableOpacity>
        <View style={styles.centeredContent}>
           <Image source={yourImage} style={styles.image} />  
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate('FaceVerify')}>
          <Text style={styles.buttonText}>Scan my face</Text>
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
    width: 300,
    height: 300,
    marginTop: 20,
    top: '2%',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 25,
    marginTop: 20,
  },
  description: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginVertical: 20,
    bottom: '6%',
  },
  description1:{
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginVertical: 20,
    bottom: '24%',
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
