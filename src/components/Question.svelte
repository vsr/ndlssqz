<script>
  export let text;
  export let answers;
  export let correctAnswer;
  import AnswerOption from "./AnswerOption.svelte";

  $: answerOptions = answers.map(a => ({
    selected: false,
    correct: null,
    ...a
  }));

  let answered = false;

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
      const correctAnswerIndex = answerOptions.findIndex(
        o => o.text === correctAnswer.text
      );
      answerOptions[correctAnswerIndex] = {
        ...answerOptions[correctAnswerIndex],
        correct: true
      };
    }
    answerOptions[answerIndex] = { ...answer, selected, correct };
  };
</script>

<style>
  .question {
    max-width: 28em;
    margin: 0 auto;
    padding: 0.5em;
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
  <p class="q-text">{text}</p>
  <ol class="ans-options">
    {#each answerOptions as answer}
      <AnswerOption {...answer} on:click={() => onSelection(answer)} />
    {/each}
  </ol>
</div>
