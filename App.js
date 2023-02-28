import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import landing from './src/pages/index/landing';
import Profile from './src/pages/profile/profile';
import EditProfile from './src/pages/profile/EditProfile';

export default function App() {
//test
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="editProfile">
        <Stack.Screen name="index" component={landing} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="editProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}