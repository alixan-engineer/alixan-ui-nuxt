<script setup lang="ts">
interface InstallCommandBlockProps {
	component: string;
}

const props = defineProps<InstallCommandBlockProps>();

const tabs = ['npm', 'pnpm', 'yarn', 'bun'];
const selectedTab = ref(0);

const commands = computed(() => ({
	npm: `npx alixan-ui-nuxt add ${props.component}`,
	pnpm: `pnpm dlx alixan-ui-nuxt add ${props.component}`,
	yarn: `yarn dlx alixan-ui-nuxt add ${props.component}`,
	bun: `bunx alixan-ui-nuxt add ${props.component}`,
}));

const activePackageManager = computed(() => tabs[selectedTab.value] ?? 'npm');
const activeCommand = computed(
	() =>
		commands.value[activePackageManager.value as keyof typeof commands.value],
);
</script>

<template>
	<div class="island">
		<div class="flex items-center gap-4 border-b">
			<Tabs v-model="selectedTab" :tabs="tabs" design="material" />
			<div class="flex-1" />
			<CopyButton :text="activeCommand" label="Copy command" />
		</div>

		<pre class="p-4 text-md"><code>{{ activeCommand }}</code></pre>
	</div>
</template>
