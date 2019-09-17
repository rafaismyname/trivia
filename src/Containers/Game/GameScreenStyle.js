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
  currentScore: {
    alignItems: 'center',
    marginBottom: 50,
  },
  question: {
    paddingHorizontal: 25,
  },
  answer: {
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
  answerBtn: {
    marginHorizontal: 25,
  },
  footer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
