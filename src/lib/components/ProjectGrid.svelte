<script>
  import { Button } from "$lib/components/ui/button";
    export let projects;
  </script>
  <div class="flex flex-col items-center justify-center">
    <h1 class="h1 font-bold text-4xl">Services</h1>
    <p class="text-grey-500 text-lg">Videos guided by our experience!</p>
  </div>
  <div class="grid grid-cols-3 gap-4 p-5 items-center justify-center">
    {#each projects as project}
      <a href={`/projects/${project.id}`} class="block">
        <div class="relative hover:bg-gray-100">
          <img class="w-full h-64 w-64 object-cover rounded" src={`https://api.nafuna.tv/api/files/projects/${project.id}/${project.coverImg}?thumb=480x480`} alt="{project.title}">
          <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity p-5 gap-5 rounded">
            <div><span class="text-white text-2xl font-black">{project.title}</span></div>
            <div><span class="text-white text-xs text-center">{@html project.description}</span></div>
          </div>
        </div>
      </a>
    {/each}
  </div>
<div class="flex justify-center items-center">
  <!-- <Button variant="outline" href="/projects">See Projects</Button> -->
</div>
  
  <style>
    /* Additional Tailwind CSS styles if needed */
  </style>