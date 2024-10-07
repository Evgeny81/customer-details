<script lang="ts">
	import StatusBadge from '@shared/StatusBadge.svelte';
	import { customerStore } from '../../../entities/customer-details/model/store';

	$: customer = $customerStore;
</script>

<div>
	<h1 class="text-3xl font-bold">
		{customer.firstname}
		{customer.lastname}
	</h1>
	<StatusBadge status={customer.status} />
	<p class="mt-2">{customer.email}</p>
	<p>{customer.phone}</p>
	<p class="mt-4">
		<span class="font-semibold">Wallet Balance:</span>
		{customer.wallet.currency}
		{customer.wallet.balance.toFixed(2)}
	</p>
</div>
