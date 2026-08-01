export const examples = {
	default: `
<script setup lang="ts">
import Scaffold from '@/components/ui/scaffold/Scaffold.vue'
</script>

<template>
	<Scaffold>
		<template #app-bar>
			<div class="h-14 flex items-center justify-center px-4 border-b">
				<h1 class="text-xl font-semibold">App Bar</h1>
			</div>
		</template>

		<template #body>
			<h1 class="mb-4 text-xl font-semibold">Body</h1>
			<div class="h-80 rounded-2xl bg-secondary" />
		</template>

		<template #bottom-navigation-bar>
			<div class="h-14 flex items-center justify-center px-4 border-t">
				<h1 class="text-xl font-semibold">
					Bottom Navigation Bar
				</h1>
			</div>
		</template>
	</Scaffold>
</template>
`,
};
