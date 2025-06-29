import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171221',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2E2447',
    borderRadius: 16,
    alignItems: 'center',
    padding: 20,
    marginBottom: 24, // Add space below the card for the buttons
  },
  avatar: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').width - 100,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#A394C7',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 24, // Optional: adjust spacing from the bottom edge
    paddingHorizontal: 24, // Optional: add horizontal padding
  },
  actionButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  reloadButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 24,
    backgroundColor: '#fff', // Example: white background for reload
    marginHorizontal: 8,
  },
  reloadButtonText: {
    color: '#2E2447',
    fontSize: 16,
    fontWeight: '700',
  },
  });

  
export default styles;