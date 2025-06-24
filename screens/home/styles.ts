import {StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171221',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 80,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  startButton: {
    backgroundColor: '#6930E8',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 24,
    marginBottom: 40,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  googleView: {
    width: '60%',
    alignSelf: 'center',
    borderRadius: 24,
    backgroundColor: '#6930E8',
    paddingVertical: 6,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  googleButton: {
    width: '100%',
    height: 48,
    borderRadius: 24,
  },

  facebookView: {
    backgroundColor: '#1877F2',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 24,
    marginBottom: 40,
  },

    fbButton: {
    width: 24, //'100%',
    height: 24,
    // borderRadius: 24,
  },
  
})


export default styles;

/**
 * 
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 31.4953px;
gap: 31.5px;

position: relative;
width: 724.39px;
height: 113.38px;

background: #1877F2;
box-shadow: 0px 38.4869px 71.4756px rgba(0, 0, 0, 0.07);
border-radius: 20.9968px;

 */