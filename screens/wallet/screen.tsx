// GenerateWalletScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import * as bip39 from 'bip39';

const GenerateWalletScreen = () => {
  const [mnemonics, setMnemonics] = useState<string[]>([]);

  const generateMnemonic = () => {
    const phrase = bip39.generateMnemonic();
    setMnemonics(phrase.split(' '));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Wallet</Text>

      <ScrollView contentContainerStyle={styles.mnemonicBox}>
        {mnemonics.map((word, index) => (
          <View key={index} style={styles.wordBox}>
            <Text style={styles.word}>{index + 1}. {word}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.generateButton} onPress={generateMnemonic}>
        <Text style={styles.buttonText}>Generate Mnemonics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenerateWalletScreen;