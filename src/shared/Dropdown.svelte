<script>
	import { createEventDispatcher } from 'svelte';

	let open = false;
	export let actions;
	export let label;

	const dispatch = createEventDispatcher();

	const handleActionClick = (action) => {
		dispatch('select', { action });
		open = false;
	};
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
			on:click={() => (open = !open)}
		>
			{label}
		</button>
	</div>

	{#if open && actions.length}
		<div class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
			<div class="py-1">
				{#each actions as action}
					<button
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
						on:click|preventDefault={() => handleActionClick(action)}
					>
						{action}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
