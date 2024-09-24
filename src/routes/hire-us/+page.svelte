<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import { Card } from '$lib/components/ui/card';
  import * as LucideIcons from 'lucide-svelte';

  export let data;

  const features = [
    { title: 'Custom Animation', description: 'Tailored animation solutions for your unique needs.', icon: 'Video' },
    { title: 'Video Production', description: 'High-quality video production services.', icon: 'Clapperboard' },
    { title: 'Game Development', description: 'Engaging game development for various platforms.', icon: 'Gamepad2' },
    { title: 'Creative Storytelling', description: 'Compelling narratives that captivate your audience.', icon: 'PenTool' },
    { title: 'Motion Graphics', description: 'Eye-catching motion graphics for your projects.', icon: 'BarChart3' },
    { title: 'Character Design', description: 'Unique character designs for animation and games.', icon: 'Users' },
    { title: 'Storyboarding', description: 'Detailed storyboarding to visualize your project.', icon: 'Palette' },
    { title: 'VFX Integration', description: 'Seamless visual effects integration.', icon: 'Film' },
    { title: 'Project Consultation', description: 'Expert advice to guide your creative projects.', icon: 'HeadsetHelp' },
  ];
</script>

<SEO 
  title="Hire Us - Nafuna Creative Studio"
  description="Hire Nafuna for your animation, video production, and game development needs."
  keywords="hire animation studio, video production services, game development, creative services"
  image="/nfa_og.png"
  url="https://nafuna.tv/hire-us"
/>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8 text-center">Why Choose Nafuna?</h1>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    {#each features as feature}
      <Card class="p-6">
        <svelte:component this={LucideIcons[feature.icon]} size={24} class="mb-2 text-primary" />
        <h2 class="text-xl font-semibold mb-2">{feature.title}</h2>
        <p>{feature.description}</p>
      </Card>
    {/each}
  </div>

  <h2 class="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
  <ContactForm {data} />
</div>
