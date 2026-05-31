<script setup lang="ts">
import { Copy } from '@lucide/vue';

useSeoMeta({
	title: 'Switch - Alixan UI',
	ogTitle: 'Switch - Alixan UI',
	twitterTitle: 'Switch - Alixan UI',
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

const checked = ref(false);
const disabledChecked = ref(true);

const switchProps = [
	{
		name: 'modelValue',
		type: 'boolean',
		default: 'false',
		description: 'Selected state used by v-model.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Optional label rendered next to the switch.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables switch interaction.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const checked = ref(false)
<\/script>

<template>
  <Switch v-model="checked" label="Airplane Mode" />
  <Switch v-model="disabledChecked" label="Disabled" disabled />
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Switch</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A compact toggle control for boolean settings.
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
			<p class="p-4 text-md">npx alixan-ui-nuxt add switch</p>
		</div>
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">Usage</h2>
			<p class="text-muted-foreground leading-7">
				Use <code>v-model</code> to bind the boolean state.
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-col gap-4">
				<Switch v-model="checked" label="Airplane Mode" />
				<Switch v-model="disabledChecked" label="Disabled" disabled />
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
					<tr v-for="item in switchProps" :key="item.name">
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
