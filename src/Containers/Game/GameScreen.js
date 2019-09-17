import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { AllHtmlEntities } from 'html-entities';
import BaseLayout from '../../Components/BaseLayout';
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
        <Button
          size="large"
          appearance={props.currentAnswer.answer === 'True' ? 'filled' : 'outline'}
          status={
            props.currentAnswer.answer === 'True'
              ? props.currentAnswer.correct ? 'success' : 'danger'
              : 'primary'
          }
          style={Style.answerBtn}
          onPress={() => props.chooseAnswer(true)}
        >
          {i18n.t('game.true')}
        </Button>
        <Button
          size="large"
          appearance={props.currentAnswer.answer === 'False' ? 'filled' : 'outline'}
          status={
            props.currentAnswer.answer === 'False'
              ? props.currentAnswer.correct ? 'success' : 'danger'
              : 'primary'
          }
          style={Style.answerBtn}
          onPress={() => props.chooseAnswer(false)}
        >
          {i18n.t('game.false')}
        </Button>
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
