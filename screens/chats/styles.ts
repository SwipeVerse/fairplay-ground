import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#17141F',
    },
    header: {
      paddingVertical: 16,
      paddingHorizontal: 16,
      backgroundColor: '#17141F',
      borderBottomWidth: 1,
      borderBottomColor: '#2E2447',
    },
    headerText: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    chatContainer: {
      flex: 1,
    },
    chatRow: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#17141F',
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderBottomColor: '#2E2447',
      borderBottomWidth: 1,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      marginRight: 16,
    },
    chatTextContainer: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
    },
    message: {
      fontSize: 14,
      color: '#A69CBF',
      marginTop: 2,
    },
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#241C2E',
      paddingVertical: 12,
      borderTopWidth: 1,
      borderTopColor: '#302942',
    },
    tabIcon: {
      width: 24,
      height: 24,
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
    },
    tabIconInactive: {
      width: 24,
      height: 24,
      backgroundColor: '#A69CBF',
      borderRadius: 12,
    },
  });
  
  export default styles;  