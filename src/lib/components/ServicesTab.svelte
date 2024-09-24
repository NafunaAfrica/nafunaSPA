<script lang="ts">
    import * as Tabs from "$lib/components/ui/tabs/index.js";
    import * as Card from "$lib/components/ui/card/index.js";
    import { Video, Gamepad2, BarChart3 } from 'lucide-svelte';
   </script>
   <h1 class=" font-black text-4xl p-5 flex mx-auto justify-center">Our Services:</h1>
   
   <Tabs.Root value="animation" class="w-full">
    <Tabs.List class="grid w-full grid-cols-3">
      <Tabs.Trigger value="animation" class="flex items-center justify-center">
        <Video class="mr-2" size={18} />
        Video
      </Tabs.Trigger>
      <Tabs.Trigger value="tech" class="flex items-center justify-center">
        <Gamepad2 class="mr-2" size={18} />
        Technology
      </Tabs.Trigger>
      <Tabs.Trigger value="strategy" class="flex items-center justify-center">
        <BarChart3 class="mr-2" size={18} />
        Strategy
      </Tabs.Trigger>
    </Tabs.List>
    
    <Tabs.Content value="animation">
     <Card.Root>
      <Card.Header>
       <Card.Title>Animation & Video Services</Card.Title>
       <Card.Description>
        Bringing your ideas to life through stunning visuals and storytelling with our amazing video products.
        We carefully design our packages to suit most needs. Clients can chose from our existing plans or opt for the Retaina which gives them flexibility
       </Card.Description>
      </Card.Header>
      <Card.Content>
       We provide 2D and 3D animation which we use to create animated marketing videos as well as TV shows. 
       Our animated videos have been used by organisations for increasing engagement, storytelling and educating audiences.
      </Card.Content>
     </Card.Root>
    </Tabs.Content>
   
    <Tabs.Content value="tech">
     <Card.Root>
      <Card.Header>
       <Card.Title>Technology & Games</Card.Title>
       <Card.Description>
        Our technology services which use cutting edge technologies to create immersive experiences. leveraging existing and emerging technologies to change the media landscape.
       </Card.Description>
      </Card.Header>
      <Card.Content>
        At NafunaTV, we specialize in Game Development, AR/VR Experiences, Mobile App Development, and Interactive Installations. Our innovative solutions blend creativity and technology to deliver immersive and engaging experiences that captivate audiences and drive results. Let’s bring your vision to life!
      </Card.Content>
     </Card.Root>
    </Tabs.Content>
   
    <Tabs.Content value="strategy">
     <Card.Root>
      <Card.Header>
       <Card.Title>Strategy & Advertising</Card.Title>
       <Card.Description>
        Crafting compelling campaigns and marketing strategies.
       </Card.Description>
      </Card.Header>
      <Card.Content>
        At NafunaTV, we excel in Brand Strategy, Digital Marketing, Content Creation, and Social Media Management. Our expert team crafts compelling narratives and innovative campaigns that elevate your brand, engage your audience, and drive measurable results. Let’s transform your digital presence together!
      </Card.Content>
     </Card.Root>
    </Tabs.Content>
   </Tabs.Root>
   