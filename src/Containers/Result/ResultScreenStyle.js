import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.1,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  main: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  score: {
    alignItems: 'center',
  },
  answers: {
    width: 325,
    height: 'auto',
    maxHeight: 400,
    marginVertical: 25,
  },
  footer: {
    flex: 0.1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
