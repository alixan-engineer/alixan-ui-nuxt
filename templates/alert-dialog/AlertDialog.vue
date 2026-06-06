<script setup lang="ts">
import { Info } from '@lucide/vue';
import type { Component } from 'vue';

type DialogButtonColor = 'default' | 'primary' | 'secondary' | 'destructive';
type DialogMediaComponent = Component | string;
type DialogMediaProps = Record<string, unknown>;

interface AlertDialogData {
	title?: string;
	description?: string;
	buttonLabel?: string;
	buttonColor?: DialogButtonColor;
	mediaComponent?: DialogMediaComponent;
	mediaProps?: DialogMediaProps;
	onAction?: () => void;
}

const props = defineProps<{
	data?: AlertDialogData;
	close: () => void;
}>();

const handleAction = (): void => {
	props.data?.onAction?.();
	props.close();
};
</script>

<template>
	<div class="size-full p-5 text-center">
		<div class="mx-auto mb-4 flex size-20 items-center justify-center overflow-hidden rounded-[24px] bg-secondary text-primary">
			<slot name="illustration">
				<component
					:is="data?.mediaComponent"
					v-if="data?.mediaComponent"
					v-bind="data?.mediaProps"
				/>
				<Info v-else class="size-9" />
			</slot>
		</div>

		<div class="space-y-2">
			<h2 class="text-xl font-semibold">
				{{ data?.title }}
			</h2>
			<p class="text-sm leading-6 text-muted-foreground">
				{{ data?.description }}
			</p>
		</div>

		<Button
			class="mt-5 w-full"
			:color="data?.buttonColor ?? 'primary'"
			@click="handleAction"
		>
			{{ data?.buttonLabel ?? 'OK' }}
		</Button>
	</div>
</template>
