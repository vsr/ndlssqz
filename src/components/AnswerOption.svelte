<script>
  import { fade } from "svelte/transition";
  export let text;
  export let selected;
  export let correct;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  $: ansClass =
    correct === true ? "correct" : correct === false ? "incorrect" : "";
</script>

<style>
  li {
    list-style-type: none;
    border-radius: 0.5em;
    padding: 0.5em;
    border: 1px solid #aaa;
    margin: 0.75em 0.25em;
    cursor: pointer;
    background-color: #f9f9f9;
    transition: background-color 1s;
    line-height: 1.65em;
  }
  .answered-icon {
    display: inline-block;
    width: 1em;
  }
  .correct {
    background-color: lightskyblue;
  }
  .incorrect {
    background-color: lightgrey;
  }
</style>

<li
  on:click={() => dispatch('click')}
  on:keypress={ev => ev.key === 'Enter' && dispatch('click')}
  class={ansClass}
  tabindex="0">
  <span class="answered-icon">
    {#if correct === true}
      <span transition:fade>✓</span>
    {:else if selected && correct === false}
      <span transition:fade>✕</span>
    {/if}
  </span>
  {text}
</li>
