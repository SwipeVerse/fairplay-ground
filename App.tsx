import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';


import CreateProfile from './screens/create-profile/screen';
import HomeScreen from './screens/home/screen';       
import Mnemonics from './screens/wallet/screen';
import MainNav from './screens/MainNav';
import ChatWindow from './screens/chat-window/screen';

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
          <Stack.Screen name="Mnemonics" component={Mnemonics} />
          <Stack.Screen name="CreateProfile" component={CreateProfile} />
          <Stack.Screen name="MainNav" component={MainNav} />
          <Stack.Screen name="ChatWindow" component={ChatWindow} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider> 
  );
}
