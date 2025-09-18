<script>
	import { demo } from "./demo.remote";
</script>

<form {...demo}>
	<input name={demo.field("name.first")} />

	<input name={demo.field("name.last")} />
	<button type="submit">Demo submit</button>
</form>

{#if demo.issues}
	{#each Object.values(demo.issues) as field}
		{#each field as issue}
			<p>{issue.name}: {issue.message}</p>
		{/each}
	{/each}
{/if}
