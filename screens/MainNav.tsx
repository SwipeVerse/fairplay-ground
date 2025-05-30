import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';

import SwipeProfileScreen from './swipe-list/screen';
import Settings from './settings/screen';

const Tab = createBottomTabNavigator();

function MainNav() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: styles.bottomBar}}>
      <Tab.Screen name="SwipeProfile" component={SwipeProfileScreen} options={{tabBarLabelStyle: styles.bottomIcon}}/>
      <Tab.Screen name="Settings" component={Settings} />
      {/* Add more tabs as needed */}
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 53,
        backgroundColor: '#211A33',
        borderTopWidth: 1,
        borderTopColor: '#2E2447',
      },
      bottomIcon: {
        width: 24,
        height: 24,
        backgroundColor: '#A394C7',
        borderRadius: 12,
      },

})


export default MainNav;
