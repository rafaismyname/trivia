const fetchQuestions = () => {
  const uri = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

  return fetch(uri)
    .then((response) => response.json())
    .then((response) => response.results);
};

export default {
  fetchQuestions,
};
