<script>
  import { Button } from "$lib/components/ui/button";
  export let blogs; // Ensure blogs is defined as an array with a default empty value

  // Add a console.log to check the blogs data
  console.log('Blogs data:', blogs);
</script>

<div class="flex flex-col items-center justify-center">
  <h1 class="h1 font-bold text-4xl">Check out our Blog!</h1>
  <p class="text-grey-500 text-lg">Browse through our different articles!</p>
</div>

{#if blogs && blogs.length > 0}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-5 items-center justify-center">
    {#each blogs as blog}
      {#if blog && blog.id && blog.title}
        <a href={`/blogs/${blog.id}`} class="block">
          <div class="relative hover:bg-gray-100">
            <img 
              class="w-full h-64 object-cover rounded" 
              src={blog.coverimg ? `https://api.nafuna.tv/api/files/articles/${blog.id}/${blog.coverimg}?thumb=480x480` : '/placeholder-image.jpg'} 
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

<style>
  /* Additional Tailwind CSS styles if needed */
</style>