/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import React from 'react';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './screens/Onboarding/SplashScreen';
import Onboarding from './screens/Onboarding/Onboarding';
import Welcome from './screens/Onboarding/Welcome';
import Login from './screens/Login/Login';
import Signup from './screens/Login/Signup';
import ForgotPassword from './screens/Login/ForgotPassword';
import PhoneNo from './screens/Login/PhoneNo';
import VerifyCode from './screens/Login/VerifyCode';
import VerifyPhone from './screens/Login/VerifyPhone';
import VerifyWallet from './screens/Login/VerifyWallet';
import FaceID from './screens/Login/FaceID';
import FaceVerify from './screens/Login/FaceVerify';
import Sucess from './screens/Login/Sucess';
import ForgotWEmail from './screens/ForgotPass/ForgotWEmail';
import ForgotWphone from './screens/ForgotPass/ForgotWphone';
import VerifyPass from './screens/ForgotPass/VerifyPass';
import NewPass from './screens/ForgotPass/NewPass';
import PassChanged from './screens/ForgotPass/PassChanged';
import Home from './screens/Home/Home';
import Notification from './screens/Home/Notification';
import History from './screens/Home/History';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PhoneNo"
          component={PhoneNo}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="VerifyCode"
          component={VerifyCode}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="VerifyPhone"
          component={VerifyPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyWallet"
          component={VerifyWallet}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="FaceID"
          component={FaceID}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FaceVerify"
          component={FaceVerify}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sucess"
          component={Sucess}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotWEmail"
          component={ForgotWEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotWphone"
          component={ForgotWphone}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="VerifyPass"
          component={VerifyPass}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{headerShown: false}}
        />
           <Stack.Screen
          name="PassChanged"
          component={PassChanged}
          options={{headerShown: false}}
        /> 
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        />
         <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
        />
          <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
