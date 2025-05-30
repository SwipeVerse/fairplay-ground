import {StyleSheet } from 'react-native';


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
  

export default styles;