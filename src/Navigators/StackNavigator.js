import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../Screens/Splash/Splash';
import Signup from '../Screens/Auth/Signup';
import OtpVerification from '../Screens/Auth/OtpVerification';
import ChatHome from '../Screens/ChatHomePage/ChatHome';
import OtpAuthentication from '../Screens/Auth/OtpAuthentication ';
import ChatScreen from '../Screens/ChatHomePage/ChatScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerification}
          options={{
            headerShown: true,
            headerTitle: 'Verify Your Mobile Number',
            headerTintColor: '#000000',
            headerStyle: {backgroundColor: '#F5A059'},
            headerTitleAlign: 'center',
            headerLeft: null,
          }}
        />
        <Stack.Screen name="OtpAuthentication" component={OtpAuthentication} />
        <Stack.Screen name="ChatHome" component={ChatHome} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
