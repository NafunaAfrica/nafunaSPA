<script>
	// Critical imports for Nafuna App 
	import { onNavigate } from '$app/navigation';
  import LoadingScreen from '$lib/components/LoadingScreen.svelte';

  
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	// Icons for Dark mode 
	import Sun from "lucide-svelte/icons/sun";
	import Moon from "lucide-svelte/icons/moon";
	
	// Fonts and darkmode 
	import { toggleMode } from "mode-watcher";
	import { ModeWatcher } from "mode-watcher";
	import '@fontsource-variable/quicksand';

	// ShadCN imports 
	import { Button } from "$lib/components/ui/button/index";
	
	let isLoading = false;

	
	onNavigate(() => {
  console.log('Navigation started, setting isLoading to true');
  isLoading = true;
  return () => {
    setTimeout(() => {
      console.log('Navigation completed, setting isLoading to false');
      isLoading = false;
    }, 500); // 500ms delay
  };
});

  $: console.log('Current isLoading state:', isLoading);
</script>

<div class="h-full">
	<div class="h-[80px] absolute inset-y-0 w-full z-50">
<Navbar />
	</div>
	<!--  -->
</div>

<LoadingScreen {isLoading} />
<main class="h-full gap-5">
	<ModeWatcher />
	<slot></slot>
</main>

<div class="gap-5 p-5">
	<Footer />
</div>

