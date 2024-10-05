<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
  import Genhero from '$lib/components/Genhero.svelte';
  export let data;
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
          <Button>Enroll</Button>
        </Card.Footer>
      </Card.Root>
    {/each}
  </div>
</div>
