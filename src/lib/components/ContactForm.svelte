<script lang="ts">
  import { goto } from '$app/navigation';
  import { superForm } from 'sveltekit-superforms/client';
  import { zodClient } from "sveltekit-superforms/adapters";
  import { feedback } from '$lib/components/schema';
  import { Button } from '$lib/components/ui/button';
  import * as Form from '$lib/components/ui/form';
  import Input from '$lib/components/ui/input/input.svelte';
  import { Textarea } from '$lib/components/ui/textarea';
  import * as Select from "$lib/components/ui/select";

  export let data;
  let formState = 'idle'; // 'idle', 'submitting', 'success', 'error'
  const form = superForm(data.form, {
    validators: zodClient(feedback),
    id: 'contact-form' // Ensure unique form ID
  });

  const { form: formData, errors, enhance, delayed, message } = form;

  async function handleSubmit({ result }) {
    console.log('Form submission result:', result);
    if (result.type === 'redirect' || (result.type === 'failure' && result.status === 303)) {
      goto('/successform');
    } else if (result.type === 'success') {
      formState = 'success';
      goto('/successform');
    } else {
      formState = 'error';
    }
  }

  $: selectedBudget = $formData.Budget 
    ? { value: $formData.Budget, label: $formData.Budget } 
    : undefined;  

  $: selectedProduct = $formData.Product 
    ? { value: $formData.Product, label: $formData.Product } 
    : undefined;  

  $: console.log('Form data:', $formData);
  $: console.log('Form errors:', errors);
</script>

<div class="flex flex-col md:flex-row gap-10 p-10 container mx-auto bg-muted rounded bg-sky-700">
  <!-- Left Column with different background color -->
  <div class="flex bg-primary-foreground p-5 flex flex-col justify-center rounded">
    <img src="/nfalogo.svg" alt="About Us" class="flex w-32 h-auto items-center justify-center mx-auto" />
    <h1 class="py-5 text-center text-4xl font-bold">Contact Us</h1>
    <p class="prose max-w-prose">To get in touch with Nafuna and the studio, please use all the channels available. You can use the form to the right or you can also use 
      Whastapp platform. You can also use our contact center to the lower left to speak to a representative. 
    </p>
  </div>
{#if formState === 'success'}
  <div class="success-message">
    Form submitted successfully!
  </div>
{/if}

{#if formState === 'submitting'}
  <div class="loading-indicator">
    Submitting...
  </div>
{/if}
  <!-- Right Column with the form -->
  <div class="flex-1 relative">
    {#if formState === 'success'}
      <div class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div class="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 class="text-2xl font-bold mb-4">Thank you for your submission!</h2>
          <p class="text-lg">We'll get back to you soon.</p>
        </div>
      </div>
    {/if}
    {#if formState !== 'success'}
      <form method="POST" action="?/feedback" use:enhance={handleSubmit}>
        <Form.Field {form} name="fullname">
          <Form.Control let:attrs>
            <Form.Label>First Name</Form.Label>
            <Input {...attrs} bind:value={$formData.fullname} />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="organisation">
          <Form.Control let:attrs>
            <Form.Label>Organisation</Form.Label>
            <Input {...attrs} bind:value={$formData.organisation} />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="Position">
          <Form.Control let:attrs>
            <Form.Label>Position</Form.Label>
            <Input {...attrs} bind:value={$formData.Position} />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="number">
          <Form.Control let:attrs>
            <Form.Label>Phone Number</Form.Label>
            <Input {...attrs} bind:value={$formData.number} />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="email">
          <Form.Control let:attrs>
            <Form.Label>e-mail</Form.Label>
            <Input {...attrs} bind:value={$formData.email} />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <div class="flex gap-5 p-5">
          <div>
            <p class="text-sm font-semibold font-quicksand">Select Packages</p>
            <Select.Root selected={selectedProduct} onSelectedChange={(v) => v && ($formData.Product = v.value)}>
              <Select.Trigger class="w-[180px]">
                <Select.Value placeholder="Select a plan or product" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="Ngano">Ngano Video - Soryteller</Select.Item>
                <Select.Item value="Explaina">Explainai - Explainer video</Select.Item>
                <Select.Item value="Promotai">Promotai - Motion Design Video</Select.Item>
                <Select.Item value="Doccy">Nafuna Doccy - Documentary Video</Select.Item>
              </Select.Content>
            </Select.Root>
            <input hidden bind:value={$formData.Product} name="Product" />
          </div>

          <div>
            <p class="text-sm font-semibold font-quicksand">Select Budget</p>
            <Select.Root selected={selectedBudget} onSelectedChange={(v) => v && ($formData.Budget = v.value)}>
              <Select.Trigger class="w-[180px]">
                <Select.Value placeholder="What is your budget?" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value="500-1500">$500.00 - $1500.00</Select.Item>
                <Select.Item value="2000-3500">$2000.00 - $3500.00</Select.Item>
                <Select.Item value="3500-5500">$3500.00 - $5500.00</Select.Item>
                <Select.Item value="5500-9500">$5500.00 - $9500.00</Select.Item>
                <Select.Item value="10000-20000">$10k - $20k</Select.Item>
                <Select.Item value="25000-65000">$25k - $65k</Select.Item>
              </Select.Content>
            </Select.Root>
            <input hidden bind:value={$formData.Budget} name="Budget" />
          </div>
        </div>

        <Form.Field {form} name="Message">
          <Form.Control let:attrs>
            <Form.Label>Message</Form.Label>
            <Textarea {...attrs} bind:value={$formData.Message} placeholder="Leave message" />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <Button type="submit" disabled={$delayed}>
          {$delayed ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    {/if}
  </div>
</div>