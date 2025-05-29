import React from 'react';
import {StyleSheet, Text, View, Image,
   TouchableOpacity, ScrollView, SafeAreaView,
   TextInput,
} from 'react-native';


export default function Home() {
return (
    <SafeAreaView style={styles.container}>
      <ScrollView></ScrollView>
    </SafeAreaView>
)}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#171221',
      }
})