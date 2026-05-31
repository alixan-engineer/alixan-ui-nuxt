<script setup lang="ts">
import { Copy } from '@lucide/vue';

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Full Width', href: '#full-width' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const tabs = ['Account', 'Password'];
const selected = ref(0);
const fullSelected = ref(0);

const tabsProps = [
	{
		name: 'modelValue',
		type: 'number',
		default: '0',
		description: 'Selected tab index used by v-model.',
	},
	{
		name: 'tabs',
		type: 'string[]',
		default: '[]',
		description: 'List of tab labels.',
	},
	{
		name: 'full',
		type: 'boolean',
		default: 'false',
		description:
			'Makes the tabs container and every tab use full available width.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const tabs = ['Account', 'Password']
const selected = ref(0)
<\/script>

<template>
  <Tabs v-model="selected" :tabs="tabs" />
</template>`,
	full: `<template>
  <Tabs v-model="selected" :tabs="tabs" full />
</template>`,
};
</script>

<template>
	<header class="space-y-3">
			<h1 class="text-4xl font-semibold">Tabs</h1>
			<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
				A compact segmented navigation component for switching between views.
			</p>
		</header>

		<section id="installation" class="space-y-5">
			<h2 class="text-2xl font-semibold">Installation</h2>
			<div class="island">
				<div class="px-4 py-3 flex items-center gap-4 border-b text-m">
					<span class="font-medium">npm</span>
					<span class="text-muted-foreground">pnpm</span>
					<span class="text-muted-foreground">yarn</span>
					<span class="text-muted-foreground">bun</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<p class="p-4 text-md">npx alixan-ui-nuxt add tabs</p>
			</div>
		</section>

		<section id="usage" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Usage</h2>
				<p class="text-muted-foreground leading-7">
					Use <code>v-model</code> to store the selected tab index.
				</p>
			</div>
			<ExampleBlock :code="examples.usage">
				<Tabs v-model="selected" :tabs="tabs" />
			</ExampleBlock>
		</section>

		<section id="full-width" class="space-y-5">
			<h2 class="text-2xl font-semibold">Full Width</h2>
			<ExampleBlock :code="examples.full">
				<div class="w-full">
					<Tabs v-model="fullSelected" :tabs="tabs" full />
				</div>
			</ExampleBlock>
		</section>

		<section id="api-reference" class="space-y-4">
			<h2 class="text-2xl font-semibold">API Reference</h2>
			<div class="overflow-hidden rounded-xl border">
				<table class="w-full text-left text-sm">
					<thead class="border-b bg-secondary text-muted-foreground">
						<tr>
							<th class="px-4 py-3 font-medium">Prop</th>
							<th class="px-4 py-3 font-medium">Type</th>
							<th class="px-4 py-3 font-medium">Default</th>
							<th class="px-4 py-3 font-medium">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y">
						<tr v-for="item in tabsProps" :key="item.name">
							<td class="px-4 py-3 font-medium">{{ item.name }}</td>
							<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.default }}
							</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.description }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
</template>
