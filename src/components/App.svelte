<script>
  export let name;
  import Header from "./Header.svelte";
  import Question from "./Question.svelte";

  let text =
    "This is question text, this can be so long that it wraps onto next line, what do you do then?";
  let answers = [
    { text: "option a" },
    { text: "eradane option " },
    { text: "teesara option " },
    { text: "chaute option " }
  ];
  let correctAnswer = answers[2];
</script>

<style>

</style>

<Header />
<Question {text} {answers} {correctAnswer} />
