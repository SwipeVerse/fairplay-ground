import React from 'react';
import {StyleSheet, Text, View, Image,
   TouchableOpacity, ScrollView, SafeAreaView,
   TextInput,
} from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import  Icon from '@react-native-vector-icons/ionicons';


export default function CreateProfile() {
  const [photo, setPhoto] =   React.useState<any>([]);
  // const [photo, setPhoto] =   React.useState<any>(null); 
  const [gender, setGender] = React.useState('');
  
  const handleChoosePhoto = React.useCallback(() => {
    launchImageLibrary({mediaType: 'photo'}, (response: ImagePickerResponse)=> {
      if(response.assets?.length != 0) {
        console.log('photo',photo)
        console.log('response',response)
        
        // set in array
        setPhoto([
          ...photo,
          response?.assets[0]
        ])
      
        // setPhoto(response)
      }

      
    });
  }, []);

  console.log('photos',photo)

  // React.useEffect(()=>{
  //   console.log(photo)
  // }, [photo])


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back-outline" size={24} color="#FFFFFF" />
          </TouchableOpacity>
          
          <View style={styles.titleContainer}>
            <Text style={styles.headerTitle}>Create Profile</Text>
          </View>
        </View>

        {/* Add Photos */}
        <Text style={styles.sectionTitle}>Add Photos</Text>
        <ScrollView horizontal style={styles.photoContainer}>
        {photo.length !=0 && photo.map((p: any, i:number)=>{
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
          <TextInput style={styles.infoText} placeholder='Age' placeholderTextColor="#A394C7"></TextInput>
        </View>
        {/* Gender */}
        <View style={styles.infoBox}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue: string) => setGender(itemValue)}
            style={styles.picker}
            dropdownIconColor="#A394C7" // Optional: changes dropdown arrow color
            >
            <Picker.Item label="Select Gender" value="" color="#A394C7" />
            <Picker.Item label="Male" value="male" color="#2E2447" />
            <Picker.Item label="Female" value="female" color="#2E2447" />
            <Picker.Item label="Other" value="other" color="#2E2447" />
          </Picker>
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
  picker: {
    color: '#FFFFFF', // Text color of selected item
    width: '100%',
    backgroundColor: '#2E2447',
    borderRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#171221',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#171221',
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
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
