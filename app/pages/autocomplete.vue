<script setup lang="ts">
import { autocompletePageToc } from '~/shared/page-docs/autocomplete/page-toc';
import { examples } from '~/shared/page-docs/autocomplete/usage-examples';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.autocomplete.metaTitle'),
	description: t('componentDocs.autocomplete.description'),
});

const tocLinks = autocompletePageToc(t);

usePageTocLinks(tocLinks);

const city = ref<string | number | null>(null);
const requiredCity = ref<string | number | null>(null);
const cities = ref<Array<string | number>>([]);

const requiredCityError = computed(() =>
	!requiredCity.value ? 'City is required' : '',
);

const options = [
	{ label: 'Almaty', value: 'almaty' },
	{ label: 'Astana', value: 'astana' },
	{ label: 'Shymkent', value: 'shymkent' },
	{ label: 'Aktau', value: 'aktau' },
	{ label: 'Atyrau', value: 'atyrau' },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.autocomplete') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.autocomplete.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="autocomplete" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-sm">
				<Autocomplete v-model="city" label="City" :options="options" />
			</div>
		</ExampleBlock>
	</section>

	<section id="validation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.validation') }}</h2>
		<ExampleBlock :code="examples.validation">
			<div class="w-full max-w-sm space-y-4">
				<Autocomplete
					v-model="requiredCity"
					label="City"
					:options="options"
					:error="requiredCityError"
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="with-chips" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.withChips') }}</h2>
		<ExampleBlock :code="examples.chips">
			<div class="w-full max-w-sm">
				<AutocompleteChips v-model="cities" label="Cities" :options="options" />
			</div>
		</ExampleBlock>
	</section>
</template>
