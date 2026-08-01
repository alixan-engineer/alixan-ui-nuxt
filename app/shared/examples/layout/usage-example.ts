export const examples = {
	default: `
<script setup lang="ts">
import Layout from '@/components/ui/layout/Layout.vue'
import Scaffold from '@/components/ui/scaffold/Scaffold.vue'
</script>

<template>
	<Layout>
		<template #sidebar>
			<div class="h-full w-40 p-4 border-r">
				<h1 class="text-xl font-semibold">Sidebar</h1>
			</div>
		</template>

		<template #scaffold>
			<Scaffold>
				<template #app-bar>
					<div class="flex h-14 items-center justify-center border-b px-4">
						<h1 class="text-xl font-semibold">App Bar</h1>
					</div>
				</template>

				<template #body>
					<h1 class="mb-4 text-xl font-semibold">Body</h1>
					<div class="h-80 rounded-2xl bg-secondary" />
				</template>

				<template #bottom-navigation-bar>
					<div class="flex h-14 items-center justify-center border-t px-4">
						<h1 class="text-xl font-semibold">Bottom Navigation Bar</h1>
					</div>
				</template>
			</Scaffold>
		</template>
	</Layout>
</template>
	`,
};
