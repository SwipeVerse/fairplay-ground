import {StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171221',
    },
    header: {
      height: 72,
      backgroundColor: '#171221',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#2E2447',
    },
    backButton: {
      color: '#FFFFFF',
      fontSize: 24,
    },
    headerTitle: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '700',
    },
    chatContainer: {
      padding: 16,
    },
    messageRow: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: 16,
    },
    fromMe: {
      justifyContent: 'flex-end',
    },
    fromOther: {
      justifyContent: 'flex-start',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    messageGroup: {
      maxWidth: '80%',
      marginHorizontal: 12,
    },
    sender: {
      fontSize: 13,
      color: '#A394C7',
      marginBottom: 4,
    },
    messageBubble: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderRadius: 12,
    },
    bubbleOther: {
      backgroundColor: '#2E2447',
    },
    bubbleMe: {
      backgroundColor: '#6930E8',
    },
    messageText: {
      fontSize: 16,
      color: '#FFFFFF',
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 12,
      backgroundColor: '#171221',
      borderTopWidth: 1,
      borderTopColor: '#2E2447',
    },
    textInput: {
      flex: 1,
      backgroundColor: '#2E2447',
      borderRadius: 12,
      paddingHorizontal: 16,
      color: '#FFFFFF',
    },
    sendButton: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
  });
  
  
  export default styles;  