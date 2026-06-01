<script setup lang="ts">
useSeoMeta({
	title: 'Status - Alixan UI',
	ogTitle: 'Status - Alixan UI',
	twitterTitle: 'Status - Alixan UI',
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

const statusProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'info' | 'error'",
		default: "'info'",
		description: 'Semantic status tone.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, padding and gap.',
	},
];

const examples = {
	usage: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status label="Success" type="success" />
    <Status label="Warning" type="warning" />
    <Status label="Info" type="info" />
    <Status label="Error" type="error" />
  </div>
</template>`,
	size: `<template>
  <div class="flex flex-wrap items-center gap-2">
    <Status label="Small" size="sm" type="success" />
    <Status label="Medium" type="success" />
    <Status label="Large" size="lg" type="success" />
  </div>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Status</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A soft Cupertino-inspired status pill for success, warning, info and
			error states.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="status" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Status label="Success" type="success" />
				<Status label="Warning" type="warning" />
				<Status label="Info" type="info" />
				<Status label="Error" type="error" />
			</div>
		</ExampleBlock>
	</section>

	<section id="size" class="space-y-5">
		<h2 class="text-2xl font-semibold">Size</h2>
		<ExampleBlock :code="examples.size">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Status label="Small" size="sm" type="success" />
				<Status label="Medium" type="success" />
				<Status label="Large" size="lg" type="success" />
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
					<tr v-for="item in statusProps" :key="item.name">
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
