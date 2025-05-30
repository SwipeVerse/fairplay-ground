import React from 'react';
import { Text, View, Image,
   TouchableOpacity, ScrollView, SafeAreaView,
   TextInput,
} from 'react-native';
import { launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import { Picker } from '@react-native-picker/picker';
import  Icon from '@react-native-vector-icons/ionicons';

import styles  from './styles';

export default function CreateProfile({navigation}) {
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
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
          <TouchableOpacity style={styles.saveButton} onPress={navigation.navigate('MainNav')}>
            <Text style={styles.saveText}>Save Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
