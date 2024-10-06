import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.titleName}> Laila </Text>
    <Text style={styles.bio}> "I am not here for timepass"</Text>
     <ScrollView >
    <View style={{justifyContent: 'center',alignItems: 'right'}}>

   
      <Text style={styles.attributes}>23</Text> 
      <Text style={styles.attributes}>Woman</Text> 
      <Text style={styles.attributes}>Straight</Text> 
      <Text style={styles.attributes}>Sector 2</Text> 
      <Text style={styles.attributes}>Yes</Text> 
      <Text style={styles.attributes}>Cat</Text> 
      <Text style={styles.attributes}>5'4</Text> 
      <Text style={styles.attributes}>No</Text> 
      <Text style={styles.attributes}>Don't Want</Text> 
      <Text style={styles.attributes}>No</Text> 
      <Text style={styles.attributes}>No</Text> 
    </View>
    </ScrollView>
    <Text style={styles.title}>SwipeVerse</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  attributes: { 
    padding: 5, flexDirection: 'row',  flexWrap: 'wrap', fontSize: 10, color: '#f4f0d3'
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'background-image: linear-gradient( 85.2deg,  rgba(33,3,40,1) 7.5%, rgba(65,5,72,1) 88.7% );',
  },
  bio:{
    paddingVertical: 1,
    color: '#f4f0d3',
    textAlign: 'left',
    fontSize: 17
  },
  titleName: {
    marginTop: 16,
    paddingVertical: 8,
    color: '#f4f0d3',
    textAlign: 'left',
    fontSize: 31,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;