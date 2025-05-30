import React from 'react';
import { Text, View, Image,
   TouchableOpacity, SafeAreaView
} from 'react-native';

import swLogo from '../../public/logo.png'
import styles from './styles';

const logoUri = Image.resolveAssetSource(swLogo).uri

export default function Home({ navigation }) {
return (
  <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      {/* Replace with your actual logo */}
      <Image
        source={{uri: logoUri}}
        style={styles.logo}
      />
    </View>

    <TouchableOpacity
      style={styles.startButton}
      onPress={() => navigation.navigate('CreateProfile')}>
        <Text style={styles.startButtonText}>Let’s Start</Text>
    </TouchableOpacity>
  </SafeAreaView>
)}

