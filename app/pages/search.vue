<script setup lang="ts">
import { Copy } from '@lucide/vue';

useSeoMeta({
	title: 'Search - Alixan UI',
	ogTitle: 'Search - Alixan UI',
	twitterTitle: 'Search - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Debounce', href: '#debounce' },
	{ label: 'API Reference', href: '#api-reference' },
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
		<h1 class="text-4xl font-semibold">Search</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A focused search field with built-in debounce, search icon and clear
			button.
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
			<p class="p-4 text-md">npx alixan-ui-nuxt add search</p>
		</div>
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">Usage</h2>
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
			<h2 class="text-2xl font-semibold">Debounce</h2>
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
			<h2 class="text-2xl font-semibold">API Reference</h2>
			<h3 class="text-xl font-semibold">Props</h3>
		</div>
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
							<th class="px-4 py-3 font-medium">Event</th>
							<th class="px-4 py-3 font-medium">Payload</th>
							<th class="px-4 py-3 font-medium">Description</th>
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
