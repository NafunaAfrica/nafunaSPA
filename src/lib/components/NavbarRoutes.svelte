<script lang="ts">
  import { toggleMode } from "mode-watcher";
  import Sun from "lucide-svelte/icons/sun";
  import Moon from "lucide-svelte/icons/moon";
  import MegaMenuItem from "$lib/components/MegaMenuItem.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import LogOut from "lucide-svelte/icons/log-out";
  import LogIn from "lucide-svelte/icons/log-in";
  import * as Avatar from "$lib/components/ui/avatar";
  import { page } from "$app/stores";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  // import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "$lib/components/ui/dropdown-menu";
  import { onMount } from 'svelte';
  import PocketBase from 'pocketbase';
	import { goto } from "$app/navigation";
  import Loader2 from 'lucide-svelte/icons/loader';

  let isLoggingOut = false;



  const pb = new PocketBase('https://api.nafuna.tv');

  console.log('$page.data:', $page.data);
  $: isAuthenticated = $page.data.user !== null && $page.data.user !== undefined;
  console.log('User data:', $page.data.user);
  console.log('isAuthenticated:', isAuthenticated);

  async function handleLogout() {
    isLoggingOut = true;
    try {
      const response = await fetch('/logout', { method: 'POST' });
      if (response.ok) {
        pb.authStore.clear();
        await goto('/login');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      isLoggingOut = false;
    }
  }


  onMount(() => {
    const logoutForm = document.querySelector('form[action="/?/logout"]');
    if (logoutForm) {
      logoutForm.addEventListener('submit', () => {
        // Clear the client-side auth store
        pb.authStore.clear();
      });
    }
  });
</script>

<div class="flex items-center justify-between w-full p-3 font-quicksand">
  <div class="flex p-5 gap-5">
    <a href="/">
      <img src="/nfalogo.svg" alt="NFA Logo" class="h-12" />
    </a>

    <!-- Hide dark mode toggle on mobile -->
    <!-- <Button on:click={toggleMode} variant="outline" size="icon" class="hidden md:flex items-center justify-center">
      <Sun
        class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span class="sr-only">Toggle theme</span>
    </Button> -->
  </div>

  <nav class="flex-1 ml-4">
    <ul class="flex justify-end items-center space-x-4 p-6 gap-5">
      <li><a href="/" class="text-sm text-white hover:text-orange-400 transition-colors font-quicksand">Home</a></li>
{#if true}


<li>

  <DropdownMenu.Root>
    <DropdownMenu.Trigger class="hover:text-orange-400">
      Services
    </DropdownMenu.Trigger>
    <DropdownMenu.Content class=" w-1/3">
      <DropdownMenu.Label>Our Services</DropdownMenu.Label>
      <DropdownMenu.Separator />
      <DropdownMenu.Group class="grid grid-cols-2">

        <DropdownMenu.Item href="/services/nafuna_ngano_ad/">
          <div>
            <div class="flex gap-2 p-2">
            <h1 class="font-black text-lg text-orange-400">The Ngano Video Plan</h1>
          <DropdownMenu.Shortcut>Storytelling Videos</DropdownMenu.Shortcut>
          </div>
          <div class="p-2">
            <p class=" text-xs">
              Short animated video that uses inhouse animated characters that tell compelling stories! Rellied on by both corporates and NGOs, the ngano video is one of our most effective!
            </p>
          </div>
          </div>
          
        </DropdownMenu.Item>


        <DropdownMenu.Item href="/services/nafuna_explaina">
          <div>
            <div class="flex gap-2 p-2">
            <h1 class="font-black text-lg text-orange-400">The Explaina Video Plan</h1>
          <DropdownMenu.Shortcut>Educational Videos</DropdownMenu.Shortcut>
          </div>
          <div class="p-2">
            <p class=" text-xs">
              Designed for breaking down complex procedures into easy to understand steps! Our explainer videos use both high end 3D graphics as well as compelling characters to get your information accross!
            </p>
          </div>
          </div>
          
        </DropdownMenu.Item>

        <DropdownMenu.Item href="/services/nafuna_promotai">
          <div>
            <div class="flex gap-2 p-2">
            <h1 class="font-black text-lg text-orange-400">Promotional Video Plans</h1>
          <DropdownMenu.Shortcut>Promotional Videos</DropdownMenu.Shortcut>
          </div>
          <div class="p-2">
            <p class=" text-xs">
              Our promoter video is designed to sell products and services! Our most flexible video which comes in many flavours, as virtical videos for social media, ads for TV and much more! These animated motion graphics videos are sleek and fast turn around.
            </p>
          </div>
          </div>
          
        </DropdownMenu.Item>

        <DropdownMenu.Item href="/services/nafuna_traina__">
          <div>
            <div class="flex gap-2 p-2">
            <h1 class="font-black text-lg text-orange-400">The Nafuna Traina</h1>
          <DropdownMenu.Shortcut>Custom Training Videos</DropdownMenu.Shortcut>
          </div>
          <div class="p-2">
            <p class=" text-xs">
              Our trainer plan includes an online NodeJS application with a custom course of videos that can progress participants and students through training that is both video based as well as interactive quizes.
            </p>
          </div>
          </div>
          
        </DropdownMenu.Item>

        <DropdownMenu.Item href="/services/nafuna_retainer">
          <div>
            <div class="flex gap-2 p-2">
            <h1 class="font-black text-lg text-orange-400">The Nafuna Retaina</h1>
          <DropdownMenu.Shortcut>Custom Retainer plan</DropdownMenu.Shortcut>
          </div>
          <div class="p-2">
            <p class=" text-xs">
              Our custom plan is built to give all the flexibility to client projects, bringing all our experience to bare and providing multiple solutions from Brand strategy to Production.
            </p>
          </div>
          </div>
          
        </DropdownMenu.Item>
       
      </DropdownMenu.Group>
     
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</li>

{/if}
      
      <!-- <li><a href="/campus" class="text-white hover:text-black">Campus</a></li> -->
      <li><a href="/_nafuna_campus_" class="text-white hover:text-orange-400">Campus</a></li>
      <li><a href="/blogs" class="text-white hover:text-orange-400">Blog</a></li>

<!-- <li>
      <DropdownMenu>
        <DropdownMenuTrigger class="dropdown-menu-trigger flex items-center gap-1 px-4 py-2 rounded-md transition-colors hover:bg-gray-100 text-white hover:text-black">
          Services
          <svg class="h-4 w-4 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="grid grid-cols-2 gap-4 p-4">
          <MegaMenuItem title="The Ngano Video" description="Short animated videos great for storytelling." href="/services/nafuna_ngano_ad" />
          <MegaMenuItem title="The Explainai Video" description="Short animated explainer videos" href="/services/nafuna_explaina" />
          <MegaMenuItem title="The Promotai Video" description="Short animated motion design videos" href="/services/nafuna_promotai" />
          <MegaMenuItem title="The Nafuna Doccy" description="Short documentaries and video profiles." href="/services/nafuna_doccy_ad" />
          <MegaMenuItem title="The Trainai Videos" description="Full training videos." href="/services/nafuna_traina__" />
          <MegaMenuItem title="The Retainai plan" description="Flexible and customisable retaina plan." href="/services/nafuna_retainer" />
        </DropdownMenuContent>
      </DropdownMenu>
</li> -->




      <li>
        <Button href="/hire-us" class="px-4 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-400 transition-colors">
          Hire Us
        </Button>
      </li>
    </ul>
  </nav>

  <div class="flex items-center space-x-4">
    {#if isAuthenticated}
  <Avatar.Root>
    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
    <Avatar.Fallback>CN</Avatar.Fallback>
  </Avatar.Root>
  <Button on:click={handleLogout} disabled={isLoggingOut}>
    {#if isLoggingOut}
      <Loader2 class="mr-2 h-4 w-4 animate-spin" />
      <span>Logging out...</span>
    {:else}
      <LogOut class="mr-2 h-4 w-4" />
      <span>Logout</span>
    {/if}
  </Button>
{:else}
  <Button href="/login" size="sm" variant="outline">
    <LogIn />
    Login
  </Button>
{/if}
  </div>

 



</div>