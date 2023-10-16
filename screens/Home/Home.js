/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
// import { useNavigation } from '@react-navigation/native';
// import React from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// const Home = () => {
//     const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/cardd.png')}
//         style={styles.image}
//       />
//       <Text style={styles.title1}>Good morning,</Text>
//       <Text style={styles.title}>Alex Scotch</Text>
//       <View style={styles.header}>
//         <Image
//           source={require('../../assets/noti.png')}
//           style={styles.icon}
//         />
//         <Image
//           source={require('../../assets/history.png')}
//           style={styles.icon}
//         />
//       </View>
//       <View style={styles.iconRow}>
//         <TouchableOpacity onPress={() => navigation('PassChanged')}>
//           <Image
//             source={require('../../assets/topup.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation('PassChanged')}>
//           <Image
//             source={require('../../assets/transfer.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation('PassChanged')}>
//           <Image
//             source={require('../../assets/with.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation('PassChanged')}>
//           <Image
//             source={require('../../assets/more.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//       </View >
//       <Text style={styles.again}>Send Again</Text>
//       <View style={styles.action}>
//         <Image
//           source={require('../../assets/act.png')}
//           style={styles.action}
//           />

//       </View>
//       <View style={styles.list}>
//       <Text style={styles.again1}>Savings</Text>
//         <Image
//           source={require('../../assets/List.png')}
//           style={styles.list}
//           />

//       </View>
//       <View style={styles.forgetPasswordContainer}>
//         <TouchableOpacity
//             onPress={() => navigation.navigate('ForgotPassword')}>
//             <Text style={styles.forgetPassword}>
//             Create New
//             </Text>
//         </TouchableOpacity>
//         </View>

//        {/* Your main content goes here */}
//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Home.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Stats.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem1}>
//           <Image source={require('../../assets/Light.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Savings.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Profile.png')} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const handleNavigation = (screenName) => {
//     // Implement your navigation logic here, e.g., using React Navigation.
//     console.log(`Navigating to ${screenName}`);
//   };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111827',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   image: {
//     width: 400,
//     height: 180,
//     top: '18%',
//     left: '10%',
//   },
//   title1: {
//     fontSize: 18,
//     marginLeft: 16,
//     color: '#fff',
//     bottom: '15%',
//   },
//   title: {
//     fontSize: 28,
//     marginLeft: 16,
//     color: '#fff',
//     bottom: '14%',
//   },
//   icon: {
//     width: 46,
//     height: 46,
//     marginLeft: 16,
//     bottom: '50%',
//     right: '10%',
//   },
//   iconRow: {
//     flexDirection: 'row',  // This makes the icons appear in a row.
//     justifyContent: 'space-between',
//     padding: 16,
//     //marginTop: 20,
//     top: '11%',
//     height: 200,
//   },
//   icons: {
//     width: 70,
//     height: 80,
//     marginLeft: 16,
//    // bottom: '50%',
//    },
//    action:{
//      bottom: 6,
//     // left: '7%',
//      width: 410,
//      height: 65,
//      left:10,
//    },
//    again:{
//      color:'#fff',
//      fontSize:18,
//      bottom: 30,
//      left: 15,
//    },
//    again1:{
//      color:'#fff',
//      fontSize:18,
//      bottom: 8,
//      right:'0.5%',
//    },
//    list:{
//      top: 20,
//      left: 25,
//    },
//    forgetPassword:{
//      bottom: 158,
//      color: '#7D5DF6',
//      left: '75%',
//    },
//    bottomNav: {
//      flexDirection: 'row',
//      justifyContent: 'space-between',
//      alignItems: 'center',
//      height: 96,
//      backgroundColor: '#1C2431',
//      padding: 16,
//      bottom: '9%',
//   },
//    navItem: {
//      alignItems: 'center',
//      paddingBottom:30,
//   },
//    navItem1:{
//      bottom: 30,

//    },
//  });

//  export default Home;

// import { useNavigation } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet,ScrollView} from 'react-native';
// import Modal from 'react-native-modal';

