<script>
  export let scores;
</script>

<style>
  header {
    max-width: 28rem;
    margin: 0 auto;
    padding: 0.25em;
    background: #eee;
    display: flex;
  }
  h1 {
    font-size: 1em;
    flex: 2 1;
  }
  .scores {
    flex: 1 1;
    text-align: right;
    line-height: 2em;
  }
</style>

<header>
  <h1>
    <a href="/">Endless Quiz</a>
  </h1>
  <span class="scores">{scores.correct}/{scores.total}</span>
</header>
