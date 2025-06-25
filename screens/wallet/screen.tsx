import 'react-native-get-random-values';
import { Buffer } from 'buffer';

global.Buffer = Buffer;

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Clipboard, Alert } from 'react-native';
import styles from './styles';
import  Icon from '@react-native-vector-icons/ionicons';
import * as bip39 from 'bip39';
import AsyncStorage from '@react-native-async-storage/async-storage';
import "@ethersproject/shims"
import { ethers } from "ethers";


const GenerateWalletScreen = ({ navigation }) => {
  const [mnemonics, setMnemonics] = useState<string[]>([]);

  const generateMnemonic = () => {
    const phrase = bip39.generateMnemonic();
    setMnemonics(phrase.split(' '));
  };

  const handleSave = () => {
    console.log('starting on this function')
    if (mnemonics.length === 0) {
      // Alert.alert('Error', 'No mnemonic generated yet.');
      // return;
      generateMnemonic()
    }
    console.log('in the middle')
    
    const privateKey = generatePrivateKey(mnemonics.join(' '))
    console.log('private key generated', privateKey)
    storeKey(privateKey)
    console.log('navigating to next screen')
    // navigate to CreateProfile
    navigation.navigate('CreateProfile')
  }

  const generatePrivateKey = (mnemonics: string) => {
    const wallet = ethers.Wallet.fromPhrase(mnemonics)
    return wallet.privateKey
  }

  const storeKey = async (value: string) => {
  try {
    await AsyncStorage.setItem('deviceKey', value);
    console.log('Private key saved')
  } catch (e) {
    // saving error
    Alert.alert('Error', 'Failed to save the private key.')
  }
};

  const copyToClipboard = () => {
    const phrase = mnemonics.join(' ');
    Clipboard.setString(phrase);
    Alert.alert('Copied', 'Secret phrase copied to clipboard.');
  };

  useEffect(() => {
    generateMnemonic()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secret Recovery Phrase</Text>
      
      <Text style={styles.instructions}>
        This secret phrase is the only way to restore your account. Please store it securely and do not share it with anyone.
      </Text>
      
      <ScrollView contentContainerStyle={styles.mnemonicBox}>
        {mnemonics.map((word, index) => (
          <View key={index} style={styles.wordBox}>
            <Text style={styles.word}>{index + 1}. {word}</Text>
          </View>
        ))}
      </ScrollView>

      {mnemonics.length > 0 && (
        <TouchableOpacity style={styles.iconButton} onPress={copyToClipboard}>
          <Icon name="copy-outline" size={20} color="#A394C7" />
          <Text style={styles.copyText}>Copy to clipboard</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.generateButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Ok, I saved it</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenerateWalletScreen;