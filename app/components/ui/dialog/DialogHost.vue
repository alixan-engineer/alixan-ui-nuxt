<script setup lang="ts">
const dialog = useDialog();

const open = computed({
	get: () => Boolean(dialog.state.value),
	set: value => {
		if (!value) {
			dialog.close();
		}
	},
});
</script>

<template>
	<ClientOnly>
		<Dialog
			v-model="open"
			:width="dialog.state.value?.options.width"
			:height="dialog.state.value?.options.height"
			:title="dialog.state.value?.options.title"
		>
			<template v-if="dialog.state.value">
				<component
					:is="dialog.state.value.component"
					:data="dialog.state.value.options.data"
					:close="dialog.close"
				/>
			</template>
		</Dialog>
	</ClientOnly>
</template>
