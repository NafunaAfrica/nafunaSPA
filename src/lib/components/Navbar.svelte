<script lang="ts">
	import MobileSidebar from "./MobileSidebar.svelte";
	import NavbarRoutes from "./NavbarRoutes.svelte";




</script>

<div class="p-4 h-full flex items-center bg-transparent">
    <!-- Show MobileSidebar only on small screens -->
    <div class="md:hidden">
      <MobileSidebar />
    </div>
    <!-- Show NavbarRoutes only on medium and larger screens -->
    <div class="hidden md:flex flex-1">
      <NavbarRoutes />
    </div>
  </div>