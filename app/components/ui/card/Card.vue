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
	<Island content-class="p-0!">
		<img
			v-if="image"
			:src="image"
			:alt="$t(imageAlt)"
			loading="lazy"
			class="w-full aspect-auto object-cover"
		/>
		<div class="space-y-4 p-4">
			<div class="space-y-2">
				<h3 class="text-lg font-semibold leading-6">
					{{ $t(title) }}
				</h3>
				<p v-if="description" class="text-md leading-6 text-muted-foreground">
					{{ $t(description) }}
				</p>
			</div>
			<div class="flex items-center justify-between gap-3">
				<p v-if="price" class="text-2xl font-semibold">
					{{ $t(price) }}
				</p>
				<Button v-if="button" color="primary" @click="emit('onTap')">
					{{ $t(button) }}
				</Button>
			</div>
		</div>
	</Island>
</template>
