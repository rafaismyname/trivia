import { AllHtmlEntities } from 'html-entities';

const htmlEntities = new AllHtmlEntities();
const htmlDecode = htmlEntities.decode;

const parseQuestions = (question) => {
  return {
    category: htmlDecode(question.category),
    question: htmlDecode(question.question),
    difficulty: question.difficulty,
    type: question.type,
    answers: [question.correct_answer, ...question.incorrect_answers],
    correctAnswer: question.correct_answer,
  };
};

const fetchQuestions = (amount = 10, difficulty = 'hard', type = 'boolean') => {
  const baseUri = 'https://opentdb.com/api.php';

  const amountParam = `amount=${amount || 1}`;

  const difficulties = ['easy', 'medium', 'hard'];
  const parsedDifficulty = difficulty && difficulties.includes(difficulty) && difficulty;
  const difficultyParam = parsedDifficulty ? `&difficulty=${parsedDifficulty}` : '';

  const types = ['boolean', 'multiple'];
  const parsedType = type && types.includes(type) && type;
  const typeParam = parsedType ? `&type=${parsedType}` : '';

  const uri = `${baseUri}?${amountParam}${difficultyParam}${typeParam}`;

  return fetch(uri)
    .then((response) => response.json())
    .then((response) => response.results)
    .then((questions) => questions.map(parseQuestions));
};

export default {
  fetchQuestions,
};
