<script>
  import { fade } from "svelte/transition";
  export let text;
  export let selected;
  export let correct;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<style>
  li {
    list-style-type: none;
    border-radius: 0.5em;
    padding: 0.5em;
    border: 1px solid #aaa;
    margin: 0.25em;
    cursor: pointer;
  }
  .answered-icon {
    display: inline-block;
    width: 1em;
  }
</style>

<li on:click={() => dispatch('click')}>
  <span class="answered-icon">
    {#if correct === true}
      <span transition:fade>✓</span>
    {:else if selected && correct === false}
      <span transition:fade>✕</span>
    {/if}
  </span>
  {text}
</li>
