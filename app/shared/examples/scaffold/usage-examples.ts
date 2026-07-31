export const examples = {
	default: `<Scaffold>
	<template #app-bar>
		<div class="h-14 flex items-center justify-center px-4 border-b">
			<h1 class="text-xl font-semibold">App Bar</h1>
		</div>
	</template>

	<template #body>
		<h1 class="text-xl font-semibold mb-4">Body</h1>
		<div class="h-80 bg-secondary rounded-2xl" />
	</template>

	<template #bottom-navigation-bar>
		<div class="h-14 flex items-center justify-center px-4 border-t">
			<h1 class="text-xl font-semibold">
				Bottom Navigation Bar
			</h1>
		</div>
	</template>
</Scaffold>`,
};
