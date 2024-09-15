<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import  Input  from "$lib/components/ui/input/input.svelte";
    import { registerSchema } from "$lib/components/schema";
    import Loader2 from 'lucide-svelte/icons/loader';
    
    import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
    
    export let data;
    const form = superForm(data.form,{
        validators: zodClient(registerSchema)
    });
    const { form: formData, enhance, delayed } = form;
</script>
<div>
    <h1 class="py-5 text-center text-2xl font-semibold">Register a Nafuna Account</h1>
    <form method="POST" action="/register" use:enhance>

        <Form.Field {form} name="firstName">
            <Form.Control let:attrs>
              <Form.Label>First Name</Form.Label>
              <Input {...attrs} bind:value={$formData.firstName} />
            </Form.Control>
            <Form.Description />
            <Form.FieldErrors />
          </Form.Field>

          <Form.Field {form} name="lastName">
            <Form.Control let:attrs>
              <Form.Label>First Name</Form.Label>
              <Input {...attrs} bind:value={$formData.lastName} />
            </Form.Control>
            <Form.Description />
            <Form.FieldErrors />
          </Form.Field>



        <Form.Field {form} name="email">
          <Form.Control let:attrs>
            <Form.Label>Email</Form.Label>
            <Input {...attrs} bind:value={$formData.email} />
          </Form.Control>
          <Form.Description />
          <Form.FieldErrors />
        </Form.Field>

        <Form.Field {form} name="password">
            <Form.Control let:attrs>
              <Form.Label>Password</Form.Label>
              <Input type="password" {...attrs} bind:value={$formData.password} />
            </Form.Control>
            <Form.Description />
            <Form.FieldErrors />
          </Form.Field>

          <Form.Field {form} name="passwordConfirm">
            <Form.Control let:attrs>
              <Form.Label>confirm Password</Form.Label>
              <Input type="password" {...attrs} bind:value={$formData.passwordConfirm} />
            </Form.Control>
            <Form.Description />
            <Form.FieldErrors />
          </Form.Field>

          <Form.Button class="w-full"> 
            {#if $delayed}
                <Loader2 class="size-6 animate-spin" />
                {:else}
                Register
                {/if}
          </Form.Button>

      
      </form>
</div>
