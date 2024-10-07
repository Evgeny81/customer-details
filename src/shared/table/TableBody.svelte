<script lang="ts">
	export let rows: any[] = [];
	export let columns: string[] = [];
</script>

<tbody>
	{#each rows as row}
		<tr>
			{#each columns as column}
				<td class="px-4 py-2 border">
					{row[column]}
				</td>
			{/each}
		</tr>
	{/each}
</tbody>

<style>
	td {
		@apply border-t;
	}
</style>
