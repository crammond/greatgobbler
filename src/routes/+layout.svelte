<script lang="ts">
  import { page } from '$app/state';
  import favicon from '$lib/assets/favicon.ico';
  import Header from '$lib/components/Header.svelte';
  import Seo from '$lib/components/Seo.svelte';
  import './layout.css';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" sizes="16x16" href={favicon} />
</svelte:head>

<Seo title={page.data.meta?.title} description={page.data.meta?.description} />

<Header />
<main>
  {@render children()}
</main>
