<script lang="ts">
	export let headers: string[] = [];
</script>

<thead>
	<tr>
		{#each headers as header}
			<th class="px-4 py-2 border bg-gray-100 text-left">
				{header}
			</th>
		{/each}
	</tr>
</thead>

<style>
	th {
		@apply bg-gray-100 text-left;
	}
</style>
