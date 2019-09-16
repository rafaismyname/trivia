import React, { useState } from 'react';
import { Layout, Text, Spinner, Button } from 'react-native-ui-kitten';
import { AllHtmlEntities } from 'html-entities';
import Style from './GameScreenStyle';

const entities = new AllHtmlEntities();

export default function GameScreen() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});

  const resetGame = () => {
    setLoading(false);
    setQuestions([]);
    setScore(0);
    setCurrentQuestion({});
  };

  const newGame = () => {
    setLoading(true);

    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then((response) => response.json())
      .then((response) => {
        const fetchedQuestions = response.results;
        setQuestions(fetchedQuestions);
        setCurrentQuestion({ index: 0, ...fetchedQuestions[0] });
        setLoading(false);
      })
      .catch(() => resetGame());
  };

  const chooseAnswer = (choosenAnswer) => {
    if (currentQuestion.answer) {
      return;
    }

    const answer = choosenAnswer ? 'True' : 'False';
    const correct = answer === currentQuestion.correct_answer;
    const answeredQuestion = { ...currentQuestion, answer, correct };

    setScore(correct ? score + 1 : score);
    setCurrentQuestion(answeredQuestion);

    setTimeout(() => nextQuestion(), 2000);
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestion.index + 1;

    if (nextIndex >= questions.length) {
      return resetGame();
    }

    setCurrentQuestion({ index: nextIndex, ...questions[nextIndex] });
  };

  return (
    <Layout style={Style.container}>
      <Layout style={Style.title}>
        <Text category="h1">trivia</Text>
      </Layout>
      <Layout style={Style.main}>
        { loading && (
          <Spinner size="giant" />
        ) }

        { !loading && !questions.length && (
          <Button size="large" onPress={newGame}>Start</Button>
        ) }

        { !loading && questions.length > 0 && (
          <Layout>
            <Layout style={Style.score}>
              <Text category="h6">Score: {score}</Text>
            </Layout>
            <Layout style={Style.question}>
              <Text category="c1">{currentQuestion.index + 1} of {questions.length}</Text>
              <Text category="h4">{entities.decode(currentQuestion.question)}</Text>
            </Layout>
            <Layout style={Style.answer}>
              <Button
                size="large"
                appearance={currentQuestion.answer === 'True' ? 'filled' : 'outline'}
                status={
                  currentQuestion.answer === 'True'
                    ? currentQuestion.correct ? 'success' : 'danger'
                    : 'primary'
                }
                style={Style.answerBtn}
                onPress={() => chooseAnswer(true)}
              >
                True
              </Button>
              <Button
                size="large"
                appearance={currentQuestion.answer === 'False' ? 'filled' : 'outline'}
                status={
                  currentQuestion.answer === 'False'
                    ? currentQuestion.correct ? 'success' : 'danger'
                    : 'primary'
                }
                style={Style.answerBtn}
                onPress={() => chooseAnswer(false)}
              >
                False
              </Button>
            </Layout>
          </Layout>
        ) }
      </Layout>
      <Layout style={Style.footer}>
        <Text category="c1">made with 🖤 by @rafaismy.name</Text>
      </Layout>
    </Layout>
  );
}
