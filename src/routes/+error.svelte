<script lang="ts">
  import { page } from '$app/state';
</script>

{#if page.status === 404}
  <p>
    The page you were looking for does not exist. Please use the navigation at the top of this page.
  </p>
{:else}
  <p>An unexpected error has occurred.</p>
{/if}
