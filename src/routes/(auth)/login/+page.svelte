<script lang="ts">
    import * as Form from "$lib/components/ui/form";
    import  Input  from "$lib/components/ui/input/input.svelte";
    import { loginSchema } from "$lib/components/schema";
    import Loader2 from 'lucide-svelte/icons/loader';
    
    import { superForm } from "sveltekit-superforms";
	import { zodClient } from "sveltekit-superforms/adapters";
    import { toast } from "svelte-sonner";
    
    export let data;
    const form = superForm(data.form,{
        validators: zodClient(loginSchema),
        onUpdated({ form }){
            if (form.message) {
                if(!form.valid){
                    toast.error(form.message);
                }
            }
        }
    });
    const { form: formData, enhance, delayed, errors, submitting } = form;
</script>
<div>
    <h1 class="py-5 text-center text-2xl font-semibold">Welcome to Nafuna Accounts</h1>
    <form method="POST" action="/login" use:enhance>
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

          <Form.Button class="w-full"> 
            {#if $delayed}
                <Loader2 class="size-6 animate-spin" />
                {:else}
                Login 
                {/if}
          </Form.Button>

          <div class="my-4 flex items-center">
                <div class="flex-grow border-t border-gray-300"></div>
                <div class="p-2">Or</div>
                <div class="flex-grow border-t border-gray-300"></div>
          </div>
          <Form.Button variant="secondary" href="/register" class="w-full"> 
          
                Register
               
          </Form.Button>

          {#if $errors._errors}
          <div class="alert alert-error shadow-lg w-full max-w-md">
              <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{$errors._errors[0]}</span>
              </div>
          </div>
      {/if}

      </form>
</div>
