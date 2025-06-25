import React from 'react';
import { Text, View, Image,
   TouchableOpacity, SafeAreaView
} from 'react-native';

import swLogo from '../../public/logo.png'
import googleSignupLogo from '../../public/signup/google.png'
import fbSignupLogo from '../../public/signup/facebook.png'
import styles from './styles';

const logoUri = Image.resolveAssetSource(swLogo).uri
const googleSignupLogoUri = Image.resolveAssetSource(googleSignupLogo).uri
const fbSignupLogoUri = Image.resolveAssetSource(fbSignupLogo).uri

// import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// type RootStackParamList = {
//   Mnemonics: undefined;
//   // add other routes here if needed
// };

// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Mnemonics'>;

// interface HomeProps {
//   navigation: HomeScreenNavigationProp;
// }

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
      onPress={() => navigation.navigate('Mnemonics')}>
        <Image source={{uri: googleSignupLogoUri}} style={styles.googleButton} />
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.facebookView}
      onPress={() => navigation.navigate('Mnemonics')}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
          <Image source={{uri: fbSignupLogoUri}} style={styles.fbButton} />
          <Text style={[styles.startButtonText, {marginLeft: 12}]}>Sign in with Facebook</Text>
        </View>
    </TouchableOpacity>
  </SafeAreaView>
)}

