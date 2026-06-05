<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.search.metaTitle'),
	description: t('componentDocs.search.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.debounce'), href: '#debounce' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const searchValue = ref('');
const debouncedValue = ref('');
const fastValue = ref('');
const fastDebouncedValue = ref('');

const searchProps = [
	{
		name: 'modelValue',
		type: 'string',
		default: "''",
		description: 'Search input value used by v-model.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: "'Search'",
		description: 'Placeholder text inside the search field.',
	},
	{
		name: 'debounce',
		type: 'number',
		default: '300',
		description: 'Delay in milliseconds before emitting the search event.',
	},
	{
		name: 'autofocus',
		type: 'boolean',
		default: 'false',
		description: 'Focuses the input when it is mounted.',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		description: 'Makes the field readable but not editable.',
	},
];

const searchEvents = [
	{
		name: 'search',
		payload: 'string',
		description: 'Emitted with a trimmed value after debounce.',
	},
	{
		name: 'clear',
		payload: '-',
		description: 'Emitted when the clear button is clicked.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const value = ref('')
const debouncedValue = ref('')
<\/script>

<template>
  <Search
    v-model="value"
    placeholder="Search services"
    @search="debouncedValue = $event"
  />
</template>`,
	debounce: `<script setup lang="ts">
const value = ref('')
const debouncedValue = ref('')
<\/script>

<template>
  <Search
    v-model="value"
    :debounce="150"
    placeholder="Fast search"
    @search="debouncedValue = $event"
  />
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.search') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.search.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="search" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				Use <code>v-model</code> for the raw value and listen to
				<code>@search</code> for the debounced value.
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="grid w-full max-w-sm gap-3">
				<Search
					v-model="searchValue"
					placeholder="Search services"
					@search="debouncedValue = $event"
				/>
				<p class="text-sm text-muted-foreground">
					Debounced value:
					<span class="font-medium text-foreground">
						{{ debouncedValue || 'empty' }}
					</span>
				</p>
			</div>
		</ExampleBlock>
	</section>

	<section id="debounce" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.debounce') }}</h2>
			<p class="text-muted-foreground leading-7">
				Change the delay with the <code>debounce</code> prop. The default is
				<code>300</code> milliseconds.
			</p>
		</div>
		<ExampleBlock :code="examples.debounce">
			<div class="grid w-full max-w-sm gap-3">
				<Search
					v-model="fastValue"
					:debounce="150"
					placeholder="Fast search"
					@search="fastDebouncedValue = $event"
				/>
				<p class="text-sm text-muted-foreground">
					Debounced value:
					<span class="font-medium text-foreground">
						{{ fastDebouncedValue || 'empty' }}
					</span>
				</p>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-6">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
			<h3 class="text-xl font-semibold">Props</h3>
		</div>
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
					<tr v-for="item in searchProps" :key="item.name">
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

		<div class="space-y-2">
			<h3 class="text-xl font-semibold">Events</h3>
			<div class="overflow-hidden rounded-xl border">
				<table class="w-full text-left text-sm">
					<thead class="border-b bg-secondary text-muted-foreground">
						<tr>
							<th class="px-4 py-3 font-medium">{{ $t('docsTable.event') }}</th>
							<th class="px-4 py-3 font-medium">{{ $t('docsTable.payload') }}</th>
							<th class="px-4 py-3 font-medium">{{ $t('docsTable.description') }}</th>
						</tr>
					</thead>
					<tbody class="divide-y">
						<tr v-for="item in searchEvents" :key="item.name">
							<td class="px-4 py-3 font-medium">@{{ item.name }}</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.payload }}
							</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.description }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>
