<!-- src/routes/projects/+page.svelte -->
<script>
  import SEO from '$lib/components/SEO.svelte';
  import Headergen from '$lib/components/Headergen.svelte';
  import { Button } from "$lib/components/ui/button";
  export let data;
  let projects = [];
  projects = data.projects;
  console.log('data:', data);
</script>

<SEO 
  title="Nafuna - Creative Studio"
  description="Nafuna is a creative animation studio in Zimbabwe specializing in video production, game development and animation."
  keywords="video production, animation, creative studio, animation studio, animation studio Zimbabwe, Creative Agency, Nqo Mlilo, Nqobizitha Mlilo, Enqore, Nafuna, explainer videos, Documentary production"
  image="/nfa_og.png"
  url="https://nafuna.tv"
/>

<div >
  <Headergen />
</div>

<div class="flex flex-col items-center justify-center gap-5 p-5">
  <h1 class="h1 font-bold text-4xl">Portfolio</h1>
  <p class="text-grey-500 text-lg">Videos guided by our experience!</p>
</div>
<div class="grid grid-cols-3 gap-4 p-5 items-center justify-center">
  {#each projects as project}
    <a href={`/projects/${project.id}`} class="block">
      <div class="relative hover:bg-gray-100">
        <img class="w-full h-64 w-64 object-cover rounded" src={`https://api.nafuna.work/api/files/projects/${project.id}/${project.coverImg}?thumb=480x480`} alt="{project.title}">
        <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity p-5 gap-5 rounded">
          <div><span class="text-white text-2xl font-black">{project.title}</span></div>
          <div><span class="text-white text-xs">{@html project.description}</span></div>
        </div>
      </div>
    </a>
  {/each}
</div>
<div class="flex justify-center items-center p-5 gap-5">
<Button variant="outline" href="/hire-us">Hire Us</Button>
</div>