<script lang="ts">
  
  import { enhance } from '$app/forms';
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import Genhero from '$lib/components/Genhero.svelte';
  import { Loader2 } from 'lucide-svelte';
  export let data;
  let enrolling = false;
  const { courses, campusPage } = data;
</script>

<Genhero herocontent={campusPage} />

<div class="container mx-auto px-4 py-8">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {#each courses as course}
      <Card.Root>
        <Card.Header>
          <Card.Title>{course.title}</Card.Title>
          <Card.Description>{course.description}</Card.Description>
        </Card.Header>
        <Card.Content>
          <img src={course.coverImg ? `https://api.nafuna.tv/api/files/courses/${course.id}/${course.coverImg}` : '/default-course-cover.jpg'} alt={course.title} class="w-full h-auto" />
        </Card.Content>
        <Card.Footer>
          <form
          method="POST"
          action="?/enroll"
          use:enhance={() => {
            enrolling = true;
            return ({ result, update }) => {
              enrolling = false;
              update();
            };
          }}
        >
          <input type="hidden" name="courseId" value={course.id} />
          <Button type="submit" disabled={enrolling}>
            {#if enrolling}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Enrolling...
            {:else}
              Enroll
            {/if}
          </Button>
        </form>
        
        </Card.Footer>
      </Card.Root>
    {/each}
  </div>
</div>
