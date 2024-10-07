<script lang="ts">
	export let classes: string = '';
</script>

<table class={`min-w-full bg-white ${classes}`}>
	<slot />
</table>

<style>
	table {
		@apply w-full;
	}
</style>
