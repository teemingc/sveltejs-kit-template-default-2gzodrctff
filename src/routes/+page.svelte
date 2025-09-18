<script>
  import { demo } from './demo.remote';
</script>

<form {...demo}>
	<input name={demo.field('name.first')} />
	<input name={demo.field('name.last')} />
	<button type="submit">Demo submit</button>
</form>

		{#if demo.issues?.name.last}
			{#each createPost.issues.name.last as issue}
				<p class="issue">{issue.message}</p>
			{/each}
		{/if}