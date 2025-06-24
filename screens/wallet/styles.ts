import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171221',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  mnemonicBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
  },
  wordBox: {
    backgroundColor: '#2E2447',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    margin: 4,
  },
  word: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  generateButton: {
    backgroundColor: '#6930E8',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});


export default styles;