<script lang="ts">
	import Dropdown from '@shared/Dropdown.svelte';
	import {
		TCustomerStatus,
		TPaymentStatus,
		type TTransactionEventDetail,
		type TTransactionType
	} from '../../../types/customer-details';
	import TransactionModal from './TransactionModal.svelte';
	import { customerStore } from '../model/store';

	$: customer = $customerStore;
	let showTransactionModal = false;
	let transactionType: TTransactionType;
	const openTransactionModal = (type: TTransactionType) => {
		transactionType = type;
		showTransactionModal = true;
	};
	const closeTransactionModal = () => (showTransactionModal = false);

	const handleTransaction = (event: CustomEvent<TTransactionEventDetail>) => {
		const { amount, gateway, transactionType } = event.detail;
		const newPid = Math.max(...customer.payments.map((p) => p.pid)) + 1;
		const newPayment = {
			pid: newPid,
			gateway,
			type: transactionType,
			amount: parseFloat(amount.toFixed(2)),
			status: TPaymentStatus.Approved,
			datetime: new Date().toISOString()
		};
		customer.payments.push(newPayment);

		if (transactionType === 'deposit') {
			customerStore.set({
				...customer,
				wallet: { ...customer.wallet, balance: customer.wallet.balance + newPayment.amount }
			});
		} else if (transactionType === 'withdrawal') {
			if (customer.wallet.balance >= amount) {
				customerStore.set({
					...customer,
					wallet: { ...customer.wallet, balance: customer.wallet.balance - newPayment.amount }
				});
			} else {
				// todo: show error
			}
		}
	};

	const handleStatusChange = (event) => {
		const selectedAction = event.detail.action;

		const statusMap: Record<string, TCustomerStatus> = {
			Approve: TCustomerStatus.Approved,
			Reject: TCustomerStatus.Rejected,
			Archive: TCustomerStatus.Archived,
			Pending: TCustomerStatus.Pending
		};
		const newStatus = statusMap[selectedAction];
		if (newStatus) {
			customerStore.set({ ...customer, status: newStatus });
		}
	};
</script>

<div class="flex flex-col space-y-2">
	<button class="btn btn-primary" on:click={() => openTransactionModal('deposit')}>Deposit</button>
	<button class="btn btn-primary" on:click={() => openTransactionModal('withdrawal')}
		>Withdraw</button
	>

	<Dropdown
		actions={['Approve', 'Reject', 'Archive', 'Pending']}
		label="Change status"
		on:select={handleStatusChange}
	/>

	{#if showTransactionModal}
		<TransactionModal
			{transactionType}
			show={showTransactionModal}
			onClose={closeTransactionModal}
			on:submit={handleTransaction}
		/>
	{/if}
</div>

<style>
	.btn {
		@apply text-white px-4 py-2 rounded bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded w-full;
	}
	.btn-primary {
		@apply bg-primary;
	}
</style>
