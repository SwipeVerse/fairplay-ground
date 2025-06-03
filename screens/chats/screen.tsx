import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';


import styles from './styles';
import sophiaImg from '../../public/chat_person1.png'
import ethanImg from '../../public/chat_person2.png'
import liamImg from '../../public/chat_person3.png'
import noahImg from '../../public/chat_person4.png'
import avaImg from '../../public/chat_person5.png'
import isabellaImg from '../../public/chat_person6.png'
import oliviaImg from '../../public/chat_person6.png'
import jacksonImg from '../../public/chat_person6.png'

const sophiaImgUri = Image.resolveAssetSource(sophiaImg).uri
const ethanImgUri = Image.resolveAssetSource(ethanImg).uri
const liamImgUri = Image.resolveAssetSource(liamImg).uri
const noahImgUri = Image.resolveAssetSource(noahImg).uri
const avaImgUri = Image.resolveAssetSource(avaImg).uri
const isabellaImgUri = Image.resolveAssetSource(isabellaImg).uri
const oliviaImgUri = Image.resolveAssetSource(oliviaImg).uri
const jacksonImgUri = Image.resolveAssetSource(jacksonImg).uri


const chatList = [
  {
    id: '1',
    name: 'Sophia',
    message: "Hey! How's your day going?",
    avatar: sophiaImgUri,
  },
  {
    id: '2',
    name: 'Ethan',
    message: "I'm good, just finished a workout. You?",
    avatar: ethanImgUri,
  },
  {
    id: '3',
    name: 'Olivia',
    message: 'Just got back from a hike, it was amazing!',
    avatar: oliviaImgUri,
  },
  {
    id: '4',
    name: 'Noah',
    message: "Sounds fun! I'm planning a trip soon.",
    avatar: noahImgUri,
  },
  {
    id: '5',
    name: 'Ava',
    message: 'Where are you thinking of going?',
    avatar: avaImgUri,
  },
  {
    id: '6',
    name: 'Liam',
    message: 'Maybe somewhere tropical, any suggestions?',
    avatar: liamImgUri,
  },
  {
    id: '7',
    name: 'Isabella',
    message: "I've always wanted to visit Bali!",
    avatar: isabellaImgUri,
  },
  {
    id: '8',
    name: 'Jackson',
    message: "That's on my list too! Let's plan it together?",
    avatar: jacksonImgUri,
  },
];

const ChatsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Chats</Text>
      </View>

      {/* Chat List */}
      <ScrollView style={styles.chatContainer}>
        {chatList.map(chat => (
          <TouchableOpacity key={chat.id} style={styles.chatRow} onPress={()=> navigation.navigate('ChatWindow')}>
            <Image source={{ uri: chat.avatar }} style={styles.avatar} />
            <View style={styles.chatTextContainer}>
              <Text style={styles.name}>{chat.name}</Text>
              <Text style={styles.message}>{chat.message}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

    </View>
  );
};

export default ChatsScreen;
