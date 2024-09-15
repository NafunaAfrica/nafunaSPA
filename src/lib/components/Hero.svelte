<script>
  export let herocontent;
  import fallbackImage from '$lib/images/wall.png';
  import videoSource from '$lib/assets/bg.mp4';
  import { Button } from '$lib/components/ui/button/index';

  // Modal for video 
  import * as Dialog from '$lib/components/ui/dialog';
  let open = false;
</script>

<section class="relative h-screen overflow-hidden flex items-center justify-center">
  <video class="absolute inset-0 w-full h-full object-cover hidden md:block z-0" autoplay loop muted playsinline>
    <source src={videoSource} type="video/mp4" />
  </video>
  <img src={fallbackImage} alt="Hero background" class="absolute inset-0 w-full h-full object-cover md:hidden z-0" />
  <div class="hero-content relative z-10 text-center px-4">
    <!-- Add your hero section content here -->
    <div>
      <h1 class="text-2xl md:text-4xl font-bold font-quicksand">{herocontent.title}</h1>
    </div>

    <div class="prose w-full md:w-96">
      <h1 class="text-xs md:text-sm font-thin prose text-center">{herocontent.description}</h1>
    </div>

    <div class="mt-4">
      <Button variant="outline" on:click={() => (open = true)}>Watch Video</Button>
    </div>
  </div>

  <Dialog.Root bind:open>
    <Dialog.Content class="max-w-4xl w-full">
      <Dialog.Header>
        <Dialog.Title>Nafuna Video</Dialog.Title>
        <Dialog.Description>
          Watch the video below
        </Dialog.Description>
      </Dialog.Header>
      <div class="relative pb-[56.25%] h-0">
        <iframe 
          class="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/fTEKisl3kWw?si=AtMUx_mrRUNNkng6" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen
        ></iframe>
      </div>
      <Dialog.Footer>
        <Button on:click={() => (open = false)}>Close</Button>
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Root>
</section>

<style>
  .hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    /* Add your content styles here */
  }
  .font-quicksand {
    font-family: 'Quicksand', sans-serif;
  }
</style>