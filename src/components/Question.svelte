<script>
  import { createEventDispatcher } from "svelte";
  export let text;
  export let answers = [];
  export let correctAnswer;
  export let answered;
  import AnswerOption from "./AnswerOption.svelte";

  $: answerOptions = answers
    ? answers.map(a => ({
        selected: false,
        correct: null,
        ...a
      }))
    : [];

  const dispatch = createEventDispatcher();
  answered = false;

  const onSelection = ans => {
    if (answered) return false;
    answered = true;
    const answerIndex = answerOptions.findIndex(o => o.text === ans.text);
    const answer = answerOptions[answerIndex];
    let selected = true;
    let correct;
    if (answer.text === correctAnswer.text) {
      correct = true;
    } else {
      correct = false;
      // update answerOptions so that we reveal the correct answer to user
      const correctAnswerIndex = answerOptions.findIndex(
        o => o.text === correctAnswer.text
      );
      answerOptions[correctAnswerIndex] = {
        ...answerOptions[correctAnswerIndex],
        correct: true
      };
    }
    answerOptions[answerIndex] = { ...answer, selected, correct };
    dispatch("answered", { correct });
  };
</script>

<style>
  .question {
    max-width: 28em;
    margin: 0 auto;
    padding: 1em;
  }
  .q-text {
    font-weight: 400;
    line-height: 1.4em;
  }
  .ans-options {
    padding: 0;
  }
</style>

<div class="question">
  {#if text}
    <p class="q-text">{text}</p>
    <ol class="ans-options">
      {#each answerOptions as answer}
        <AnswerOption {...answer} on:click={() => onSelection(answer)} />
      {/each}
    </ol>
  {/if}
</div>
