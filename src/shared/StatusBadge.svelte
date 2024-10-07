<script lang="ts">
	import type { TCustomerStatus } from '../types/customer-details';
	import { customerStore } from '../entities/customer-details/model/store';

	$: customer = $customerStore;
	$: status = customer?.status;

	const statusColors: Record<TCustomerStatus, string> = {
		pending: 'bg-yellow-500',
		approved: 'bg-green-500',
		rejected: 'bg-red-500',
		archived: 'bg-gray-500'
	};
</script>

<span class={`text-white px-3 py-1 rounded ${statusColors[status]}`}>
	{status}
</span>
