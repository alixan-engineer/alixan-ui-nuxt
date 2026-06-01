<script setup lang="ts">
useSeoMeta({
	title: 'Tabs - Alixan UI',
	ogTitle: 'Tabs - Alixan UI',
	twitterTitle: 'Tabs - Alixan UI',
});

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
const materialSelected = ref(0);
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
		name: 'design',
		type: "'material' | 'cupertino'",
		default: "'cupertino'",
		description: 'Visual style of the tabs.',
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
  <div class="grid gap-4">
    <Tabs v-model="selected" :tabs="tabs" design="cupertino" />
    <Tabs v-model="selected" :tabs="tabs" design="material" />
  </div>
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
		<InstallCommandBlock component="tabs" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="examples.usage">
			<div class="grid gap-4">
				<Tabs v-model="selected" :tabs="tabs" design="cupertino" />
				<Tabs v-model="materialSelected" :tabs="tabs" design="material" />
			</div>
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
