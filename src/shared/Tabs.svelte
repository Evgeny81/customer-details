<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let tabs: { id: string; title: string }[];
	export let activeTab: string;
	export let onTabChange: (id: string) => void;

	const dispatch = createEventDispatcher();

	const handleTabClick = (id: string) => {
		if (onTabChange) {
			onTabChange(id);
		}
		dispatch('change', { id });
	};
</script>

<div>
	<!-- Tab Navigation -->
	<div class="border-b">
		{#each tabs as tab}
			<button
				class={`px-4 py-2 -mb-px ${activeTab === tab.id ? 'border-b-2 border-primary' : ''}`}
				on:click={() => handleTabClick(tab.id)}
			>
				{tab.title}
			</button>
		{/each}
	</div>

	<!-- Tab Content -->
	<div class="mt-4">
		<slot {activeTab} />
	</div>
</div>
