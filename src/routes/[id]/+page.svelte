<script>
  import SEO from '$lib/components/SEO.svelte';
  import Genhero from '$lib/components/Genhero.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { ArrowLeft } from 'lucide-svelte';

  export let data;
</script>

<SEO 
  title={data.page.title}
  description={data.page.description}
  keywords={data.page.keywords}
  image={data.page.coverImg ? `https://api.nafuna.tv/api/files/pages/${data.page.id}/${data.page.coverImg}` : "/nfa_og.png"}
  url={`https://nafuna.tv/${data.page.id}`}
/>

<div>
  <Genhero herocontent={data.page}/>
</div>
<div class="h-4"></div>

<main class="flex flex-col justify-center items-center p-10 gap-5 prose  mx-auto bg-muted rounded max-w-7xl lg:mx-auto lg:w-[calc(100%-4rem)]">
  <div class="self-start mb-4 p-5">
    <a href="/" class="flex items-center text-primary hover:underline">
      <ArrowLeft class="mr-2" />
      Back to Home
    </a>
  </div>

  {#if data.page.coverImg}
    <img src={`https://api.nafuna.tv/api/files/pages/${data.page.id}/${data.page.coverImg}`} alt="Cover" class="p-5 rounded-lg"/>
  {/if}

  <div class="rounded-lg overflow-hidden">
    <h1 class="font-black text-5xl p-5 text-center">{data.page.title}</h1>
    <p class=" text-xs prose prose-sm font-medium max-w-prose p-5 text-center">{data.page.description}</p>
    <div class="prose prose-sm max-w-prose p-5 text-start">{@html data.page.content}</div>
  </div>

  {#if data.page.sectionImg}
    <img src={`https://api.nafuna.tv/api/files/pages/${data.page.id}/${data.page.sectionImg}`} alt="Section" class="p-5 rounded-lg"/>
  {/if}

  {#if data.page.title2}
    <h2 class="text-3xl font-bold mb-4">{data.page.title2}</h2>
    <p class=" text-xs prose prose-sm font-medium max-w-prose mb-4">{data.page.description2}</p>
    <div class="prose prose-sm max-w-prose text-start">{@html data.page.contentAlt}</div>
  {/if}

  {#if data.page.pageFiles && data.page.pageFiles.length > 0}
    <div class="mt-8">
      <h3>Additional Files</h3>
      <ul>
        {#each data.page.pageFiles as file}
          <li>
            <a href={`https://api.nafuna.tv/api/files/pages/${data.page.id}/${file}`} target="_blank" rel="noopener noreferrer">{file}</a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</main>

<div class="flex flex-col justify-center items-center gap-5 p-5">
  Like what you see? Get in touch with us by clicking the following button! 
  <Button class="bg-primary" href="/hire-us">
    Hire Us!
  </Button>
</div>
