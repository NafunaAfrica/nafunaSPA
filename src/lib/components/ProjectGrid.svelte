<script>
  import * as Pagination from "$lib/components/ui/pagination";
  import { Button } from "$lib/components/ui/button";
  export let projects;

  let currentPage = 1;
  let itemsPerPage = 9;
  $: totalItems = projects.length;
  $: paginatedProjects = projects.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
</script>

<div class="flex flex-col items-center justify-center">
  <h1 class="h1 font-bold text-4xl">Check out our work!</h1>
  <p class="text-grey-500 text-lg">Browse through our different projects!</p>
</div>

{#if projects && projects.length > 0}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 items-center justify-center">
    {#each paginatedProjects as project}
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

  <Pagination.Root
    count={totalItems}
    perPage={itemsPerPage}
    page={currentPage}
    onPageChange={(p) => currentPage = p}
  >
    <Pagination.Content>
      <Pagination.Item>
        <Pagination.PrevButton />
      </Pagination.Item>
      <Pagination.Item>
        <Pagination.NextButton />
      </Pagination.Item>
    </Pagination.Content>
  </Pagination.Root>
{:else}
  <p class="text-center mt-4">No projects available at the moment.</p>
{/if}

<div class="flex justify-center items-center">
  <!-- <Button variant="outline" href="/projects">See All Projects</Button> -->
</div>
