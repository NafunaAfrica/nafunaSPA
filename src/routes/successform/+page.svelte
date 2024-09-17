<script>
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
  
    onMount(() => {
      // Redirect to home page after 5 seconds
      setTimeout(() => {
        goto('/');
      }, 5000);
    });
  </script>
  
  <div class="flex flex-col items-center justify-center min-h-screen bg-primary-foreground">
    <h1 class="text-4xl font-bold mb-4">Thank You!</h1>
    <p class="text-xl mb-8">Your message has been successfully submitted.</p>
    <p>We'll get back to you soon.</p>
    <p class="mt-8">Redirecting to home page in 5 seconds...</p>
  </div>