<script setup lang="ts">
const loader = useGlobalLoader();
</script>

<template>
	<Teleport to="body">
		<Transition name="global-loader">
			<div
				v-if="loader.state.value.open"
				class="fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm"
			>
				<GlobalLoader :label="loader.state.value.label" />
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.global-loader-enter-active,
.global-loader-leave-active {
	transition:
		opacity 160ms ease,
		transform 160ms ease;
}

.global-loader-enter-from,
.global-loader-leave-to {
	opacity: 0;
	transform: scale(0.98);
}
</style>
