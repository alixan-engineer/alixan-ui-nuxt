<script setup lang="ts">
import {
	searchEvents,
	searchProps,
} from '~/shared/examples/search/api-reference';
import { searchPageToc } from '~/shared/examples/search/page-toc';
import { examples } from '~/shared/examples/search/usage-examples';
import {
	eventPayloadTableColumns,
	propsTableColumns,
} from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.search.metaTitle',
	description: 'componentDocs.search.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(searchPageToc));

const searchValue = ref<string>('');
const debouncedValue = ref<string>('');
const fastValue = ref<string>('');
const fastDebouncedValue = ref<string>('');
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.search') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.search.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="search" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
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
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.debounce') }}</h2>
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
			<h2 class="text-2xl font-semibold">
				{{ $tn('docsSections.apiReference') }}
			</h2>
			<h3 class="text-xl font-semibold">Props</h3>
		</div>
		<Table :columns="propsTableColumns" :rows="searchProps" />

		<div class="space-y-2">
			<h3 class="text-xl font-semibold">Events</h3>
			<Table :columns="eventPayloadTableColumns" :rows="searchEvents" />
		</div>
	</section>
</template>
