<script>
  export let name;
  import AnswerOption from "./AnswerOption.svelte";
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Hello {name}!</h1>
<ul>
  <AnswerOption
    text="selected={false} correct={false}"
    on:click={() => console.log('clicked')}
    selected={false}
    correct={false} />
  <AnswerOption
    text="selected={false} correct={true}"
    selected={false}
    correct={true} />
  <AnswerOption
    text="selected={false} correct={null}"
    selected={false}
    correct={null} />

  <AnswerOption
    text="selected={true} correct={false}"
    selected={true}
    correct={false} />
  <AnswerOption
    text="selected={true} correct={true}"
    selected={true}
    correct={true} />
  <AnswerOption
    text="selected={true} correct={null}"
    selected={true}
    correct={null} />

</ul>
