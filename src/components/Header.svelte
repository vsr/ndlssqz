<script>
  export let scores;
</script>

<style>
  header {
    max-width: 28rem;
    margin: 0 auto;
    padding: 0.25em;
    display: flex;
    text-indent: 0.5em;
  }
  h1 {
    font-size: 1em;
    flex: 2 1;
    margin: 0.5em;
    font-weight: 900;
  }
  a {
    text-decoration: none;
  }
  a,
  a:visited,
  a:focus {
    color: #3f51b5;
  }
  a:hover {
    opacity: 0.9;
  }
  .scores {
    font-size: 1em;
    flex: 1 1;
    text-align: right;
    margin: 0.5em;
    font-weight: 900;
    color: #888;
  }
</style>

<header>
  <h1>
    <a href="/">Endless Quiz</a>
  </h1>
  <span class="scores">{scores.correct}/{scores.total}</span>
</header>
