<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let title: string;
	export let show: boolean;
	export let onClose: () => void;

	export let cancelLabel: string = 'Cancel';
	export let submitLabel: string = 'Submit';
	export let onCancel: () => void;
	export let onSubmit: () => void;

	const closeModal = () => {
		if (onClose) {
			onClose();
		}
		dispatch('close');
	};

	const handleCancel = () => {
		if (onCancel) {
			onCancel();
		}
		closeModal();
	};

	const handleSubmit = () => {
		if (onSubmit) {
			onSubmit();
		}
	};
</script>

{#if show}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<div class="bg-white p-6 rounded shadow-lg w-96 relative">
			<button
				class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
				on:click={closeModal}
			>
				&times;
			</button>
			<h2 class="text-xl font-bold mb-4">{title}</h2>

			<div class="mb-4">
				<slot />
			</div>

			<div class="flex justify-end space-x-2">
				<button class="btn-secondary" on:click={handleCancel}>{cancelLabel}</button>
				<button class="btn-primary" on:click={handleSubmit}>{submitLabel}</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.btn-primary {
		@apply bg-primary text-white px-4 py-2 rounded;
	}
	.btn-secondary {
		@apply bg-secondary text-white px-4 py-2 rounded;
	}
</style>
