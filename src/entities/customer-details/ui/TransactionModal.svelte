<script lang="ts">
	import Modal from '@shared/Modal.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { TPaymentGateway, TTransactionType } from '../../../types/customer-details';

	const dispatch = createEventDispatcher();

	export let transactionType: TTransactionType;
	export let show: boolean;
	export let onClose: () => void;

	let amount: number = 0;
	let gateway: TPaymentGateway = 'paypal';
	const gateways: TPaymentGateway[] = ['paysafe', 'paypal', 'skrill'];

	const gatewaysLabels: Record<TPaymentGateway, string> = {
		paypal: 'Paypal',
		paysafe: 'Paysafe',
		skrill: 'Skrill'
	};

	const handleSubmit = () => {
		// Validate amount
		if (!/^\d+(\.\d{1,2})?$/.test(amount.toString())) {
			// todo: show error
			return;
		}
		dispatch('submit', { amount, gateway, transactionType });
		closeModal();
	};

	const closeModal = () => {
		if (onClose) {
			onClose();
		}
		dispatch('close');
	};
</script>

<Modal
	{show}
	title={transactionType === 'deposit' ? 'Deposit Funds' : 'Withdraw Funds'}
	onClose={closeModal}
	onCancel={closeModal}
	onSubmit={handleSubmit}
>
	<div>
		<div class="mb-4">
			<label class="block mb-1">Amount</label>
			<input
				type="number"
				bind:value={amount}
				class="w-full border px-3 py-2"
				min="0"
				step="0.01"
			/>
		</div>
		<div class="mb-4">
			<label class="block mb-1">Gateway</label>
			<select bind:value={gateway} class="w-full border px-3 py-2" required>
				{#each gateways as option}
					<option value={option}>{gatewaysLabels[option]}</option>
				{/each}
			</select>
		</div>
	</div>
</Modal>
