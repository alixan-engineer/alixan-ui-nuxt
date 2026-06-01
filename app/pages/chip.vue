<script setup lang="ts">
useSeoMeta({
	title: 'Chip - Alixan UI',
	ogTitle: 'Chip - Alixan UI',
	twitterTitle: 'Chip - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Size', href: '#size' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const chipProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'type',
		type: "'default' | 'select' | 'remove'",
		default: "'default'",
		description: 'Adds the select chevron or remove icon.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, radius, padding and icon size.',
	},
	{
		name: 'selected',
		type: 'boolean',
		default: 'false',
		description: 'Switches the chip into the active primary state.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables interaction and reduces opacity.',
	},
];

const examples = {
	usage: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Chip label="Default" />
    <Chip label="Selected" selected />
    <Chip label="Design" type="select" />
    <Chip label="Nuxt" type="remove" />
  </div>
</template>`,
	size: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Chip label="Small" size="sm" />
    <Chip label="Medium" />
    <Chip label="Large" size="lg" />
  </div>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Chip</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A compact interactive token for filters, selections and removable
			metadata.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="chip" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Chip label="Default" />
				<Chip label="Selected" selected />
				<Chip label="Design" type="select" />
				<Chip label="Nuxt" type="remove" />
			</div>
		</ExampleBlock>
	</section>

	<section id="size" class="space-y-5">
		<h2 class="text-2xl font-semibold">Size</h2>
		<ExampleBlock :code="examples.size">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Chip label="Small" size="sm" />
				<Chip label="Medium" />
				<Chip label="Large" size="lg" />
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
					<tr v-for="item in chipProps" :key="item.name">
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
