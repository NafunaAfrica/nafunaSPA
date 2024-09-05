<script lang="ts">
    // import { enhance } from '$app/forms';
    // import ProjectGrid from '$lib/components/ProjectGrid.svelte';
    import HeroSection from "$lib/components/Hero.svelte";
    import ProjectGrid from "$lib/components/ProjectGrid.svelte";
    // import AboutUs from "$lib/components/Aboutus.svelte";
    // import Benefits from "$lib/components/Benefits.svelte";
    // import Contact from "$lib/components/ContactForm.svelte";
  
  
  
    import Loader2 from 'lucide-svelte/icons/loader';
    
    import * as Select from "$lib/components/ui/select";
  
  
    import { zodClient } from "sveltekit-superforms/adapters";
  
    import { feedback } from '$lib/components/schema';
    import { Button } from '$lib/components/ui/button';
    import * as Form from '$lib/components/ui/form';
    import Input from '$lib/components/ui/input/input.svelte';
    import { Textarea } from '$lib/components/ui/textarea';
    import { superForm } from 'sveltekit-superforms/client';
	
  
  
    export let data;
    console.log('Data in +page.svelte:', data);
    
    console.log('Data received in +page.svelte:', JSON.stringify(data, null, 2));
  console.log('data.form:', data.form);
  
  
  
  
  const form = superForm(data.form, {
      validators: zodClient(feedback)
  });
  const { form: formData, errors, enhance } = form;
  // const form = superForm(data.form, {
  //     validators: zodClient(feedback)
  // });
  // const { form: formData, errors, enhance } = form;
  
      let projects = data.projects || [];
    let herocontent = data.homepage ?? { title: '', description: '', coverimg: '' };
    let aboutcontent = data.aboutpage ?? { title: '', content: '', content_alt: '' };
  
  
  
    async function handleSubmit(formData: z.infer<typeof feedback>) {
      try {
        const response = await fetch('?', {
          method: 'POST',
          body: formData,
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error submitting form:', errorData);
          throw new Error('Failed to submit form');
        }
  
        console.log('Message sent successfully!');
        // Handle success (e.g., display a message, reset the form)
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle the error (e.g., display an error message)
      }
    }
  </script>

<section>
  {#if herocontent.title}
  <div>
    <HeroSection {herocontent} />
  </div>
    
  {/if}
</section>

<section>
  <div class="container mx-auto px-4 py-8">
    <ProjectGrid {projects} />
  </div>
  
</section>


