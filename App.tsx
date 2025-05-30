import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';


import CreateProfile from './screens/create-profile/screen';
import HomeScreen from './screens/home/screen';       
import MainNav from './screens/MainNav';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // Set to true if you want default headers
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
          <Stack.Screen name="MainNav" component={MainNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider> 
  );
}
