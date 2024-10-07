<script lang="ts">
	import { customerStore } from '../model/store';

	$: customer = $customerStore;

	const saveChanges = () => {
		customerStore.set({ ...customer });
	};
</script>

<form on:submit|preventDefault={saveChanges} class="space-y-4">
	<div>
		<label class="block mb-1">Email</label>
		<input type="email" bind:value={customer.email} class="w-full border px-3 py-2" />
	</div>
	<div>
		<label class="block mb-1">First Name</label>
		<input type="text" bind:value={customer.firstname} class="w-full border px-3 py-2" />
	</div>
	<div>
		<label class="block mb-1">Last Name</label>
		<input type="text" bind:value={customer.lastname} class="w-full border px-3 py-2" />
	</div>
	<button type="submit" class="btn-primary">Save Changes</button>
</form>

<style>
	.btn-primary {
		@apply bg-primary text-white px-4 py-2 rounded;
	}
</style>
