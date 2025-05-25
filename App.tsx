import React from 'react';
import {StyleSheet, Text, View, Image,
   TouchableOpacity, ScrollView, SafeAreaView,
   TextInput,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

// let InitialResponse: ImagePickerResponse={};


export default function App() {
  const [photo, setPhoto] = React.useState<any>({});
  
  const handleChoosePhoto = () => {
    launchImageLibrary({mediaType: 'photo'}, setPhoto);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.backButtonPlaceholder}></View>
          <Text style={styles.headerTitle}>Create Profile</Text>
        </View>

        {/* Add Photos */}
          {/* <Image source={{ uri: 'https://via.placeholder.com/160' }} style={styles.photo} /> */}
          {/* {[1, 2, 3].map((_, index) => ( */}
        <Text style={styles.sectionTitle}>Add Photos</Text>
        <ScrollView horizontal style={styles.photoContainer}>
              {photo?.assets && photo.assets.map((p: any)=>{
                {console.log('iterating through photo', p.uri)}
            <View key={p.fileName} style={styles.photoBox}>
                <Image source={{ uri: p.uri }}          style={{ width: 300, height: 300 }}          />
          
            </View>
  })}
        </ScrollView>
        <View style={styles.saveContainer} >
          <TouchableOpacity style={styles.saveButton} onPress={handleChoosePhoto}>
            <Text style={styles.saveText}>Add Photos</Text>
          </TouchableOpacity>
        </View>



        {/* About Me */}
        <Text style={styles.sectionTitle}>About Me</Text>
        <View style={styles.aboutBox}>
          <TextInput style={styles.aboutText} placeholder='Add something about yourself'></TextInput>
        </View>

        {/* Basic Info */}
        <Text style={styles.sectionTitle}>Basic Info</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Age: 28</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Gender: Female</Text>
        </View>

        {/* Interests */}
        <Text style={styles.sectionTitle}>Interests</Text>
        <View style={styles.interestsContainer}>
          {['Hiking', 'Reading', 'Cooking', 'Travel', 'Music', 'Art'].map((interest, index) => (
            <View key={index} style={styles.interestChip}>
              <Text style={styles.interestText}>{interest}</Text>
            </View>
          ))}
        </View>

        {/* Save Button */}
        <View style={styles.saveContainer}>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171221',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButtonPlaceholder: {
    width: 48,
    height: 48,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  sectionTitle: {
    padding: 16,
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  photoContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
    marginBottom: 16,
  },
  photoBox: {
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  photo: {
    width: 160,
    height: 160,
    borderRadius: 12,
  },
  aboutBox: {
    backgroundColor: '#2E2447',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  aboutText: {
    color: '#FFFFFF',
  },
  infoBox: {
    backgroundColor: '#2E2447',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  infoText: {
    color: '#A394C7',
    fontSize: 16,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    gap: 8,
  },
  interestChip: {
    backgroundColor: '#2E2447',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    margin: 4,
  },
  interestText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  saveContainer: {
    padding: 16,
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#6930E8',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 24,
  },
  saveText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
