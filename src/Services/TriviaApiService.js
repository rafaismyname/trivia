import { AllHtmlEntities } from 'html-entities';

const fetchQuestions = () => {
  const uri = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  return fetch(uri)
    .then((response) => response.json())
    .then((response) => response.results)
    .then((questions) => {
      const entities = new AllHtmlEntities();
      return questions.map((question) => ({
        category: entities.decode(question.category),
        question: entities.decode(question.question),
        difficulty: question.difficulty,
        type: question.type,
        answers: [question.correct_answer, ...question.incorrect_answers],
        correctAnswer: question.correct_answer,
      }));
    });
};

export default {
  fetchQuestions,
};
