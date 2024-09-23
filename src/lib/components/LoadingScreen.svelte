<!-- $lib/components/LoadingScreen.svelte -->
<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    
    export let isLoading;
    let opacity = 0;
  
    onMount(() => {
      const interval = setInterval(() => {
        opacity = opacity === 0 ? 1 : 0;
      }, 1000);
  
      return () => clearInterval(interval);
    });

    $: console.log('LoadingScreen isLoading prop:', isLoading);
  </script>
  
  {#if isLoading}
    <div class="loading-screen" transition:fade>
      <img src="/nfalogo.svg" alt="Nafuna Logo" style="opacity: {opacity};" />
    </div>
  {/if}
  
  <style>
    .loading-screen {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
  
    img {
      width: 150px;
      transition: opacity 0.5s ease-in-out;
    }
  </style>
  