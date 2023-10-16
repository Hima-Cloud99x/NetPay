/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
// import React from 'react';
// import { View, Text, ScrollView, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
// import 'react-native-gesture-handler';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import necessary components and libraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  Animated,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

// Import navigation hook for screen navigation
import { useNavigation } from '@react-navigation/native';

// Import your logo image
import LogoImage from '../../assets/logoa.png';

StatusBar.setBackgroundColor('#111827');

// Data for onboarding screens
const details = [
  {
    id: 1,
    title: 'Mobile banking you"ll need',
    description: 'A wallet in your pocket to spend your money way smarter',
    image: require('../../assets/imagea.png'),
    imageWidth: 200, // Customize image width
    imageHeight: 200, // Customize image height
    imageAlignment: 'center', // Customize image alignment ('center', 'flex-start', 'flex-end', etc.)
  },
  {
    id: 2,
    title: 'Manage your money wisely',
    description: 'Track your money flows, balance, and everyday transactions on the go.',
    image: require('../../assets/Chart.png'),
    imageAlignment: 'center',
  },
  {
    id: 3,
    title: 'Send money with no problem',
    description: 'Send money to your friends and families with no worries',
    image: require('../../assets/mann.png'),
    imageAlignment: 'center',
  },
  {
    id: 4,
    title: 'Multiple cards in one application',
    description: 'Manage your cards so you can use them without switching apps.',
    image: require('../../assets/card.png'),
    imageAlignment: 'center',
  },
];

// Component for individual onboarding screen
const OnboardingScreen = ({ item }) => {
  return (
    <View style={styles.screen}>
      <Image source={LogoImage} style={styles.logo} />
      <View style={[styles.image, { alignItems: item.imageAlignment }]}>
        <Image source={item.image} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

// Component for rendering dots and 'Get Started' button
const Paginator = ({ data, scrollX, onButtonPress, currentScreen }) => {
  const width = Dimensions.get('window').width;

  return (
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', height: 70, gap: 12, marginBottom: 16 }}>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

          const dotSize = scrollX.interpolate({
            inputRange,
            outputRange: [8, 16, 8],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.circle,
                { width: dotSize, height: dotSize, opacity },
                i === currentScreen && styles.rectangle, // Apply rectangle style for the current screen
              ]}
              key={i.toString()}
            />
          );
        })}
      </View>
      <TouchableOpacity
        style={[styles.button, { width: 327, height: 56 }]}
        onPress={onButtonPress}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Onboarding component
const Onboarding = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const width = Dimensions.get('window').width;
  const [currentScreen, setCurrentScreen] = React.useState(0);
  const navigation = useNavigation();

  // Effect to navigate to the 'Welcome' screen after the last onboarding screen
  React.useEffect(() => {
    if (currentScreen === 3) {
      const timer = setTimeout(() => {
        navigation.navigate('Welcome');
      }, 2000);
      // After 2 seconds on the third onboarding screen, navigate to the Welcome Screen
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScreen]);

  // Callback for when viewable items change in FlatList
  const viewableItemsChanged = React.useRef(({ viewableItems }) => {
    setCurrentScreen(viewableItems[0].index);
  }).current;

  // Configuration for viewability detection
  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const slideRef = React.useRef(null);

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={details}
          renderItem={({ item }) => (
            <OnboardingScreen item={item} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slideRef}
          onMomentumScrollEnd={event => {
            const contentOffsetX = event.nativeEvent.contentOffset.x;
            const screenIndex = Math.round(contentOffsetX / width);
            setCurrentScreen(screenIndex);
          }}
        />
      </View>
      <Paginator
        data={details}
        scrollX={scrollX}
        onButtonPress={() => {
          if (currentScreen === details.length - 1) {
            navigation.navigate('Welcome');
          } else {
            navigation.navigate('Login'); // Navigate to the 'Login' screen
          }
        }}
        currentScreen={currentScreen}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111827',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: '15%',
    justifyContent: 'center',
    top: '2%',
  },
  title: {
    color: '#fff',
    fontFamily: 'Inter-SemiBold',
    fontSize: 32,
    textAlign: 'center',
    width: 380,
    top: '10%',
  },
  description: {
    color: '#ACADB9',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    textAlign: 'center',
    width: 263,
    marginBottom: '15%',
    alignSelf: 'center',
    top: '12%',
  },
  circle: {
    height: 12,
    backgroundColor: '#FFF',
    borderRadius: 55,
  },
  rectangle: {
    width: 15,
    height: 7,
    backgroundColor: '#7D5DF6',
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#7D5DF6',
    padding: 10,
    borderRadius: 15,
    bottom: '20%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop: '1%',
  },
  logo: {
    marginBottom: 130, // Adjust the margin as needed
  },
});

export default Onboarding;






// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Dimensions,
//   Image,
//   Animated,
//   TouchableOpacity,
// } from 'react-native';

// import { useNavigation } from '@react-navigation/native';
// import LogoImage from '../../assets/logoa.png';

