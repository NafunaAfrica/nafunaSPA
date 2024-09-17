<script lang="ts">
    export let title: string = 'Default Title';
    export let description: string = 'Default description of your website';
    export let keywords: string = 'default, keywords';
    export let image: string = 'https://example.com/default-image.jpg';
    export let url: string = 'https://example.com';
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
  
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={url} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </svelte:head>