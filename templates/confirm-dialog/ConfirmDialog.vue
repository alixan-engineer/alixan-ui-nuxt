<script setup lang="ts">
type DialogButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';

interface ConfirmDialogData {
	title?: string;
	description?: string;
	cancelLabel?: string;
	submitLabel?: string;
	submitColor?: DialogButtonColor;
	onCancel?: () => void;
	onSubmit?: () => void;
}

const props = defineProps<{
	data?: ConfirmDialogData;
	close: () => void;
}>();

const cancel = (): void => {
	props.data?.onCancel?.();
	props.close();
};

const submit = (): void => {
	props.data?.onSubmit?.();
	props.close();
};
</script>

<template>
	<div class="size-full flex flex-col p-5">
		<div class="flex-1 space-y-2 text-center">
			<h2 class="text-xl font-semibold">
				{{ data?.title }}
			</h2>
			<p class="text-sm leading-6 text-muted-foreground">
				{{ data?.description }}
			</p>
		</div>

		<div class="grid grid-cols-2 gap-2">
			<Button variant="outlined" @click="cancel">
				{{ data?.cancelLabel ?? 'Cancel' }}
			</Button>
			<Button :color="data?.submitColor ?? 'primary'" @click="submit">
				{{ data?.submitLabel ?? 'Confirm' }}
			</Button>
		</div>
	</div>
</template>
