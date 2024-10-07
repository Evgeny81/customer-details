<script lang="ts">
	import { customerStore } from '../model/store';

	$: customer = $customerStore;
</script>

<div>
	<table class="table-auto w-full">
		<tbody>
			<tr>
				<td class="px-4 py-2 font-semibold">Name</td>
				<td class="px-4 py-2">{customer.firstname} {customer.lastname}</td>
			</tr>
			<tr>
				<td class="px-4 py-2 font-semibold">Address</td>
				<td class="px-4 py-2">
					{customer.postcode}, {customer.address1}, {customer.city}, {customer.country}
				</td>
			</tr>
			<tr>
				<td class="px-4 py-2 font-semibold">Phone</td>
				<td class="px-4 py-2">{customer.phone}</td>
			</tr>
		</tbody>
	</table>
</div>
