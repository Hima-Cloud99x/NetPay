/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
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
// import {useNavigation} from '@react-navigation/native';

// const ForgotPassword = () => {
//   const navigation = useNavigation();

//   const back = require('../../assets/Back.png');
//   const email = require('../../assets/mail.png');
//   const phone = require('../../assets/call.png');

//   const [option, setOption] = React.useState(0);

//   return (
//     <View style={styles.window}>
//       <ScrollView>
//         <View style={styles.imageContainer}>
//           <TouchableOpacity
//             style={styles.backIcon}
//             onPress={() => navigation.navigate('Login')}>
//             <Image source={back} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.textStyle1}>Forgot Password</Text>
//           <Text style={styles.textStyle2}>
//             Select verification method and we will send you verification code
//           </Text>
//           <View style={styles.container2}>
//             <TouchableOpacity style={styles.card} onPress={() => setOption(1)}>
//               <Image source={email} />
//               <View>
//                 <Text style={styles.textStyle3}>Email</Text>
//                 <Text style={styles.textStyle4}>Code send to your email</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.card} onPress={() => setOption(2)}>
//               <Image source={phone} />
//               <View>
//                 <Text style={styles.textStyle3}>Mobile Number</Text>
//                 <Text style={styles.textStyle4}>
//                   Code send to your mobile number
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             onPress={() => navigation.navigate('VerifyEmail')}>
//             <Text style={styles.buttonText}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// // onPress={() => {
// //   if (option === 1) {
// //     navigation.navigate('VerifyEmail');
// //   }
// // }}

