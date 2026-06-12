<script setup lang="ts">
interface CardProps {
	image?: string;
	imageAlt?: string;
	title: string;
	description?: string;
	price?: string;
	button?: string;
}

withDefaults(defineProps<CardProps>(), {
	image: undefined,
	imageAlt: '',
	description: undefined,
	price: undefined,
	button: undefined,
});

const emit = defineEmits<{
	onTap: [];
}>();
</script>

<template>
	<article class="island overflow-hidden bg-background">
		<img
			v-if="image"
			:src="image"
			:alt="$tn(imageAlt)"
			class="w-full aspect-auto object-cover"
		/>
		<div class="space-y-4 p-4">
			<div class="space-y-2">
				<h3 class="text-lg font-semibold leading-6">
					{{ $tn(title) }}
				</h3>
				<p v-if="description" class="text-md leading-6 text-muted-foreground">
					{{ $tn(description) }}
				</p>
			</div>
			<div class="flex items-center justify-between gap-3">
				<p v-if="price" class="text-lg font-semibold">
					{{ $tn(price) }}
				</p>
				<Button
					v-if="button"
					class="ml-auto"
					size="sm"
					color="primary"
					@click="emit('onTap')"
				>
					{{ $tn(button) }}
				</Button>
			</div>
		</div>
	</article>
</template>
