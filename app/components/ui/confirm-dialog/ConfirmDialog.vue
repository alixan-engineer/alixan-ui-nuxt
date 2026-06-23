<script setup lang="ts">
type DialogButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';

interface ConfirmDialogData {
	title: string;
	description?: string;
	cancelLabel: string;
	submitLabel: string;
	submitColor?: DialogButtonColor;
	onCancel?: () => void;
	onSubmit?: () => unknown | Promise<unknown>;
}

const props = defineProps<{
	data?: ConfirmDialogData;
	close: () => void;
}>();

const isSubmitting = ref(false);

const cancel = (): void => {
	props.data?.onCancel?.();
	props.close();
};

const submit = async (): Promise<void> => {
	if (isSubmitting.value) {
		return;
	}

	isSubmitting.value = true;
	try {
		await props.data?.onSubmit?.();
		props.close();
	} finally {
		isSubmitting.value = false;
	}
};
</script>

<template>
	<div class="size-full flex flex-col p-5">
		<div class="flex-1 space-y-3 text-center">
			<h2 class="text-xl font-semibold">
				{{ $t(data?.title ?? '') }}
			</h2>
			<p v-if="data?.description" class="text-base leading-6 text-muted-foreground">
				{{ $t(data.description) }}
			</p>
		</div>

		<div class="grid grid-cols-2 gap-2">
			<Button variant="outlined" @click="cancel">
				{{ $t(data?.cancelLabel ?? 'actions.cancel') }}
			</Button>
			<Button
				:color="data?.submitColor ?? 'primary'"
				:disabled="isSubmitting"
				@click="submit"
			>
				{{ $t(data?.submitLabel ?? 'actions.confirm') }}
			</Button>
		</div>
	</div>
</template>
