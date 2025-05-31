import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171221',
  },
  header: {
    padding: 16,
    backgroundColor: '#171221',
    borderBottomWidth: 1,
    borderBottomColor: '#2E2447',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2E2447',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  matchStatus: {
    fontSize: 14,
    color: '#A394C7',
    marginTop: 4,
  },
  actionButton: {
    backgroundColor: '#6930E8',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 16,
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
});


export default styles;  