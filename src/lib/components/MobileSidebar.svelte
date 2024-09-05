<script lang="ts">
import * as Sheet from "$lib/components/ui/sheet";
import { Menu } from "lucide-svelte";
	// import Sidebar from "./Sidebar.svelte";

</script>

<Sheet.Root>
  
  <Sheet.Trigger class="md:hidden pr-4 hover:opacity-75 transition"><Menu/></Sheet.Trigger>
  <Sheet.Content class='md:hidden p-0 bg-background' side='left'>
    <Sidebar />
    <Sheet.Header>
      <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
      <Sheet.Description>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </Sheet.Description>
    </Sheet.Header>
  </Sheet.Content>
</Sheet.Root>