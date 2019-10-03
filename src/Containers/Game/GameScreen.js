import React from 'react';
import { connect } from 'react-redux';
import { Layout, Text } from 'react-native-ui-kitten';
import BaseLayout from '../../Components/BaseLayout';
import AnswerChooser from '../../Components/AnswerChooser';
import GameActions from '../../Stores/Game/Actions';
import GameSelectors from '../../Stores/Game/Selectors';
import Style from './GameScreenStyle';

export function GameScreen(props) {
  return (
    <BaseLayout>
      <Layout style={Style.question}>
        <Text category="c1">{props.currentQuestionNumber} of {props.questionsSize}</Text>
        <Text category="c2">{props.currentQuestion.category}</Text>
        <Text category="h4">{props.currentQuestion.question}</Text>
      </Layout>
      <AnswerChooser
        currentQuestion={props.currentQuestion}
        currentAnswer={props.currentAnswer}
        onChoose={props.chooseAnswer}
      />
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
