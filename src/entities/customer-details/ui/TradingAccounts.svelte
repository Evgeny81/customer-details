<script lang="ts">
	import Table from '@shared/table/Table.svelte';
	import TableHead from '@shared/table/TableHead.svelte';
	import TableBody from '@shared/table/TableBody.svelte';
	import type { TTradingAccount } from '../../../types/customer-details';
	import { customerStore } from '../model/store';

	const headers = ['TAID', 'Account Type', 'Platform', 'Balance'];
	const columns = ['taid', 'account_type', 'platform', 'balance'];

	const formatRow = (account: TTradingAccount) => ({
		taid: account.taid,
		account_type: account.account_type,
		platform: account.platform,
		balance: account.balance.toFixed(2)
	});

	$: customer = $customerStore;
	$: rows = customer?.trading_accounts.map(formatRow);
</script>

<div>
	{#if rows && rows.length > 0}
		<Table>
			<TableHead {headers} />
			<TableBody {rows} {columns} />
		</Table>
	{:else}
		<p>No trading accounts found.</p>
	{/if}
</div>
