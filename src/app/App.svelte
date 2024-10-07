<script lang="ts">
	import { onMount } from 'svelte';

	import { fetchCustomerData } from '../api';
	import CustomerData from '@features/customer-details/ui/CustomerData.svelte';
	import CustomerInfo from '@features/customer-details/ui/CustomerInfo.svelte';
	import { customerStore } from '../entities/customer-details/model/store';

	onMount(async () => {
		const data = await fetchCustomerData();
		customerStore.set(data);
	});
</script>

{#if $customerStore}
	<div>
		<div class="fixed left-0 h-full w-80 bg-primary text-white p-6 overflow-hidden">
			<div class="flex flex-col justify-between">
				<CustomerInfo />
			</div>
		</div>

		<div class="ml-80 mr-8 mt-2 pl-8">
			<CustomerData />
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center h-screen">
		<p>Loading...</p>
	</div>
{/if}
