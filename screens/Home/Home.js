/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/cardd.png')}
        style={styles.image}
      />
      <Text style={styles.title}>Your Title</Text>
      <View style={styles.header}>
        <Image
          source={require('../../assets/noti.png')}
          style={styles.icon}
        />
        <Image
          source={require('../../assets/history.png')}
          style={styles.icon}
        />
      </View>

      {/* Your main content goes here */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Back.png')} />
          <Text>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Back.png')} />
          <Text>Item 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Back.png')} />
          <Text>Item 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Back.png')} />
          <Text>Item 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Back.png')} />
          <Text>Item 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 400,
    height: 180,
    top: '18%',
    left: '10%',
  },
  title: {
    fontSize: 24,
    marginLeft: 16,
    color: '#fff',
    bottom: '10%',
  },
  icon: {
    width: 44,
    height: 44,
    marginLeft: 16,
    bottom: '40%',
    left: 260,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 96,
    backgroundColor: '#333',
    padding: 16,
    top: 500,
  },
  navItem: {
    alignItems: 'center',
  },
});

export default Home;
