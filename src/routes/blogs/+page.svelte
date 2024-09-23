<!-- src/routes/projects/+page.svelte -->
<script>
  import Headergen from '$lib/components/Headergen.svelte';
  import { Button } from "$lib/components/ui/button";
  import BlogGrid from "$lib/components/BlogGrid.svelte";
  export let data;
  import SEO from '$lib/components/SEO.svelte';
  console.log('Data received in +page.svelte:', JSON.stringify(data, null, 2));
  
  let blogs = [];

  // Check if data.blogs exists and is an array
  if (data && Array.isArray(data.blogs)) {
    blogs = data.blogs;
    console.log('Blogs data:', blogs);
  } else {
    console.error('Error: data.blogs is not an array:', data);
  }
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
<div class="flex flex-col items-center justify-center p-5">
  <h1 class="h1 font-bold text-4xl">Check out our Blog!</h1>
  <p class="text-grey-500 text-lg">Browse through our different articles!</p>
</div>

{#if blogs && blogs.length > 0}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10 items-center justify-center mx-auto container">
    {#each blogs as blog}
      {#if blog && blog.id && blog.title}
        <a href={`/blogs/${blog.id}`} class="block">
          <div class="relative hover:bg-gray-100">
            <img 
              class="w-full h-64 object-cover rounded" 
              src={`https://api.nafuna.tv/api/files/articles/${blog.id}/${blog.coverimg}?thumb=480x480`} 
              alt={blog.title || 'Blog post'}
            >
            <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-opacity p-5 gap-5 rounded">
              <div><span class="text-white text-2xl font-black">{blog.title}</span></div>
              <div><span class="text-white text-xs text-center">{@html blog.description || ''}</span></div>
            </div>
          </div>
        </a>
      {/if}
    {/each}
  </div>
{:else}
  <p class="text-center mt-4">No blog posts available at the moment.</p>
{/if}

<div class="flex justify-center items-center">
  <!-- <Button variant="outline" href="/blogs">See All Blogs</Button> -->
</div>