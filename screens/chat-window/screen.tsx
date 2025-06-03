import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import  Icon from '@react-native-vector-icons/ionicons';

import styles from './styles';
import sophiaImg from '../../public/chat_person1.png'
import ethanImg from '../../public/chat_person2.png'

const sophiaImgUri = Image.resolveAssetSource(sophiaImg).uri
const ethanImgUri = Image.resolveAssetSource(ethanImg).uri

const ChatWindowScreen = ({navigation}) => {
  const messages = [
    { id: 1, sender: 'Sophia', text: "Hey there! How's your day going?", fromMe: false },
    { id: 2, sender: 'Ethan', text: "Hey Sophia! It's been pretty good, just finished a workout. How about you?", fromMe: true },
    { id: 3, sender: 'Sophia', text: "Nice! I've been working on a new art project. Feeling pretty inspired today.", fromMe: false },
    { id: 4, sender: 'Ethan', text: "That sounds awesome! What kind of art are you working on?", fromMe: true },
    { id: 5, sender: 'Sophia', text: "I'm doing a series of abstract paintings inspired by nature. It's been a lot of fun experimenting with colors and textures.", fromMe: false },
    { id: 6, sender: 'Ethan', text: "That's really cool! I'd love to see them sometime if you're comfortable sharing.", fromMe: true },
    { id: 7, sender: 'Sophia', text: "Sure, I'll send you a picture of one when it's finished. What do you do for work?", fromMe: false },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sophia</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Chat Messages */}
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={[styles.messageRow, msg.fromMe ? styles.fromMe : styles.fromOther]}>
            {!msg.fromMe && <Image style={styles.avatar} source={{ uri: sophiaImgUri }} />}
            <View style={styles.messageGroup}>
              <Text style={styles.sender}>{msg.sender}</Text>
              <View style={[styles.messageBubble, msg.fromMe ? styles.bubbleMe : styles.bubbleOther]}>
                <Text style={styles.messageText}>{msg.text}</Text>
              </View>
            </View>
            {msg.fromMe && <Image style={styles.avatar} source={{ uri: ethanImgUri }} />}
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type a message..."
          placeholderTextColor="#A394C7"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={{ color: '#A394C7', fontSize: 16 }}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatWindowScreen;
