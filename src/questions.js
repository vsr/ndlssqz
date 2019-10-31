import { sendRequest } from "./xhr";

export const getNewQuestions = () => {
  return new Promise((resolve, reject) => {
    sendRequest("/data/q-a.json", (err, req) => {
      console.log("sendRequest", err, req);
      if (err) return reject(err);
      const questions = JSON.parse(req.responseText);
      resolve(questions);
    });
  });
};