// const Home = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation();

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const handleNavigation = (screenName) => {
//     console.log(`Navigating to ${screenName}`);
//     navigation.navigate(screenName);
//   };

//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../assets/cardd.png')}
//         style={styles.image}
//       />
//       <Text style={styles.title1}>Good morning,</Text>
//       <Text style={styles.title}>Alex Scotch</Text>
//       <View style={styles.header}>
//         <Image
//           source={require('../../assets/noti.png')}
//           style={styles.icon}
//         />
//         <Image
//           source={require('../../assets/history.png')}
//           style={styles.icon}
//         />
//       </View>
//       <View style={styles.iconRow}>
//         <TouchableOpacity onPress={() => handleNavigation('Icon1Screen')}>
//           <Image
//             source={require('../../assets/topup.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleNavigation('Icon2Screen')}>
//           <Image
//             source={require('../../assets/transfer.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => handleNavigation('Icon3Screen')}>
//           <Image
//             source={require('../../assets/with.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={toggleModal}>
//           <Image
//             source={require('../../assets/more.png')}
//             style={styles.icons}
//           />
//         </TouchableOpacity>
//       </View>

//       <Modal
//         isVisible={isModalVisible}
//         style={styles.modal}
//         swipeDirection={['up', 'down']} // Allow swiping up and down to dismiss the modal
//         propagateSwipe={true} // Allow touch events to propagate through the modal
//         onSwipeComplete={toggleModal} // Close the modal when swiped
//       >
//         <ScrollView style={styles.modalContent}>
//           <Text style={styles.modalText}>More Services</Text>
//           {/* Add your content for the modal */}
//         </ScrollView>
//       </Modal>

//       <Text style={styles.again}>Send Again</Text>
//       <View style={styles.action}>
//         <Image
//           source={require('../../assets/act.png')}
//           style={styles.action}
//         />
//       </View>
//       <View style={styles.list}>
//         <Text style={styles.again1}>Savings</Text>
//         <Image
//           source={require('../../assets/List.png')}
//           style={styles.list}
//         />
//       </View>
//       <View style={styles.forgetPasswordContainer}>
//         <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//           <Text style={styles.forgetPassword}>Create New</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Home.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Stats.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem1}>
//           <Image source={require('../../assets/Light.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Savings.png')} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem}>
//           <Image source={require('../../assets/Profile.png')} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#111827',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   image: {
//     width: 400,
//     height: 180,
//     top: '18%',
//     left: '10%',
//   },
//   title1: {
//     fontSize: 18,
//     marginLeft: 16,
//     color: '#fff',
//     bottom: '15%',
//   },
//   title: {
//     fontSize: 28,
//     marginLeft: 16,
//     color: '#fff',
//     bottom: '14%',
//   },
//   icon: {
//     width: 46,
//     height: 46,
//     marginLeft: 16,
//     bottom: '50%',
//     right: '10%',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     top: '11%',
//     height: 200,
//   },
//   icons: {
//     width: 70,
//     height: 80,
//     marginLeft: 16,
//   },
//   modal: {
//     justifyContent: 'flex-end', // Align modal to the bottom
//     margin: 0,
//     marginTop: 450, // Margin is set to 0 to cover the entire screen
//   },
//   modalContent: {
//     backgroundColor: '#1C2431',
//     padding: 20,
//     borderRadius: 10,
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   action: {
//     bottom: 6,
//     width: 410,
//     height: 65,
//     left: 10,
//   },
//   again: {
//     color: '#fff',
//     fontSize: 18,
//     bottom: 30,
//     left: 15,
//   },
//   again1: {
//     color: '#fff',
//     fontSize: 18,
//     bottom: 8,
//     right: '0.5%',
//   },
//   list: {
//     top: 22,
//     left: 25,
//   },
//   forgetPassword: {
//     bottom: 158,
//     color: '#7D5DF6',
//     left: '75%',
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: 96,
//     backgroundColor: '#1C2431',
//     padding: 16,
//     bottom: '9%',
//   },
//   navItem: {
//     alignItems: 'center',
//     paddingBottom: 30,
//   },
//   navItem1: {
//     bottom: 30,
//   },
// });

// export default Home;
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Modal from 'react-native-modal';



    const ModalIcons = ({ onIconPress }) => {
        return (
          <View style={styles.modalIconsContainer}>
            <View style={styles.modalIconRow}>
              <TouchableOpacity onPress={() => onIconPress('Icon1Screen')}>
                <Image source={require('../../assets/topup.png')} style={styles.modalIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onIconPress('Icon2Screen')}>
                <Image source={require('../../assets/transfer.png')} style={styles.modalIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onIconPress('Icon3Screen')}>
                <Image source={require('../../assets/with.png')} style={styles.modalIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.modalIconRow}>
              <TouchableOpacity onPress={() => onIconPress('Icon1Screen')}>
                <Image source={require('../../assets/pay.png')} style={styles.modalIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onIconPress('Icon2Screen')}>
                <Image source={require('../../assets/scan.png')} style={styles.modalIcon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onIconPress('Icon3Screen')}>
                <Image source={require('../../assets/other.png')} style={styles.modalIcon} />
              </TouchableOpacity>
            </View>
          </View>
        );
      };
      
  


const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleNavigation = (screenName) => {
    console.log(`Navigating to ${screenName}`);
    navigation.navigate(screenName);
    setModalVisible(false); // Close the modal when navigating
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/cardd.png')}
        style={styles.image}
      />
      <Text style={styles.title1}>Good morning,</Text>
      <Text style={styles.title}>Alex Scotch</Text>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => handleNavigation('Notification')}>
        <Image
            source={require('../../assets/noti.png')}
            style={[styles.icon, { marginRight: 10 }]}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleNavigation('Sucess')}>
        <Image
            source={require('../../assets/history.png')}
            style={styles.icon}
        />
        </TouchableOpacity>

      </View>
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => handleNavigation('Icon1Screen')}>
          <Image
            source={require('../../assets/topup.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Icon2Screen')}>
          <Image
            source={require('../../assets/transfer.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('Icon3Screen')}>
          <Image
            source={require('../../assets/with.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Image
            source={require('../../assets/more.png')}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>

      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        swipeDirection={['up', 'down']}
        propagateSwipe={true}
        onSwipeComplete={toggleModal}
      >
        <ScrollView style={styles.modalContent}>
          <Text style={styles.modalText}>More Services</Text>

          <ModalIcons onIconPress={handleNavigation} />

          {/* Add your content for the modal */}
        </ScrollView>
      </Modal>

      <Text style={styles.again}>Send Again</Text>
      <View style={styles.action}>
        <Image
          source={require('../../assets/act.png')}
          style={styles.action}
        />
      </View>
      <View style={styles.list}>
        <Text style={styles.again1}>Savings</Text>
        <Image
          source={require('../../assets/List.png')}
          style={styles.list}
        />
      </View>
      <View style={styles.forgetPasswordContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgetPassword}>Create New</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Home.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Stats.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem1}>
          <Image source={require('../../assets/Light.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Savings.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../../assets/Profile.png')} />
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
  title1: {
    fontSize: 18,
    marginLeft: 16,
    color: '#fff',
    bottom: '15%',
  },
  title: {
    fontSize: 28,
    marginLeft: 16,
    color: '#fff',
    bottom: '14%',
  },
  iconm: {
    bottom: 30,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconm1: {
   // top: '60%',
    right: '120%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 6,
    top: 60,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    top: '11%',
    height: 200,
  },
  icons: {
    width: 70,
    height: 80,
    marginLeft: 16,
  },
  icon:{
    left: 280,
    bottom: 200,
    paddingRight: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    marginTop: 380,
  },
  modalContent: {
    backgroundColor: '#1C2431',
    padding: 20,
    borderRadius: 30,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
    left: '35%',
    top: 20,
    
  },
//   modalIconsContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
//   modalIconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   modalIcon: {
//     width: 70,
//     height: 80,
//     marginRight: 40,
//   },
modalIconsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20, // Add horizontal margin to center the icons
  },
  modalIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will evenly space the icons
    padding: 30,
  },
  modalIcon: {
    width: 80,
    height: 90,
    marginRight: 30, 
    marginLeft: 20,
  },
  
  action: {
    bottom: 6,
    width: 410,
    height: 65,
    left: 10,
  },
  again: {
    color: '#fff',
    fontSize: 18,
    bottom: 30,
    left: 15,
  },
  again1: {
    color: '#fff',
    fontSize: 18,
    bottom: 8,
    right: '0.5%',
  },
  list: {
    top: 22,
    left: 25,
  },
  forgetPassword: {
    bottom: 158,
    color: '#7D5DF6',
    left: '75%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 96,
    backgroundColor: '#1C2431',
    padding: 16,
    bottom
    : '9%',
  },
  navItem: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  navItem1: {
    bottom: 30,
  },
});

export default Home;
