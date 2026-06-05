<script setup lang="ts">
usePageMeta({
	title: 'Accordion - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Multiple', href: '#multiple' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const activeItem = ref<string | number | null>('item-1');
const activeItems = ref<Array<string | number>>(['item-1']);

const items = [
	{
		value: 'item-1',
		title: 'Is it accessible?',
		content:
			'Yes. The trigger uses a native button and exposes aria-expanded for screen readers.',
	},
	{
		value: 'item-2',
		title: 'Is it styled?',
		content:
			'Yes. It follows the same clean spacing, rounded corners and muted typography as Alixan UI.',
	},
	{
		value: 'item-3',
		title: 'Can I use slots?',
		content:
			'Yes. Use title and content slots when you need custom markup for each item.',
	},
] as const;

const usageCode = `<script setup lang="ts">
const activeItem = ref('item-1')

const items = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. The trigger uses a native button.',
  },
  {
    value: 'item-2',
    title: 'Is it styled?',
    content: 'Yes. It follows Alixan UI visual language.',
  },
]
<\/script>

<template>
  <Accordion v-model="activeItem" :items="items" />
</template>`;

const multipleCode = `<script setup lang="ts">
const activeItems = ref(['item-1'])
<\/script>

<template>
  <Accordion
    v-model="activeItems"
    :items="items"
    multiple
  />
</template>`;

const apiRows = [
	{
		prop: 'items',
		type: 'AccordionItem[]',
		default: '[]',
		description: 'Accordion sections rendered by the component.',
	},
	{
		prop: 'modelValue',
		type: 'string | number | Array<string | number> | null',
		default: 'null',
		description: 'Controlled open item value. Use an array with multiple mode.',
	},
	{
		prop: 'multiple',
		type: 'boolean',
		default: 'false',
		description: 'Allows more than one item to stay open.',
	},
	{
		prop: 'collapsible',
		type: 'boolean',
		default: 'true',
		description: 'Allows the active single item to be closed.',
	},
] as const;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Accordion</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A vertical disclosure component for grouped content, inspired by
			shadcn-vue and adapted for Nuxt auto-import.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="accordion" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-xl">
				<Accordion v-model="activeItem" :items="items" />
			</div>
		</ExampleBlock>
	</section>

	<section id="multiple" class="space-y-5">
		<h2 class="text-2xl font-semibold">Multiple</h2>
		<ExampleBlock :code="multipleCode">
			<div class="w-full max-w-xl">
				<Accordion
					v-model="activeItems"
					:items="items"
					multiple
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-5">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-2xl border">
			<table class="w-full text-left text-sm">
				<thead class="bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Prop</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="row in apiRows" :key="row.prop">
						<td class="px-4 py-3 font-medium">{{ row.prop }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ row.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ row.default }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ row.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
