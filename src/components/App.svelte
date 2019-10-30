<script>
  export let name;
  import AnswerOption from "./AnswerOption.svelte";
  import Question from "./Question.svelte";

  let text = "This is question text";
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

<Question {text} {answers} {correctAnswer} />
