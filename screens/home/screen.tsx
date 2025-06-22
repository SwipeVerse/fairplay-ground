import React from 'react';
import { Text, View, Image,
   TouchableOpacity, SafeAreaView
} from 'react-native';

import swLogo from '../../public/logo.png'
import googleSignupLogo from '../../public/signup/google.png'
// import googleSignupLogo from 'public/signup/Facebook Brand Asset Pack/Logo/Secondary Logo/Facebook_Logo_Secondary.png'
import styles from './styles';

const logoUri = Image.resolveAssetSource(swLogo).uri
const googleSignupLogoUri = Image.resolveAssetSource(googleSignupLogo).uri

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
      style={styles.googleView}
      onPress={() => navigation.navigate('CreateProfile')}>
        {/* <Text style={styles.startButtonText}>Sign up with Google</Text> */}
        <Image source={{uri: googleSignupLogoUri}} style={styles.googleButton} />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.facebookView}
      onPress={() => navigation.navigate('CreateProfile')}>
        <Text style={styles.startButtonText}>Sign in with Facebook</Text>
    </TouchableOpacity>
  </SafeAreaView>
)}

