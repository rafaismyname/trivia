import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-ui-kitten';

function AnswerButton(props) {
  const hasAnswer = props.answer !== undefined;
  const answerIsValue = props.answer === props.value;
  const isCorrect = props.answer && props.correct;
  const answerCallback = () => (
    !hasAnswer && props.callback && props.callback(props.value)
  );

  return (
    <Button
      size="large"
      appearance={answerIsValue ? 'filled' : 'outline'}
      status={answerIsValue ? (isCorrect ? 'success' : 'danger') : 'primary'}
      style={Style.answerBtn}
      onPress={answerCallback}
    >
      {props.title}
    </Button>
  );
}

const Style = StyleSheet.create({
  answerBtn: {
    marginHorizontal: 25,
  },
});

AnswerButton.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  answer: PropTypes.string,
  correct: PropTypes.bool,
};

export default AnswerButton;
