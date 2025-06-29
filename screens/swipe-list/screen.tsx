import React, { useRef, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as aa from 'accountabstraction';
import Swiper from 'react-native-deck-swiper';
import  Icon from '@react-native-vector-icons/ionicons';

import avatar1Img from '../../public/avatar_swipelist_1.png'
import avatar2Img from '../../public/avatar_swipelist_2.png'
import avatar3Img from '../../public/avatar_swipelist_3.png'

import styles from './styles';

const avatar1Uri = Image.resolveAssetSource(avatar1Img).uri
const avatar2Uri = Image.resolveAssetSource(avatar2Img).uri
const avatar3Uri = Image.resolveAssetSource(avatar3Img).uri

const profiles = [
  {
    id: '1',
    name: 'Sophia, 24',
    bio: 'I love hiking, reading, and exploring new places.',
    avatar: avatar1Uri,
  },
  {
    id: '2',
    name: 'Isabella, 25',
    bio: 'Coffee lover and travel enthusiast.',
    avatar: avatar2Uri,
  },
  {
    id: '3',
    name: 'Liam, 26',
    bio: 'Fitness, food, and fun.',
    avatar: avatar3Uri,
  },
];

const SwipeProfileScreen = () => {
  const getKey = async () => {
    try {
      const key = await AsyncStorage.getItem('deviceKey');
      console.log('Private key read from device')
      return key;
    } catch (e) {
      // saving error
      console.log('Error', 'Failed to save the private key.')
    }
  };

  // const accountHandle = async () => {
  //   const key = await getKey()
  //   const aaAddresss = await aa.createAccount()
  // }

  useEffect(() => {
    getKey().then((key)=> {
      console.log('Key retrieved', key)
    }).catch((err) => {
      console.log('error', err)
      Alert.alert('Error', 'Failed to read key from device.')
    })
  }, [])
  const swiperRef = useRef(Swiper.prototype);

  return (
     <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        cards={profiles}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.avatar }} style={styles.avatar} />
            <Text style={styles.name}>{card.name}</Text>
            <Text style={styles.bio}>{card.bio}</Text>
          </View>
        )}
        stackSize={3}
        showSecondCard={true}
        infinite={true}
        backgroundColor={'#171221'}
        cardVerticalMargin={50}
        cardHorizontalMargin={20}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
              backgroundColor: 'red',
              color: 'white',
              fontSize: 24,
              padding: 10,
              textAlign: 'center',
              alignSelf: 'center',
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
              backgroundColor: 'green',
              color: 'white',
              fontSize: 24,
              padding: 10,
              textAlign: 'center',
              alignSelf: 'center',
              },
            },
          },
        }}
        animateCardOpacity
        disableTopSwipe
        disableBottomSwipe
        swipeBackCard
    />
    
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#2E2447' }]}
          onPress={() => swiperRef.current.swipeLeft()}
        >
          <Icon name="close-circle" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { paddingVertical: 12,
              paddingHorizontal: 18,
              borderRadius: 24,
              backgroundColor: '#6930E8'}]}
          onPress={() => swiperRef.current.swipeBack()}
        >
          <Icon name="refresh-outline" size={20} color="#FFFFFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.actionButton, { backgroundColor: '#CCCCCC' }]}
          onPress={() => swiperRef.current.swipeRight()}
        >
         <Icon name="heart" size={20} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SwipeProfileScreen;
