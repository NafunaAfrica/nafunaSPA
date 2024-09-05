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
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "$lib/components/ui/dropdown-menu";

  console.log('$page.data:', $page.data);
  $: isAuthenticated = $page.data.user !== null && $page.data.user !== undefined;
  console.log('User data:', $page.data.user);
  console.log('isAuthenticated:', isAuthenticated);
</script>

<div class="flex items-center justify-between w-full p-3">
  
  <div class="flex p-5 gap-5">
  <a href="/">
    <img src="/nfalogo.svg" alt="NFA Logo" class="h-12" />
  </a>

  <Button on:click={toggleMode} variant="outline" size="icon">
    <Sun
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <Moon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
    </Button>
  </div>

  <nav class="flex-1 ml-4">
    <ul class="flex justify-end items-center space-x-4 p-5">
        <li><a href="/" class="text-sm text-white hover:text-black transition-colors">Home</a></li>
        <DropdownMenu>
          <DropdownMenuTrigger class="dropdown-menu-trigger flex items-center gap-1 px-4 py-2 rounded-md transition-colors hover:bg-gray-100 text-white hover:text-black">
            Services
            <svg class="h-4 w-4 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="grid grid-cols-2 gap-4 p-4">
            <MegaMenuItem title="The Ngano Video" description="Short animated videos great for storytelling." href="/services/ngano" />
            <MegaMenuItem title="The Explainai Video" description="Short animated explainer videos" href="/services/explainai" />
            <MegaMenuItem title="The Promotai Video" description="Short animated motion design videos" href="/service2" />
            <MegaMenuItem title="The Nafuna Doccy" description="Short documentaries and video profiles." href="/service2" />
            <MegaMenuItem title="The Trainai Videos" description="Full training videos." href="/service2" />
            <MegaMenuItem title="The Retainai plan" description="Flexible and customisable retaina plan." href="/service2" />
          </DropdownMenuContent>
        </DropdownMenu>
        <li><a href="/projects" class="text-white hover:text-black">Projects</a></li>
        <li><a href="/campus" class="text-white hover:text-black">Campus</a></li>
        <li><a href="/blog" class="text-white hover:text-black">Blog</a></li>
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
        <form method="post" action="/?/logout">
          <Button size="sm" variant="outline">
            <LogOut />
            Logout
          </Button>
        </form>
      {:else}
        <Button href="/login" size="sm" variant="outline">
          <LogIn />
          Login
        </Button>
      {/if}
    </div>
    </div>


<style>
  ul a,
  .dropdown-menu-trigger {
    @apply text-sm px-4 py-2 rounded-md transition-colors;
  }

  ul a:hover,
  .dropdown-menu-trigger:hover {
    @apply bg-gray-100;
  }

  .dropdown-menu-trigger svg {
    @apply h-4 w-4 transition-transform;
  }

  .dropdown-menu[data-state="open"] .dropdown-menu-trigger svg {
    @apply rotate-180;
  }
</style>
