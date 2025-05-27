import React from 'react';
import {StyleSheet, Text, View, Image,
   TouchableOpacity, ScrollView, SafeAreaView,
   TextInput,
} from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';


export default function App() {
  // const [photo, setPhoto] =   React.useState<any>([]);
  const [photo, setPhoto] =   React.useState<any>(null); 
  
  const handleChoosePhoto = React.useCallback(() => {
    launchImageLibrary({mediaType: 'photo'}, (response: ImagePickerResponse)=> {
      if(response.assets?.length != 0) {
        console.log('response',response.assets)
        
        // set in array
        // setPhoto([
        //   ...photo,
        //   response.assets
        // ])
      
        setPhoto(response)  
      }
    });
  }, []);

  // React.useEffect(()=>{
  //   console.log(photo)
  // }, [photo])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.backButtonPlaceholder}></View>
          <Text style={styles.headerTitle}>Create Profile</Text>
        </View>

        {/* Add Photos */}
        <Text style={styles.sectionTitle}>Add Photos</Text>
        <ScrollView horizontal style={styles.photoContainer}>
        {photo?.assets && photo?.assets.map((p: any, i:number)=>{
          console.log(p)
          console.log('index', i)
          // console.log('photo',photo)
            return  (
            <View key={i} style={styles.photoBox}>
            <Image source={{uri: p.uri}} style={styles.photo}/>
            </View>)
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
          <TextInput style={styles.aboutText} placeholder='Add something about yourself' placeholderTextColor="#A394C7"></TextInput>
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
