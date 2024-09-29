<script>
  export let isLoading;
  import { fade } from 'svelte/transition';
</script>

{#if isLoading}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" transition:fade={{duration: 300}}>
    <img src="/path-to-your-logo.png" alt="Nafuna Logo" class="w-32 h-32 animate-spin" />
    <p class="text-white">Loading...</p>
  </div>
{/if}

<style>
  /* Add any additional styles for the loading screen here */
  .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>