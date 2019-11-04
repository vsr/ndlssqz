import { sendRequest } from "./xhr";

const questionFiles = [
  "/data/inventions.json",
  "/data/geography.json",
  "/data/physics.json"
];
let qFiles = [];

const randomQuestionFile = () => {
  if (qFiles.length === 0) {
    qFiles = [...questionFiles];
  }
  return qFiles.splice(Math.floor(Math.random() * qFiles.length), 1)[0];
};

export const getNewQuestions = () => {
  return new Promise((resolve, reject) => {
    sendRequest(randomQuestionFile(), (err, req) => {
      if (err) return reject(err);
      const questions = JSON.parse(req.responseText);
      resolve(questions);
    });
  });
};
