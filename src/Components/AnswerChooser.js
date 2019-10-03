import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet } from 'react-native';
import { Layout } from 'react-native-ui-kitten';
import AnswerButton from './AnswerButton';
import i18n from '../Locales/i18n';

const booleanAnswers = [i18n.t('game.true'), i18n.t('game.false')];

function AnswerChooser(props) {
  const { currentQuestion } = props;
  const isBoolean = currentQuestion.type === 'boolean';
  // TODO: shuffle answers if not boolean;
  const answers = isBoolean ? booleanAnswers : currentQuestion.answers;

  return (
    <Layout style={Style.answers}>
      {(answers || []).map((answer, i) =>
        <AnswerButton
          key={i}
          title={answer}
          value={answer}
          answer={props.currentAnswer.answer}
          correct={props.currentAnswer.correct}
          callback={props.onChoose}
        />
      )}
    </Layout>
  );
}

const Style = StyleSheet.create({
  answers: {
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 25,
    alignSelf: 'center',
  },
});

AnswerChooser.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  currentAnswer: PropTypes.object.isRequired,
  onChoose: PropTypes.func.isRequired,
};

export default AnswerChooser;
