<script>
    import SEO from '$lib/components/SEO.svelte';
    import Headergen from '$lib/components/Headergen.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import { ArrowLeft } from 'lucide-svelte';
    import ProjectGrid from '$lib/components/ProjectGrid.svelte';
    import { ShieldQuestion } from 'lucide-svelte';

    export let data;
  
    $: service = data.service || {};
  </script>
  
  <SEO 
    title="{service.title || 'Service'}"
    description="{service.description || 'Service description'}"
    keywords="video production, animation, creative studio, animation studio, animation studio Zimbabwe, Creative Agency, Nqo Mlilo, Nqobizitha Mlilo, Enqore, Nafuna, explainer videos, Documentary production"
    image="/nfa_og.png"
    url="https://nafuna.tv"
  />
  
  <div>
    <Headergen />
  </div>
  
  <div class="p-5"></div>
  
  <main class="flex flex-col justify-center items-center gap-5 mx-auto max-w-7xl lg:mx-auto lg:w-[calc(100%-4rem)]">
    <div class="self-start mb-4 p-5">
      <a href="/" class="flex items-center text-primary hover:underline">
        <ArrowLeft class="mr-2" />
        Back to Home
      </a>
    </div>
  
    {#if service}
      <div class="flex flex-col bg-muted rounded p-10 w-full mx-auto items-center">
        <h1 class="font-black text-5xl mb-4">{service.title || 'Service Title'}</h1>
        <p class="text-xs prose prose-sm font-medium max-w-prose mb-4">{@html service.description || 'No description available'}</p>
        
        {#if service.mainimg}
          <img src="https://api.nafuna.tv/api/files/services/{service.id}/{service.mainimg}" alt={service.title} class="w-3/4 rounded mb-4"/>
        {/if}
  
        {#if service.content}
          <div class="rounded-lg overflow-hidden">
            <p class="prose prose-sm max-w-prose text-left">{@html service.content}</p>
          </div>
        {/if}
      </div>
  
      <div class="container mx-auto">
        <ProjectGrid projects={data.projects} />
      </div>
  
      <div class="bg-sky-700 rounded p-10 w-full text-white flex mx-auto justify-center">

          <div class="p-5">
            <ShieldQuestion size={250} />
        </div>

        <div>  {#if service.prostitle}
          <h2 class="text-3xl font-bold mb-4">{service.prostitle}</h2>
        {/if}
  
        {#if service.pros}
          <div class="rounded-lg overflow-hidden mb-4">
            <p class="prose prose-sm max-w-prose text-left text-white">{@html service.pros}</p>
          </div>
        {/if}</div>

      
      
  
        <!-- {#if service.servicesimgs && service.servicesimgs.length > 0}
          <div class="grid grid-cols-2 gap-4">
            {#each service.servicesimgs as img}
              <img src="https://api.nafuna.tv/api/files/services/{service.id}/{img}" alt="Service image" class="w-full h-48 object-cover rounded"/>
            {/each}
          </div>
        {/if} -->
      </div>
    {:else}
      <p>Loading service details...</p>
    {/if}
  </main>
  
  <div class="flex justify-center items-center gap-5 p-5">
    <Button class="bg-primary" href="/hire-us">
      Hire Us!
    </Button>
  </div>
  