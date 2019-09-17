import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.2,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  main: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    paddingHorizontal: 25,
    textAlign: 'center',
  },
  beginBtn: {
    marginTop: 25,
  },
  footer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
