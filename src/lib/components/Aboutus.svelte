<script lang="ts">
export let aboutcontent;

</script>

<div class="flex items-center p-10 gap-5 rounded bg-primary-foreground" style="background-image: url('/bg_birds.png'); background-size: cover; background-position: center;">
    <div class="grid grid-cols-1 md:grid-cols-3 items-stretch justify-items-start w-full p-5 gap-5">
      
      <div class="flex flex-col col-span-1 p-5 gap-5">
        <img src="/nfalogo.svg" alt="About Us" class="w-32 h-auto items-center justify-center" />
        <h1 class="text-4xl font-black text-yellow-600">{aboutcontent.title}</h1>
      </div>
  
      <div class="flex flex-col col-span-1 prose">
        <h1>{@html aboutcontent.content}</h1>
      </div>
      <div class="flex flex-col col-span-1 prose">
        <p class="prose">{@html aboutcontent.content_alt}</p>
      </div>
  
    </div>
  </div>