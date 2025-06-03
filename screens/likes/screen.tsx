import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';
import avaImg from '../../public/chat_person5.png'
import oliviaImg from '../../public/chat_person6.png'


const avaImgUri = Image.resolveAssetSource(avaImg).uri
const oliviaImgUri = Image.resolveAssetSource(oliviaImg).uri


const LikesScreen = () => {
  // Mock liked profiles (replace with real data)
  const likedProfiles = [
    {
      id: '1',
      name: 'Olivia',
      age: 26,
      avatar: oliviaImgUri,
      matched: true,
    },
    {
      id: '2',
      name: 'Ava',
      age: 24,
      avatar: avaImgUri,
      matched: false,
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Likes</Text>
      </View>

      {/* List of Likes */}
      <ScrollView contentContainerStyle={styles.content}>
        {likedProfiles.map((profile) => (
          <View key={profile.id} style={styles.card}>
            <Image source={{ uri: profile.avatar }} style={styles.avatar} />
            <View style={styles.info}>
              <Text style={styles.name}>{profile.name}, {profile.age}</Text>
              <Text style={styles.matchStatus}>
                {profile.matched ? 'You both liked each other 💖' : 'Liked you'}
              </Text>
            </View>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionText}>
                {profile.matched ? 'Chat' : 'View'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LikesScreen;
