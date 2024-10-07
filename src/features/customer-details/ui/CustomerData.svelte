<script lang="ts">
	import Tabs from '@shared/Tabs.svelte';
	import PersonalDetails from '@entities/customer-details/ui/PersonalDetails.svelte';
	import Notes from '@entities/customer-details/ui/Notes.svelte';
	import Activity from '@entities/customer-details/ui/Activity.svelte';
	import TradingAccounts from '@entities/customer-details/ui/TradingAccounts.svelte';
	import Documents from '@entities/customer-details/ui/Documents.svelte';
	import ImportantActions from '@entities/customer-details/ui/ImportantActions.svelte';
	import Settings from '@entities/customer-details/ui/Settings.svelte';
	import Payments from '@entities/customer-details/ui/Payments.svelte';
	import { customerStore } from '../../../entities/customer-details/model/store';

	let activeTab = 'trading-accounts';

	const tabs = [
		{ id: 'trading-accounts', title: 'Trading Accounts' },
		{ id: 'personal-details', title: 'Personal Details' },
		{ id: 'activity', title: 'Activity' },
		{ id: 'payments', title: 'Payments' },
		{ id: 'documents', title: 'Documents' },
		{ id: 'notes', title: 'Notes' },
		{ id: 'important-actions', title: 'Actions' },
		{ id: 'settings', title: 'Settings' }
	];

	const handleTabChange = (id: string) => {
		activeTab = id;
	};
	$: customer = $customerStore;
</script>

<Tabs {tabs} {activeTab} onTabChange={handleTabChange}>
	{#if activeTab === 'personal-details'}
		<PersonalDetails />
	{:else if activeTab === 'notes'}
		<Notes />
	{:else if activeTab === 'activity'}
		<Activity />
	{:else if activeTab === 'payments'}
		<Payments payments={customer.payments} />
	{:else if activeTab === 'trading-accounts'}
		<TradingAccounts />
	{:else if activeTab === 'documents'}
		<Documents />
	{:else if activeTab === 'important-actions'}
		<ImportantActions />
	{:else if activeTab === 'settings'}
		<Settings />
	{/if}
</Tabs>
