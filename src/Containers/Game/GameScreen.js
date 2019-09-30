import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text } from 'react-native-ui-kitten';
import BaseLayout from '../../Components/BaseLayout';
import AnswerButton from '../../Components/AnswerButton';
import GameActions from '../../Stores/Game/Actions';
import GameSelectors from '../../Stores/Game/Selectors';
import i18n from '../../Locales/i18n';
import Style from './GameScreenStyle';

export function GameScreen(props) {
  return (
    <BaseLayout>
      <Layout style={Style.question}>
        <Text category="c1">{props.currentQuestionNumber} of {props.questionsSize}</Text>
        <Text category="c2">{props.currentQuestion.category}</Text>
        <Text category="h4">{props.currentQuestion.question}</Text>
      </Layout>
      <Layout style={Style.answer}>
        <AnswerButton
          title={i18n.t('game.true')}
          value="True"
          answer={props.currentAnswer.answer}
          correct={props.currentAnswer.correct}
          callback={props.chooseAnswer}
        />
        <AnswerButton
          title={i18n.t('game.false')}
          value="False"
          answer={props.currentAnswer.answer}
          correct={props.currentAnswer.correct}
          callback={props.chooseAnswer}
        />
      </Layout>
    </BaseLayout>
  );
}

const mapStateToProps = (state) => ({
  questionsSize: GameSelectors.questionsSize(state),
  currentQuestionNumber: GameSelectors.currentQuestionNumber(state),
  currentQuestion: GameSelectors.currentQuestion(state),
  currentAnswer: GameSelectors.currentAnswer(state),
});

const mapDispatchToProps = (dispatch) => ({
  chooseAnswer: (answer) => dispatch(GameActions.chooseGameCurrentAnswer(answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
