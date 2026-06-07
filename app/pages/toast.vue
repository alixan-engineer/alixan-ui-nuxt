<script setup lang="ts">
import { toastPageToc } from '~/shared/page-docs/toast/page-toc';
import type { ToastType } from '~/composables/useToast';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.toast.metaTitle'),
	description: t('componentDocs.toast.description'),
});

const tocLinks = toastPageToc(t);

usePageTocLinks(tocLinks);

const toast = useToast();

const toastApi = [
	{
		name: 'message',
		type: 'string',
		default: '-',
		description: 'Toast text.',
	},
	{
		name: 'type',
		type: "'success' | 'warning' | 'error' | 'info'",
		default: "'info'",
		description: 'Semantic toast tone.',
	},
	{
		name: 'duration',
		type: 'number',
		default: '4000',
		description: 'Auto-close timeout in milliseconds.',
	},
];

const examples: Array<{ label: string; type: ToastType; message: string }> = [
	{ label: 'Success', type: 'success', message: 'Project saved successfully' },
	{ label: 'Warning', type: 'warning', message: 'Check required fields' },
	{ label: 'Error', type: 'error', message: 'Something went wrong' },
	{ label: 'Info', type: 'info', message: 'New update is available' },
];

const appCode = `// app.vue
<template>
  <NuxtPage />
  <ToastHost /> <!-- Add ToastHost once near the root of your app. -->
</template>`;

const exampleCode = `// example.vue
<script setup lang="ts">
const toast = useToast()

const showToast = () => {
  toast.open('Project saved successfully', 'success')
}
<\/script>

<template>
  <Button @click="showToast">Show toast</Button>
</template>`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.toast') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.toast.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="toast" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="appCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Add <code>ToastHost</code> once near the root of your app.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="exampleCode">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Button
					v-for="item in examples"
					:key="item.type"
					variant="outlined"
					@click="toast.open(item.message, item.type)"
				>
					{{ item.label }}
				</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="[
				{ label: $t('docsTable.argument'), value: row => row.name },
				{ label: $t('docsTable.type'), value: row => row.type },
				{ label: $t('docsTable.default'), value: row => row.default },
				{ label: $t('docsTable.description'), value: row => row.description },
			]"
			:rows="toastApi"
		/>
	</section>
</template>
