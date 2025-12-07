<script lang="ts">
  let { title, description }: { title?: string; description?: string } = $props();

  const defaultTitle = 'Great Gobbler 5K';

  const defaultDescription =
    'A Nashua Community Thanksgiving Tradition. Join runners, joggers and walkers for a morning of fun in support of the Nashua High School North and South boys and girls cross country programs.';

  let metaDescription = $derived(description || defaultDescription);
</script>

<svelte:head>
  <meta name="description" content={metaDescription} />
  <meta property="og:title" content={title ? `${title} | ${defaultTitle}` : defaultTitle} />
  <meta property="og:description" content={metaDescription} />
</svelte:head>
