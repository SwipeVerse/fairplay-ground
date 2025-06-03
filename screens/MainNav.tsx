import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import  Icon from '@react-native-vector-icons/ionicons';

import SwipeProfileScreen from './swipe-list/screen';
import LikesScreen from './likes/screen';
import Chats from './chats/screen';
import Settings from './settings/screen';

const Tab = createBottomTabNavigator();

function MainNav() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: styles.bottomBar,
       headerShown: false
      }}>
      <Tab.Screen name="SwipeProfile" component={SwipeProfileScreen} 
        options={{ tabBarIcon: () => { return <Icon name="swap-horizontal-outline" size={24} color="#FFFFFF" /> }}}
      />

      <Tab.Screen name="Likes" component={LikesScreen} 
        options={{ tabBarIcon: () => { return <Icon name="heart-outline" size={24} color="#FFFFFF" /> }}}
      />

      <Tab.Screen name="Chats" component={Chats} 
        options={{ tabBarIcon: () => { return <Icon name="chatbubbles-outline" size={24} color="#FFFFFF" /> }}}
      />

      <Tab.Screen name="Settings" component={Settings} 
        options={{ tabBarIcon: () => { return <Icon name="settings-outline" size={24} color="#FFFFFF" /> }}}
      />
      {/* Add more tabs as needed */}
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 45,
        backgroundColor: '#211A33',
        borderTopWidth: 0,
        borderTopColor: '#2E2447',
        paddingBottom: 25
      },
      // bottomIcon: {
      //   width: 20,
      //   height: 20,
      //   backgroundColor: '#A394C7',
      //   borderRadius: 10,
      //   paddingTop: 0
      // },

})


export default MainNav;
