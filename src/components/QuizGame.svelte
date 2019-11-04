<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fade } from "svelte/transition";

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

  const fetchQuestions = async () => {
    const newQuestions = await getNewQuestions();
    questions = [...questions, ...newQuestions];
  };

  onMount(async () => {
    try {
      await fetchQuestions();
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
    setTimeout(updateQuestion, 2000);
  };
  const updateQuestion = () => {
    const newQuestionIndex = (questionIndex + 1) % questions.length;
    if (questionIndex + 4 > questions.length) {
      fetchQuestions();
    }
    questionIndex = null;
    setTimeout(() => {
      questionIndex = newQuestionIndex;
      isAnswered = false;
    }, 500);
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

{#if text}
  <div transition:fade>
    <Question
      {text}
      {answers}
      {correctAnswer}
      {answered}
      on:answered={onAnswered} />
  </div>
{/if}
