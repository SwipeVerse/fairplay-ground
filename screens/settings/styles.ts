import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171221',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171221',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171221',
    paddingVertical: 12,
    gap: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#2E2447',
    alignItems: 'center',
    justifyContent: 'center'
    // borderRadius: 8,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  subLabel: {
    color: '#A394C7',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 2,
    width: 280,
  },
});



export default styles;