<script>
  export let name;
  import Header from "./Header.svelte";
  import QuizGame from "./QuizGame.svelte";

  let scores = {
    correct: 0,
    total: 0
  };
</script>

<style>

</style>

<Header {scores} />
<QuizGame on:updateScore={s => (scores = s.detail.scores)} />
