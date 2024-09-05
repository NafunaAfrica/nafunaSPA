<script>
    export let title = '';
    export let description = '';
    export let icon = null;
    export let href = '#';
  </script>
  
  <a {href} class="flex items-center gap-2 p-2 hover:bg-gray-100 transition-colors">
    {#if icon}
      <svelte:component this={icon} class="w-5 h-5" />
    {/if}
    <div>
      <h4 class="text-sm font-semibold">{title}</h4>
      <p class="text-xs text-gray-500">{description}</p>
    </div>
  </a>
  