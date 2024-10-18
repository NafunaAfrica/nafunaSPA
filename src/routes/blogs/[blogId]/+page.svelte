<!-- src/routes/projects/[projectId]/+page.svelte -->
<script>
  import SEO from '$lib/components/SEO.svelte';
  import generic_home from '$lib/images/generic_home.png';
  import Headergen from '$lib/components/Headergen.svelte';
  import genericGotoProjects from '$lib/images/generic_goto_projects.png';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowLeft } from 'lucide-svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
    export let data;
    console.log(data.blog.keywords)
  </script>

<SEO 
title="{data.blog.title}"
description="{data.blog.description}"
keywords="{data.blog.keywords}"
image="/nfa_og.png"
url="https://nafuna.tv"
/>

  <div >
    <Headergen />
  </div>
  <div class="p-5 "></div>
  <main class="flex flex-col justify-center items-center p-10 gap-5 prose text-center mx-auto bg-muted rounded max-w-7xl lg:mx-auto lg:w-[calc(100%-4rem)]">
    <div class="self-start mb-4">
      <a href="/" class="flex items-center text-primary hover:underline">
        <ArrowLeft class="mr-2" />
        Back to Home
      </a>
    </div>

    <h1 class="font-black text-5xl">{data.blog.title}</h1>
    <p class=" text-xs prose prose-sm font-medium max-w-prose">{@html data.blog.description}</p>
    
    <img src="https://api.nafuna.tv/api/files/articles/{data.blog.id}/{data.blog.coverImg}" alt="Header" class="p-5 rounded"/>
    <div class="rounded-lg overflow-hidden">
      <p class="prose prose-sm max-w-prose text-left whitespace-normal">{@html data.blog.Content}</p>
    </div>


    <div class="flex justify-center items-center gap-5 p-5">

      <div class="rounded w-64">
        <a href="/"><img src="{generic_home}" alt="Home" class="p-5 rounded"/></a>
        <!-- Add any additional project details you want to display -->
      </div>
    </div>  
    
  </main>

<div class="flex justify-center items-center gap-5 p-5">
  <ContactForm {data} />

  <Button class="bg-primary" href="/hire-us">
    Hire Us!
  </Button>
</div>
  