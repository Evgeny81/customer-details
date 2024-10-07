<script lang="ts">
	import { customerStore } from '../model/store';

	$: customer = $customerStore;
</script>

<div>
	<ul>
		{#each customer.notes as note}
			<li class="mb-2">
				<span class="text-gray-600">{note.datetime}</span>
				<p>{note.note_text}</p>
			</li>
		{/each}
	</ul>
</div>
