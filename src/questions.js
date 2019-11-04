import { sendRequest } from "./xhr";

const questionFiles = [
  "/data/inventions.json",
  "/data/geography.json",
  "/data/physics.json"
];
let qFiles = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const randomQuestionFile = () => {
  if (qFiles.length === 0) {
    qFiles = [...questionFiles];
    shuffleArray(qFiles);
  }
  return qFiles.pop();
};

export const getNewQuestions = () => {
  return new Promise((resolve, reject) => {
    sendRequest(randomQuestionFile(), (err, req) => {
      if (err) return reject(err);
      const questions = JSON.parse(req.responseText);
      questions.forEach(q => shuffleArray(q.answers));
      shuffleArray(questions);
      resolve(questions);
    });
  });
};
