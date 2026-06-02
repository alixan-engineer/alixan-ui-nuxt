<script setup lang="ts">
useSeoMeta({
	title: 'Autocomplete - Alixan UI',
	ogTitle: 'Autocomplete - Alixan UI',
	twitterTitle: 'Autocomplete - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Validation', href: '#validation' },
	{ label: 'With Chips', href: '#with-chips' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const city = ref<string | number | null>(null);
const requiredCity = ref<string | number | null>(null);
const cities = ref<Array<string | number>>([]);
const isSubmitted = ref(false);

const requiredCityError = computed(() =>
	isSubmitted.value && !requiredCity.value ? 'City is required' : '',
);

const options = [
	{ label: 'Almaty', value: 'almaty' },
	{ label: 'Astana', value: 'astana' },
	{ label: 'Shymkent', value: 'shymkent' },
	{ label: 'Aktau', value: 'aktau' },
	{ label: 'Atyrau', value: 'atyrau' },
];

const examples = {
	usage: `<script setup lang="ts">
const city = ref(null)
const options = [
  { label: 'Almaty', value: 'almaty' },
  { label: 'Astana', value: 'astana' },
]
<\/script>

<template>
  <Autocomplete v-model="city" label="City" :options="options" />
</template>`,
	validation: `<script setup lang="ts">
const city = ref(null)
const submitted = ref(false)
const error = computed(() => submitted.value && !city.value ? 'City is required' : '')
<\/script>

<template>
  <Autocomplete
    v-model="city"
    label="City"
    :options="options"
    :error="error"
  />

  <Button @click="submitted = true">Submit</Button>
</template>`,
	chips: `<script setup lang="ts">
const cities = ref([])
const options = [
  { label: 'Almaty', value: 'almaty' },
  { label: 'Astana', value: 'astana' },
]
<\/script>

<template>
  <AutocompleteChips v-model="cities" label="Cities" :options="options" />
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Autocomplete</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A searchable select input with a teleported list and safe outside click
			catcher.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="autocomplete" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-sm">
				<Autocomplete v-model="city" label="City" :options="options" />
			</div>
		</ExampleBlock>
	</section>

	<section id="validation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Validation</h2>
		<ExampleBlock :code="examples.validation">
			<div class="w-full max-w-sm space-y-4">
				<Autocomplete
					v-model="requiredCity"
					label="City"
					:options="options"
					:error="requiredCityError"
				/>
				<Button @click="isSubmitted = true">Submit</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="with-chips" class="space-y-5">
		<h2 class="text-2xl font-semibold">With Chips</h2>
		<ExampleBlock :code="examples.chips">
			<div class="w-full max-w-sm">
				<AutocompleteChips v-model="cities" label="Cities" :options="options" />
			</div>
		</ExampleBlock>
	</section>
</template>
