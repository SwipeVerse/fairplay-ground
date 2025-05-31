import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Section: Account */}
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://via.placeholder.com/56' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.label}>Profile</Text>
            <Text style={styles.subLabel}>Liam Carter</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox} />
          <View>
            <Text style={styles.label}>Account</Text>
            <Text style={styles.subLabel}>liam.carter@email.com</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox} />
          <Text style={styles.label}>Delete Account</Text>
        </View>

        {/* Section: Discovery */}
        <Text style={styles.sectionTitle}>Discovery</Text>
        <View style={styles.row}>
          <View style={styles.iconBox} />
          <View>
            <Text style={styles.label}>Discovery Preferences</Text>
            <Text style={styles.subLabel}>Men, 18–25</Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.iconBox} />
          <View>
            <Text style={styles.label}>Interests</Text>
            <Text style={styles.subLabel}>Show me to people who are interested in the same things</Text>
          </View>
        </View>

        {/* Section: Notifications */}
        <Text style={styles.sectionTitle}>Notifications</Text>
        {[
          { title: 'New Matches', desc: 'Get notified when you have a new match' },
          { title: 'Likes', desc: 'Get notified when someone likes you' },
          { title: 'Messages', desc: 'Get notified when someone messages you' }
        ].map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.iconBox} />
            <View>
              <Text style={styles.label}>{item.title}</Text>
              <Text style={styles.subLabel}>{item.desc}</Text>
            </View>
          </View>
        ))}

        {/* Section: App Settings */}
        <Text style={styles.sectionTitle}>App Settings</Text>
        {['Language', 'Help & Support', 'Legal', 'Log Out'].map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={styles.iconBox} />
            <Text style={styles.label}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
