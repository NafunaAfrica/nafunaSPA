<script lang="ts">
  import SEO from '$lib/components/SEO.svelte';
  import BlogGrid from "$lib/components/BlogGrid.svelte";
  import HeroSection from "$lib/components/Hero.svelte";
  import ProjectGrid from "$lib/components/ProjectGrid.svelte";
  import AboutUs from "$lib/components/Aboutus.svelte";
  import Contact from "$lib/components/ContactForm.svelte";
  import ServicesTab from "$lib/components/ServicesTab.svelte";
  import { zodClient } from "sveltekit-superforms/adapters";
  import { feedback } from '$lib/components/schema';
  import { superForm } from 'sveltekit-superforms/client';

  export let data;
  console.log('Data in +page.svelte:', data);
  console.log('Blogs in +page.svelte:', data.blogs);
  console.log('Data received in +page.svelte:', JSON.stringify(data, null, 2));
  console.log('data.form:', data.form);

  const form = superForm(data.form, {
    validators: zodClient(feedback)
  });
  const { form: formData, errors, enhance } = form;

  let projects = data.projects || [];
  let herocontent = data.homepage ?? { title: '', description: '', coverimg: '' };
  let aboutcontent = data.aboutpage ?? { title: '', content: '', content_alt: '' };
  let blogs = data.blogs || [];
  console.log('Blogs after assignment:', blogs);
</script>

<SEO 
  title="Nafuna - Digital Animation, Technology & Video Marketing Studio & Agency"
  description="Nafuna is a creative animation studio in Zimbabwe specializing in video production, game development and animation. We create original content for the African audience, delivering rich multimedia experiences."
  keywords="video production, animation, creative studio, animation studio, animation studio Zimbabwe, Creative Agency, Nqo Mlilo, Nqobizitha Mlilo, Enqore, Nafuna, explainer videos, Documentary production, Advertising Agency, Web development,
   mobile app development, brand strategy, illustration, cartoons, architectural visualisations, Animation Agency, Video Agency, Game Development, 3D Animation, 2D Animation, 3D Modeling, 2D Modeling, 3D Animation, 2D Animation, 3D Modeling, 2D Modeling, 3D Animation, 2D Animation,
   Brand Strategy, Content Creation, Social Media Management, Web Development, Mobile App Development, tonight with zororo, winky D vashakabvu,Animation studio, Zimbabwe animation, SADC animation industry, explainer videos, NGO project animated videos, Nafuna Avenue, Angry Mwana, short documentaries, digital brand strategies, game development, web app development, Godot engine, SvelteKit, animation in Africa, digital marketing, animation for NGOs, corporate animation, educational animation, animation series, animation production, animation technology, creative industry Zimbabwe, animation trends, animation software, animation and storytelling, visual effects, animation festivals, animation training, animation jobs, animation careers"
  image="/nfa_og.png"
  url="https://nafuna.tv"
/>

<!-- Hero section  -->
<section>
  {#if herocontent.title}
  <div class="min-h-screen ">
    <HeroSection {herocontent} />
  </div>
  {/if}
</section>

<!-- Project grid section  -->
<section>
  <div class="container mx-auto px-4 py-8">
    <ProjectGrid {projects} />
  </div>
</section>

<!-- About us section  -->
<section class="container mx-auto px-4 py-8">
  {#if data.aboutpage}
    <AboutUs aboutcontent={data.aboutpage} />
  {/if}
</section>

<section>
  <div class="container mx-auto px-4 py-8 w-2/5">
    <ServicesTab />
  </div>
  
</section>

<section>
  <div class="container mx-auto px-4 py-8">
    <BlogGrid {blogs}/>
  </div>
</section>

<section>
  <div>
    <Contact {data} />
  </div>
</section>




