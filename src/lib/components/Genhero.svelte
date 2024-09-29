<script>
    export let herocontent;
    import { Button } from '$lib/components/ui/button/index';
  
    // Modal for video 
    import * as Dialog from '$lib/components/ui/dialog';
    let open = false;
</script>

<section class="relative h-screen overflow-hidden flex items-center justify-center">
  <div 
    class="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
    style="background-image: url(https://api.nafuna.tv/api/files/pages/{herocontent.id}/{herocontent.coverImg})"
  >
    <div class="absolute inset-0 bg-black opacity-80"></div>
  </div>
  <div class="hero-content relative z-10 text-center px-4 text-white">
    <div>
      <h1 class="text-2xl md:text-4xl font-bold font-quicksand">{herocontent.title}</h1>
    </div>

    <div class="prose w-full md:w-96">
      <h1 class="text-xs md:text-sm font-thin prose text-center">{herocontent.description}</h1>
    </div>

    <div class="mt-4">
      <Button variant="outline" on:click={() => (open = true)}>Learn More</Button>
    </div>
  </div>

  <Dialog.Root bind:open>
    <Dialog.Content class="max-w-4xl w-full">
      <Dialog.Header>
        <Dialog.Title>{herocontent.title}</Dialog.Title>
        <Dialog.Description>
          {herocontent.description}
        </Dialog.Description>
      </Dialog.Header>
      <div class="p-4">
        <p>{herocontent.fullContent}</p>
      </div>
      <Dialog.Footer>
        <Button on:click={() => (open = false)}>Close</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
</section>

<style>
  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }
</style>
