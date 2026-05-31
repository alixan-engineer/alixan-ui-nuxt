<script setup lang="ts">
import { Copy } from '@lucide/vue';

useSeoMeta({
	title: 'Drawer - Alixan UI',
	ogTitle: 'Drawer - Alixan UI',
	twitterTitle: 'Drawer - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const open = ref(false);

const drawerProps = [
	{ name: 'modelValue', type: 'boolean', default: 'false', description: 'Controls drawer visibility with v-model.' },
	{ name: 'title', type: 'string', default: '-', description: 'Drawer title.' },
	{ name: 'description', type: 'string', default: '-', description: 'Optional text under the title.' },
	{ name: 'side', type: "'right' | 'left' | 'bottom'", default: "'right'", description: 'Drawer placement.' },
	{ name: 'closeOnOverlay', type: 'boolean', default: 'true', description: 'Closes drawer when the click-catcher overlay is pressed.' },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Drawer</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A teleported panel for secondary flows and mobile-friendly details.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<div class="island">
			<div class="px-4 py-3 flex items-center gap-4 border-b text-m">
				<span class="font-medium">npm</span>
				<div class="flex-1" />
				<Copy class="size-5 text-muted-foreground" />
			</div>
			<p class="p-4 text-md">npx alixan-ui-nuxt add drawer</p>
		</div>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock code="<Drawer v-model=&quot;open&quot; title=&quot;Settings&quot;>...</Drawer>">
			<Button @click="open = true">Open drawer</Button>
			<Drawer v-model="open" title="Settings" description="Update workspace preferences.">
				<div class="space-y-3">
					<Input label="Workspace name" />
					<Switch label="Enable notifications" />
				</div>
				<template #footer>
					<Button @click="open = false">Save</Button>
				</template>
			</Drawer>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<tbody class="divide-y">
					<tr v-for="item in drawerProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.default }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.description }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
