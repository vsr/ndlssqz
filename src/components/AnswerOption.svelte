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
    border: 1px solid #ddd;
    margin: 0.75em 0.25em;
    cursor: pointer;

    transition: background-color, transform 0.7s;
    line-height: 1.65em;
    background-color: #f9f9f9;
  }
  li:focus {
    outline: none;
    border-color: #999;
  }
  .answered-icon {
    display: inline-block;
    width: 1em;
  }
  .correct {
    background-color: lightskyblue;
    transform: scale(1.05);
  }
  .incorrect {
    background-color: #dedede;
    transform: scale(0.95);
  }
</style>

<li
  on:click={() => dispatch('click')}
  on:keypress={ev => ev.key === 'Enter' && dispatch('click')}
  class={ansClass}
  tabindex="0">
  <span class="answered-icon">
    {#if correct === true}
      <span>✓</span>
    {:else if selected && correct === false}
      <span>✕</span>
    {/if}
  </span>
  {text}
</li>
