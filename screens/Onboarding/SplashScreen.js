/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';


import 'react-native-gesture-handler';

const SplashScreen = () => {
  const navigation = useNavigation();

  // Simulate some initialization or data loading process
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Navigate to the Onboarding screen after a delay (e.g., 4 seconds)
      navigation.navigate('Onboarding');
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, [navigation]);

  return (
    <SafeAreaProvider>
      <LinearGradient
         colors={['#111827', '#111827']}
         locations={[0, 0.95]}
        style={styles.gradient}
      >
      <View style={styles.container}>
        {/* Centered logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.image}
          />
        </View>
        <View>
        {/* Image at bottom left */}
        <Image
          source={require('../../assets/Ellipseb.png')}
          style={[styles.image, styles.bottomLeft]}
        />
        </View>

        {/* Image at bottom right */}
        <View>
        <Image
          source={require('../../assets/Ellipsea.png')}
          style={[styles.image, styles.bottomRight]}
        />
        </View>
      </View>
      {/* Other content */}
      </LinearGradient>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 80, // Adjust the width and height as needed
    height: 80,
    position: 'absolute',
  },
  bottomLeft: {
   bottom: '70%',
    left: 2,
    marginBottom:'20%',
    marginTop:'120%',
  },
  bottomRight: {
    bottom: '70%',
    right: 2,
    marginBottom:'20%',
    marginTop:'120%',
  },
});

export default SplashScreen;
