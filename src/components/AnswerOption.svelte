<script>
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
  }
  .answered-icon {
    display: inline-block;
    width: 1em;
  }
</style>

<li on:click={() => dispatch('click')}>
  <span class="answered-icon">
    {#if correct === true}
      ✓
    {:else if selected && correct === false}✕{:else}&nbsp;{/if}
  </span>
  {text}
</li>
