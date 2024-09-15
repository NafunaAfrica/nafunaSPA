<script>
  
      export let herocontent;
      import fallbackImage from '$lib/images/wall.png';
      import videoSource from '$lib/assets/bg.mp4';
      import { Button } from '$lib/components/ui/button/index';

      // Modal for video 
      import * as Dialog from '$lib/components/ui/dialog';
      let open = false;

    </script>
    
    <section class="hero-section absolute inset-0 w-full h-full object-cover">
      <video class="hero-video" autoplay loop muted playsinline>
        <source src={videoSource} type="video/mp4" />
      </video>
      <img src={fallbackImage} alt="Hero background" class="hero-image md:hidden" />
      <div class="hero-content flex flex-col justify-center items-center h-full p-5 gap-5 min-h-screen">
        <!-- Add your hero section content here -->
         <div>
          <h1 class="text-4xl font-black">{herocontent.title}</h1>
         </div>
  
         <div class="prose w-96">
          <h1 class="text-sm font-thin prose text-center">{herocontent.description}</h1>
         </div>
  
         <div>
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
    
      .hero-video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    
      .hero-content {
        position: relative;
        z-index: 1;
        /* Add your content styles here */
      }
    </style>
    