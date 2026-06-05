<script setup lang="ts">
const toast = useToast();
</script>

<template>
	<Teleport to="body">
		<TransitionGroup
			name="toast-list"
			tag="div"
			class="fixed left-1/2 top-5 z-[80] flex w-[calc(100%-2rem)] max-w-[440px] -translate-x-1/2 flex-col gap-3"
		>
			<Toast
				v-for="message in toast.messages.value"
				:key="message.id"
				:toast="message"
				@close="toast.remove(message.id)"
			/>
		</TransitionGroup>
	</Teleport>
</template>

<style scoped>
.toast-list-enter-active,
.toast-list-leave-active,
.toast-list-move {
	transition:
		opacity 180ms ease,
		transform 180ms ease;
}

.toast-list-enter-from,
.toast-list-leave-to {
	opacity: 0;
	transform: translateY(-12px) scale(0.98);
}

.toast-list-leave-active {
	position: absolute;
	width: 100%;
}
</style>
