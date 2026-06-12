export const examples = {
	usage: `
<script setup lang="ts">
const toast = useToast();

const onTap = () => {
  toast.open('card.addedToCard', 'success');
};
</script>

<template>
	<Card
		image="/mac.webp"
		title="card.demoTitle"
		description="card.demoDescription"
		price="$640"
		button="card.addToCart"
		@on-tap="onTap"
	/>
</template>
`,
};
