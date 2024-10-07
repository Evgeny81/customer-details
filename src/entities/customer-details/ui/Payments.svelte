<script lang="ts">
	import Table from '@shared/table/Table.svelte';
	import TableHead from '@shared/table/TableHead.svelte';
	import TableBody from '@shared/table/TableBody.svelte';
	import type { TPayment } from '../../../types/customer-details';

	export let payments: TPayment[];

	const headers = ['PID', 'Gateway', 'Type', 'Amount', 'Status', 'Date/Time'];
	const columns = ['pid', 'gateway', 'type', 'amount', 'status', 'datetime'];

	const formatDate = (datetime: string) => {
		const date = new Date(datetime);
		return date.toLocaleString();
	};

	const formatRow = (payment: TPayment) => ({
		pid: payment.pid,
		gateway: payment.gateway,
		type: payment.type,
		amount: payment.amount.toFixed(2),
		status: payment.status,
		datetime: formatDate(payment.datetime)
	});

	const rows = payments?.map(formatRow) || [];
</script>

<div>
	{#if payments && payments.length > 0}
		<Table>
			<TableHead {headers} />
			<TableBody {rows} {columns} />
		</Table>
	{:else}
		<p>No payments</p>
	{/if}
</div>