// const details = [
//   {
//     id: 1,
//     title: 'Mobile banking you"ll need',
//     description: 'A wallet in your pocket to spend your money way smarter',
//     image: require('../../assets/imagea.png'),
//     imageWidth: 200, // Customize image width
//     imageHeight: 200, // Customize image height
//     imageAlignment: 'center', // Customize image alignment ('center', 'flex-start', 'flex-end', etc.)
//   },
//   {
//     id: 2,
//     title: 'Manage your money wisely',
//     description: 'Track your money flows, balance, and everyday transactions on the go.',
//     image: require('../../assets/Chart.png'),
//     imageAlignment: 'center',
//   },
//   {
//     id: 3,
//     title: 'Send money with no problem',
//     description: 'Send money to your friends and families with no worries',
//     image: require('../../assets/man.png'),
//     imageAlignment: 'center',
//   },
//   {
//     id: 4,
//     title: 'Multiple cards in one application ',
//     description: 'Manage your cards so you can use them without switching apps.',
//     image: require('../../assets/card.png'),
//     imageAlignment: 'center',
//   },
// ];

// const OnboardingScreen = ({ item }) => {
//   return (
//     <View style={styles.screen}>
//       <Image source={LogoImage} style={styles.logo} />
//       <View style={[styles.image, { alignItems: item.imageAlignment }]}>
//         <Image source={item.image} />
//       </View>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   );
// };

// const Paginator = ({ data, scrollX, onButtonPress, currentScreen }) => {
//   const width = Dimensions.get('window').width;

//   return (
//     <View style={{ flexDirection: 'column', alignItems: 'center' }}>
//       <View style={{ flexDirection: 'row', height: 70, gap: 12, marginBottom: 16 }}>
//         {data.map((_, i) => {
//           const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

//           const dotSize = scrollX.interpolate({
//             inputRange,
//             outputRange: [8, 16, 8],
//             extrapolate: 'clamp',
//           });
//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.3, 1, 0.3],
//             extrapolate: 'clamp',
//           });

//           return (
//             <Animated.View
//               style={[
//                 styles.circle,
//                 { width: dotSize, height: dotSize, opacity },
//                 i === currentScreen && styles.rectangle, // Apply rectangle style for the current screen
//               ]}
//               key={i.toString()}
//             />
//           );
//         })}
//       </View>
//       <TouchableOpacity
//         style={[styles.button, { width: 327, height: 56 }]}
//         onPress={onButtonPress}
//       >
//         <Text style={styles.buttonText}>Get Started</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Onboarding = () => {
//   const scrollX = React.useRef(new Animated.Value(0)).current;
//   const width = Dimensions.get('window').width;
//   const [currentScreen, setCurrentScreen] = React.useState(0);
//   const navigation = useNavigation();

//   React.useEffect(() => {
//     if (currentScreen === 3) {
//       const timer = setTimeout(() => {
//         navigation.navigate('Welcome');
//       }, 2000);
//       // After 2 seconds on the third onboarding screen, navigate to the Welcome Screen
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentScreen]);

//   const viewableItemsChanged = React.useRef(({ viewableItems }) => {
//     setCurrentScreen(viewableItems[0].index);
//   }).current;

//   const viewConfig = React.useRef({
//     viewAreaCoveragePercentThreshold: 50,
//   }).current;

//   const slideRef = React.useRef(null);

//   return (
//     <View style={styles.container}>
//       <View style={{ flex: 3 }}>
//         <FlatList
//           data={details}
//           renderItem={({ item }) => (
//             <OnboardingScreen item={item} />
//           )}
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           pagingEnabled
//           bounces={false}
//           keyExtractor={item => item.id}
//           onScroll={Animated.event(
//             [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//             {
//               useNativeDriver: false,
//             },
//           )}
//           onViewableItemsChanged={viewableItemsChanged}
//           viewabilityConfig={viewConfig}
//           scrollEventThrottle={32}
//           ref={slideRef}
//           onMomentumScrollEnd={event => {
//             const contentOffsetX = event.nativeEvent.contentOffset.x;
//             const screenIndex = Math.round(contentOffsetX / width);
//             setCurrentScreen(screenIndex);
//           }}
//         />
//       </View>
//       <Paginator
//         data={details}
//         scrollX={scrollX}
//         onButtonPress={() => {
//           if (currentScreen === details.length - 1) {
//             navigation.navigate('Welcome');
//           } else {
//             navigation.navigate('Login'); // Navigate to the 'Login' screen
//           }
//         }}
//         currentScreen={currentScreen}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#111827',
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: Dimensions.get('window').width,
//   },
//   image: {
//     width: 300,
//     height: 200,
//     marginBottom: '15%',
//     justifyContent: 'center',
//     top: '2%',
//   },
//   title: {
//     color: '#fff',
//     fontFamily: 'Poppins-SemiBold',
//     fontSize: 33,
//     textAlign: 'center',
//     width: 380,
//     top: '10%',
//   },
//   description: {
//     color: '#ACADB9',
//     fontFamily: 'Poppins-Regular',
//     fontSize: 17,
//     textAlign: 'center',
//     width: 263,
//     marginBottom: '15%',
//     alignSelf: 'center',
//     top: '12%',
//   },
//   circle: {
//     height: 12,
//     backgroundColor: '#FFF',
//     borderRadius: 55,
//   },
//   rectangle: {
//     width: 15,
//     height: 7,
//     backgroundColor: '#7D5DF6',
//     borderRadius: 4,
//   },
//   button: {
//     backgroundColor: '#7D5DF6',
//     padding: 10,
//     borderRadius: 15,
//     bottom: '20%',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 18,
//     textAlign: 'center',
//     justifyContent: 'center',
//     paddingTop: '1%',
//   },
//   logo: {
//     marginBottom: 130, // Adjust the margin as needed
//   },
// });

// export default Onboarding;

