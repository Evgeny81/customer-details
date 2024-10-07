<script lang="ts">
	import { customerStore } from '../model/store';

	$: customer = $customerStore;
</script>

<div>
	<ul>
		{#each customer.activity as activity}
			<li class="mb-2">
				<span class="text-gray-600">{activity.datetime}</span>
				<p>{activity.activity_test}</p>
			</li>
		{/each}
	</ul>
</div>
