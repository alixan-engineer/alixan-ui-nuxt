<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.checkbox.metaTitle'),
	description: t('componentDocs.checkbox.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const accepted = ref(false);
const selectedPeriod = ref<string | null>('7d');
const selectedOptions = ref<string[]>(['email']);

const checkboxProps = [
	{
		name: 'modelValue',
		type: 'boolean | string | number | Array<string | number> | null',
		default: 'false',
		description: 'Selected state used by v-model.',
	},
	{
		name: 'mode',
		type: "'single' | 'multiple'",
		default: "'single'",
		description: 'Single stores a boolean or one value. Multiple stores an array.',
	},
	{
		name: 'value',
		type: 'string | number',
		default: '-',
		description: 'Value used for single value mode or multiple array mode.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Optional label rendered next to the circular control.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables checkbox interaction.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const accepted = ref(false)
const selectedPeriod = ref('7d')
const selectedOptions = ref(['email'])
<\/script>

<template>
  <Checkbox v-model="accepted" label="Accept terms" />

  <Checkbox v-model="selectedPeriod" value="7d" label="7 d" />
  <Checkbox v-model="selectedPeriod" value="30d" label="30 d" />

  <Checkbox v-model="selectedOptions" mode="multiple" value="email" label="Email" />
  <Checkbox v-model="selectedOptions" mode="multiple" value="sms" label="SMS" />
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.checkbox') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.checkbox.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="checkbox" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-col gap-5">
				<Checkbox v-model="accepted" label="Accept terms" />

				<div class="flex flex-wrap gap-4">
					<Checkbox v-model="selectedPeriod" value="7d" label="7 d" />
					<Checkbox v-model="selectedPeriod" value="30d" label="30 d" />
				</div>

				<div class="flex flex-wrap gap-4">
					<Checkbox
						v-model="selectedOptions"
						mode="multiple"
						value="email"
						label="Email"
					/>
					<Checkbox
						v-model="selectedOptions"
						mode="multiple"
						value="sms"
						label="SMS"
					/>
				</div>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.prop') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.type') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.default') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.description') }}</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in checkboxProps" :key="item.name">
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
