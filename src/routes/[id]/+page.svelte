<script>
  import SEO from '$lib/components/SEO.svelte';
    import Genhero from '$lib/components/Genhero.svelte';
    import generic_home from '$lib/images/generic_home.png';
    import Headergen from '$lib/components/Headergen.svelte';
    import Button from '$lib/components/ui/button/button.svelte';
    import { ArrowLeft } from 'lucide-svelte';
    export let data;
  </script>
  
  <SEO 
  title="{data.page.title}"
  description="{data.page.description}"
  keywords="{data.page.keywords}, video production, animation, creative studio, animation studio, animation studio Zimbabwe, Creative Agency, Nqo Mlilo, Nqobizitha Mlilo, Enqore, Nafuna, explainer videos, Documentary production"
  image="/nfa_og.png"
  url="https://nafuna.tv"
/>

<div>
  <Genhero herocontent={data.page}/>
</div>



 


  <div class="p-5"></div>
  <main class="flex flex-col justify-center items-center p-10 gap-5 prose text-center mx-auto bg-muted rounded max-w-7xl lg:mx-auto lg:w-[calc(100%-4rem)]">
    <div class="self-start mb-4">
      <a href="/" class="flex items-center text-primary hover:underline">
        <ArrowLeft class="mr-2" />
        Back to Home
      </a>
    </div>
  

    
    {#if data.page.coverImg}
      <img src="https://api.nafuna.tv/api/files/pages/{data.page.id}/{data.page.coverImg}" alt="Header" class="p-5 rounded-lg"/>
    {/if}
    <div class="rounded-lg overflow-hidden">
      <p class="prose prose-sm max-w-prose">{@html data.page.Content}</p>
    </div>
  
    <div class="flex justify-center items-center gap-5 p-5">
      <div class="w-64">
        <a href="/" class="block transition-transform hover:scale-105">
          <img 
            src="/back.png" 
            alt="Home" 
            class="rounded-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-primary"
          />
        </a>
      </div>
    </div>
    
    
  </main>
  
  <div class="flex flex-col justify-center items-center gap-5 p-5">
    Like what you see? get in touch with us by clicking the following button! 
    <Button class="bg-primary" href="/hire-us">
      Hire Us!
    </Button>
  </div>