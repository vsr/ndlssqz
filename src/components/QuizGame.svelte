<script>
  import { createEventDispatcher, onMount } from "svelte";
  import Question from "./Question.svelte";
  import { getNewQuestions } from "../questions";

  const dispatch = createEventDispatcher();
  let scores = {
    correct: 0,
    total: 0
  };

  let questions = [];
  let questionIndex = null;

  let text;
  let answers;
  let correctAnswer;
  let answered;

  onMount(async () => {
    try {
      questions = await getNewQuestions();
      questionIndex = 0;
    } catch (e) {
      console.error("error fetcing questions", e);
    }
  });

  let isAnswered;
  const onAnswered = ev => {
    const answeredCorrectly = ev.detail.correct;
    scores = {
      correct: answeredCorrectly ? scores.correct + 1 : scores.correct,
      total: scores.total + 1
    };
    dispatch("updateScore", { scores });
    isAnswered = true;
    setTimeout(updateQuestion, 1500);
  };
  const updateQuestion = () => {
    questionIndex = (questionIndex + 1) % questions.length;
    isAnswered = false;
  };

  $: text = questionIndex === null ? null : questions[questionIndex].text;
  $: answers =
    questionIndex === null
      ? null
      : questions[questionIndex].answers.map(({ text }) => ({ text }));
  $: correctAnswer =
    questionIndex === null
      ? null
      : questions[questionIndex].answers.find(a => a.correct);
  $: answered = isAnswered;
</script>

<Question
  {text}
  {answers}
  {correctAnswer}
  {answered}
  on:answered={onAnswered} />
