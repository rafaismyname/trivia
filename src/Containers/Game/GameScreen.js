import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text } from 'react-native-ui-kitten';
import { AllHtmlEntities } from 'html-entities';
import BaseLayout from '../../Components/BaseLayout';
import AnswerButton from '../../Components/AnswerButton';
import GameActions from '../../Stores/Game/Actions';
import i18n from '../../Locales/i18n';
import Style from './GameScreenStyle';

const entities = new AllHtmlEntities();

function GameScreen(props) {
  return (
    <BaseLayout>
      <Layout style={Style.question}>
        <Text category="c1">{props.currentQuestionIndex + 1} of {props.questions.size}</Text>
        <Text category="c2">{entities.decode(props.currentQuestion.category)}</Text>
        <Text category="h4">{entities.decode(props.currentQuestion.question)}</Text>
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
  questions: state.game.get('questions'),
  currentQuestion: state.game.get('currentQuestion').toJS(),
  currentQuestionIndex: state.game.get('currentQuestionIndex'),
  currentAnswer: state.game.get('currentAnswer').toJS(),
  currentScore: state.game.get('currentScore'),
});

const mapDispatchToProps = (dispatch) => ({
  newGame: () => dispatch(GameActions.newGame()),
  chooseAnswer: (answer) => dispatch(GameActions.chooseGameCurrentAnswer(answer)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