// const styles = StyleSheet.create({
//   window: {
//     flex: 1,
//     backgroundColor: '#141416',
//   },
//   backIcon: {
//     width: 45,
//     height: 45,
//     marginTop: '7%',
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   container: {
//     marginLeft: '5%',
//     marginRight: '5%',
//   },
//   textStyle1: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 38,
//     marginTop: -5,
//   },
//   textStyle2: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//   },
//   buttonStyle: {
//     height: 65,
//     backgroundColor: '#7D5DF6',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 16,
//     color: '#F3F5F6',
//   },
//   container2: {
//     gap: 25,
//     marginTop: 35,
//     marginBottom: 44,
//   },
//   card: {
//     height: 80,
//     borderRadius: 10,
//     backgroundColor: '#23262F',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: '5%',
//     gap: 20,
//   },
//   selectedCard: {
//     height: 80,
//     borderRadius: 10,
//     backgroundColor: '#23262F',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: '5%',
//     gap: 20,
//     borderWidth: 2,
//     borderColor: '#455AF7',
//   },
//   textStyle3: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 18,
//   },
//   textStyle4: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//   },
// });

// export default ForgotPassword;

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

// const ForgotPassword = () => {
//   const navigation = useNavigation();

//   const back = require('../../assets/Back.png');
//   const email = require('../../assets/mail.png');
//   const phone = require('../../assets/call.png');

//   const [option, setOption] = React.useState(0);

//   return (
//     <View style={styles.window}>
//       <ScrollView>
//         <View style={styles.imageContainer}>
//           <TouchableOpacity
//             style={styles.backIcon}
//             onPress={() => navigation.navigate('Login')}>
//             <Image source={back} />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.container}>
//           <Text style={styles.textStyle1}>Forgot Password</Text>
//           <Text style={styles.textStyle2}>
//             Select verification method and we will
//           </Text>
//           <Text style={styles.textStyle2}>
//              send verification code
//           </Text>
//           <View style={styles.container2}>
//             <TouchableOpacity style={option === 1 ? styles.selectedCard : styles.card} onPress={() => setOption(1)}>
//               <Image source={email} />
//               <View>
//                 <Text style={styles.textStyle3}>Email</Text>
//                 <Text style={styles.textStyle4}>Code sent to your email</Text>
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity style={option === 2 ? styles.selectedCard : styles.card} onPress={() => setOption(2)}>
//               <Image source={phone} />
//               <View>
//                 <Text style={styles.textStyle3}>Mobile Number</Text>
//                 <Text style={styles.textStyle4}>
//                   Code sent to your mobile number
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//           {/* <TouchableOpacity
//           > */}
//             {/* <Text style={styles.buttonText}>Continue</Text> */}
//           {/* </TouchableOpacity> */}
//           <TouchableOpacity
//              style={styles.buttonStyle}
//             onPress={() => navigation.navigate('PhoneNo')}>
//              <Text style={styles.buttonText}>Continue</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   window: {
//     flex: 1,
//     backgroundColor: '#111827',
//   },
//   backIcon: {
//     width: 45,
//     height: 45,
//     marginTop: '7%',
//     left: 12,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   container: {
//     marginLeft: '5%',
//     marginRight: '5%',
//     height: 600,
//   },
//   textStyle1: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 38,
//     marginTop: -5,
//   },
//   textStyle2: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//   },
//   buttonStyle: {
//     height: 65,
//     backgroundColor: '#7D5DF6',
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontFamily: 'Poppins-Medium',
//     fontSize: 16,
//     color: '#F3F5F6',
//   },
//   container2: {
//     gap: 25,
//     marginTop: 35,
//     marginBottom: 44,
//   },
//   card: {
//     height: 80,
//     borderRadius: 10,
//     backgroundColor: '#23262F',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: '5%',
//     gap: 20,
//   },
//   selectedCard: {
//     height: 80,
//     borderRadius: 10,
//     backgroundColor: '#23262F',
//     alignItems: 'center',
//     flexDirection: 'row',
//     paddingLeft: '5%',
//     gap: 20,
//     borderWidth: 2,
//     borderColor: '#455AF7',
//   },
//   textStyle3: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 18,
//   },
//   textStyle4: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 14,
//   },
// });

// export default ForgotPassword;

// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Image,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const email = require('../../assets/mail.png');
  const phone = require('../../assets/call.png');

  const [option, setOption] = React.useState(0);

  return (
    <View style={styles.window}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('Login')}>
            <Image source={back} />
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle1}>Forgot Password</Text>
        <Text style={styles.textStyle2}>
          Select verification method and we will
        </Text>
        <Text style={styles.textStyle2}>send verification code</Text>
        <TouchableOpacity
          style={option === 1 ? styles.selectedCard : styles.card}
          onPress={() => setOption(1)}>
          <Image source={email} />
          <View>
            <Text style={styles.textStyle3}>Email</Text>
            <Text style={styles.textStyle4}>Code sent to your email</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={option === 2 ? styles.selectedCard : styles.card}
          onPress={() => setOption(2)}>
          <Image source={phone} />
          <View>
            <Text style={styles.textStyle3}>Mobile Number</Text>
            <Text style={styles.textStyle4}>
              Code sent to your mobile number
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate('PhoneNo')}>
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
  backIcon: {
    width: 45,
    height: 45,
    marginTop: '7%',
    left: 12,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    marginLeft: '5%',
    marginRight: '5%',
    paddingTop: '10%',
    paddingBottom: '10%',
    alignItems: 'center',
  },
  textStyle1: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 38,
    marginTop: -5,
  },
  textStyle2: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonStyle: {
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '15%',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
  card: {
    height: 80,
    borderRadius: 10,
    backgroundColor: '#23262F',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    gap: 20,
    marginBottom: 20,
    width: '100%',
  },
  selectedCard: {
    height: 80,
    borderRadius: 10,
    backgroundColor: '#23262F',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    gap: 20,
    borderWidth: 2,
    borderColor: '#455AF7',
    marginBottom: 25,
    width: '100%',
  },
  textStyle3: {
    color: '#fff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  textStyle4: {
    color: '#ACADB9',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});

export default ForgotPassword;
