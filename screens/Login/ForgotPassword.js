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

const ForgotPassword = () => {
  const navigation = useNavigation();

  const back = require('../../assets/Back.png');
  const email = require('../../assets/mail.png');
  const phone = require('../../assets/call.png');

  const [option, setOption] = React.useState(0);

  return (
    <View style={styles.window}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => navigation.navigate('Login')}>
            <Image source={back} />
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle1}>Forgot Password</Text>
          <Text style={styles.textStyle2}>
            Select verification method and we will send you verification code
          </Text>
          <View style={styles.container2}>
            <TouchableOpacity style={option === 1 ? styles.selectedCard : styles.card} onPress={() => setOption(1)}>
              <Image source={email} />
              <View>
                <Text style={styles.textStyle3}>Email</Text>
                <Text style={styles.textStyle4}>Code sent to your email</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={option === 2 ? styles.selectedCard : styles.card} onPress={() => setOption(2)}>
              <Image source={phone} />
              <View>
                <Text style={styles.textStyle3}>Mobile Number</Text>
                <Text style={styles.textStyle4}>
                  Code sent to your mobile number
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              if (option === 1) {
                // Redirect to the "VerifyEmail" screen when option is 1
                navigation.navigate('Login');
              } else if (option === 2) {
                // You can add logic here to handle the mobile number verification option
                // For example: navigation.navigate('VerifyMobile');
              }
            }}
          > */}
            {/* <Text style={styles.buttonText}>Continue</Text> */}
          {/* </TouchableOpacity> */}
          <TouchableOpacity
             style={styles.buttonStyle}
            onPress={() => navigation.navigate('Login')}>
             <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    flex: 1,
    backgroundColor: '#141416',
  },
  backIcon: {
    width: 45,
    height: 45,
    marginTop: '7%',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    marginLeft: '5%',
    marginRight: '5%',
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
  },
  buttonStyle: {
    height: 65,
    backgroundColor: '#7D5DF6',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#F3F5F6',
  },
  container2: {
    gap: 25,
    marginTop: 35,
    marginBottom: 44,
  },
  card: {
    height: 80,
    borderRadius: 10,
    backgroundColor: '#23262F',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%',
    gap: 20,
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

