import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import  Icon from '@react-native-vector-icons/ionicons';

import styles from './styles';
import liamImg from '../../public/chat_person3.png'

const liamImgUri = Image.resolveAssetSource(liamImg).uri

const SettingsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={()=> navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Section: Account */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.row}>
          <Image
            source={{ uri: liamImgUri }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.label}>Profile</Text>
            <Text style={styles.subLabel}>Liam Carter</Text>
          </View>
        </View>

        <View style={styles.row}>
        <View style={styles.iconBox} ><Icon name="person-outline" size={27} color="#FFFFFF" /></View>
          <View>
            <Text style={styles.label}>Account</Text>
            <Text style={styles.subLabel}>liam.carter@email.com</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox} ><Icon name="trash-outline" size={27} color="#FFFFFF" /></View>
          <Text style={styles.label}>Delete Account</Text>
        </View>

        {/* Section: Discovery */}
        <Text style={styles.sectionTitle}>Discovery</Text>
        <View style={styles.row}>
        <View style={styles.iconBox} ><Icon name="search-outline" size={27} color="#FFFFFF" /></View>
          <View>
            <Text style={styles.label}>Discovery Preferences</Text>
            <Text style={styles.subLabel}>Men, 18–25</Text>
          </View>
        </View>

        <View style={styles.row}>
        <View style={styles.iconBox} ><Icon name="heart-outline" size={27} color="#FFFFFF" /></View>
          <View>
            <Text style={styles.label}>Interests</Text>
            <Text style={styles.subLabel}>Show me to people who are interested in the same things</Text>
          </View>
        </View>

        {/* Section: Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        {[
          { title: 'New Matches', icon:'notifications-outline', desc: 'Get notified when you have a new match' },
          { title: 'Likes', icon: 'heart-outline', desc: 'Get notified when someone likes you' },
          { title: 'Messages', icon:'chatbubble-ellipses-outline', desc: 'Get notified when someone messages you' }
        ].map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.iconBox} ><Icon name={item.icon} size={27} color="#FFFFFF" /></View>
            <View>
              <Text style={styles.label}>{item.title}</Text>
              <Text style={styles.subLabel}>{item.desc}</Text>
            </View>
          </View>
        ))}

        {/* Section: App Settings */}
        <Text style={styles.sectionTitle}>App Settings</Text>
        {[{name:  'Language', icon: 'globe-outline'},
         {name: 'Help & Support', icon: 'help-circle-outline'},
          {name:'Legal', icon: 'shield-outline'}, 
          {name: 'Log Out', icon: 'log-out-outline'}].map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.iconBox} ><Icon name={item.icon} size={27} color="#FFFFFF" /></View>
            <Text style={styles.label}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
