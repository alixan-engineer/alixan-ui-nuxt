<script setup lang="ts">
usePageMeta({
	title: 'Empty - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'With Media', href: '#with-media' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const emptyProps = [
	{
		name: 'title',
		type: 'string',
		default: '-',
		description: 'Main empty state heading.',
	},
	{
		name: 'description',
		type: 'string',
		default: '-',
		description: 'Optional supporting text.',
	},
	{
		name: 'button',
		type: 'string',
		default: '-',
		description: 'Optional action button label.',
	},
];

const emptySlots = [
	{
		name: 'default',
		description: 'Optional media rendered above the title.',
	},
];

const examples = {
	usage: `<template>
  <Empty
    title="No results"
    description="Try changing filters or search query."
    button="Reset filters"
    @action="resetFilters"
  />
</template>`,
	withMedia: `<template>
  <Empty
    title="Page not found"
    description="The page you are looking for does not exist or has been moved."
    button="Go home"
    @action="navigateTo('/')"
  >
    <Lottie name="error" width="160px" height="140px" />
  </Empty>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Empty</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A centered empty state for missing data, empty search results and error
			pages.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="empty" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="examples.usage">
			<Empty
				title="No results"
				description="Try changing filters or search query."
				button="Reset filters"
			/>
		</ExampleBlock>
	</section>

	<section id="with-media" class="space-y-5">
		<h2 class="text-2xl font-semibold">With Media</h2>
		<ExampleBlock :code="examples.withMedia">
			<Empty
				title="Page not found"
				description="The page you are looking for does not exist or has been moved."
				button="Go home"
			>
				<Lottie name="error" width="160px" height="140px" />
			</Empty>
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
					<tr v-for="item in emptyProps" :key="item.name">
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

		<h3 class="pt-4 text-xl font-semibold">Slots</h3>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Slot</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in emptySlots" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
