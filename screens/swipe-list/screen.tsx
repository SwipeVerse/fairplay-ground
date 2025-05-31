import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


import avatarImg from '../../public/avatar_swipelist.png'
import styles from './styles';

const avatarUri = Image.resolveAssetSource(avatarImg).uri

const SwipeProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      {/* <View style={styles.header}>
        <Text style={styles.title}>SwipeVerse</Text>
        <View style={styles.iconPlaceholder} />
      </View> */}

      {/* Profile Section */}
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.profileCard}>
          {/* Avatar + Info */}
          <Image
            source={{ uri: avatarUri }}
            style={styles.avatar}
          />
          <Text style={styles.name}>Sophia, 24</Text>
          <Text style={styles.location}>San Francisco</Text>
          <Text style={styles.role}>Software Engineer</Text>

          {/* Bio */}
          <Text style={styles.bio}>
            I'm a software engineer who loves hiking, reading, and exploring new places.
            Looking for someone who shares my passion for adventure and intellectual conversations.
          </Text>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.passText}>⛔ Pass</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.likeText}>💖 Like</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      {/* <View style={styles.bottomBar}>
        <View style={styles.bottomIcon} />
        <View style={styles.bottomIcon} />
        <View style={styles.bottomIcon} />
        <View style={styles.bottomIcon} />
      </View> */}
    </View>
  );
};

export default SwipeProfileScreen;
