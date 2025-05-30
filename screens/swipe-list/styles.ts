import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171221',
    },
    scroll: {
      alignItems: 'center',
      padding: 16,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#171221',
    },
    title: {
      fontSize: 18,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    iconPlaceholder: {
      width: 48,
      height: 48,
    },
    profileCard: {
      backgroundColor: '#171221',
      alignItems: 'center',
      gap: 12,
      paddingBottom: 20,
    },
    avatar: {
      width: 128,
      height: 128,
      borderRadius: 64,
      marginVertical: 16,
    },
    name: {
      fontSize: 22,
      fontWeight: '700',
      color: '#FFFFFF',
    },
    location: {
      fontSize: 16,
      color: '#A394C7',
    },
    role: {
      fontSize: 16,
      color: '#A394C7',
    },
    bio: {
      color: '#FFFFFF',
      fontSize: 16,
      paddingHorizontal: 16,
      textAlign: 'center',
      marginVertical: 12,
    },
    actionButtons: {
      flexDirection: 'row',
      gap: 16,
      marginTop: 12,
    },
    actionButton: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      borderRadius: 20,
      backgroundColor: '#2E2447',
    },
    passText: {
      color: '#A394C7',
      fontWeight: '700',
      fontSize: 13,
    },
    likeText: {
      color: '#A394C7',
      fontWeight: '700',
      fontSize: 13,
    },
    bottomBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 53,
      backgroundColor: '#211A33',
      borderTopWidth: 1,
      borderTopColor: '#2E2447',
    },
    bottomIcon: {
      width: 24,
      height: 24,
      backgroundColor: '#A394C7',
      borderRadius: 12,
    },
  });

  
export default styles;