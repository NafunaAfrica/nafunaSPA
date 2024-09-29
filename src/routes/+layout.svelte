<script>
	import { onNavigate } from '$app/navigation';
	import LoadingScreen from '$lib/components/LoadingScreen.svelte';
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { ModeWatcher } from "mode-watcher";
	import '@fontsource-variable/quicksand';
	
	// let isLoading = false;

	// onNavigate(async (navigation) => {
	// 	isLoading = true;
	// 	await navigation.complete;
	// 	isLoading = false;
	// });
</script>

<div class="h-full">
	<div class="h-[80px] absolute inset-y-0 w-full z-50">
		<Navbar />
	</div>
</div>

<!-- <LoadingScreen {isLoading} /> -->
<main class="h-full gap-5">
	<ModeWatcher />
	<slot></slot>
</main>

<div class="gap-5 p-5">
	<Footer />
</div>
