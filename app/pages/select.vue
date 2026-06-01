<script setup lang="ts">
useSeoMeta({
	title: 'Select - Alixan UI',
	ogTitle: 'Select - Alixan UI',
	twitterTitle: 'Select - Alixan UI',
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

const value = ref<string | number | null>('cupertino');
const options = [
	{ label: 'Cupertino', value: 'cupertino' },
	{ label: 'Material', value: 'material' },
	{ label: 'Fluent', value: 'fluent', disabled: true },
];

const selectProps = [
	{ name: 'modelValue', type: 'string | number | null', default: 'null', description: 'Selected option value used by v-model.' },
	{ name: 'label', type: 'string', default: '-', description: 'Floating label text.' },
	{ name: 'placeholder', type: 'string', default: "'Select option'", description: 'Text shown when no option is selected.' },
	{ name: 'options', type: 'SelectOption[]', default: '[]', description: 'Options list with label, value and optional disabled.' },
	{ name: 'disabled', type: 'boolean', default: 'false', description: 'Disables select interaction.' },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Select</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A floating label select with a teleported menu and click-catcher overlay.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="select" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock code="<Select v-model=&quot;value&quot; label=&quot;Design&quot; :options=&quot;options&quot; />">
			<Select v-model="value" label="Design" :options="options" />
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<tbody class="divide-y">
					<tr v-for="item in selectProps" :key="item.name">
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
