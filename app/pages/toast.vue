<script setup lang="ts">
import type { ToastType } from '~/composables/useToast';
import { argumentTableColumns } from '~/shared/examples/table-columns';
import { toastApi } from '~/shared/examples/toast/api-reference';
import { toastPageToc } from '~/shared/examples/toast/page-toc';
import { appCode, exampleCode } from '~/shared/examples/toast/usage-examples';

usePageMeta({
	title: 'componentDocs.toast.metaTitle',
	description: 'componentDocs.toast.description',
});

const { setToc } = usePageToc();
const toast = useToast();

onMounted(() => setToc(toastPageToc));

const examples: Array<{ label: string; type: ToastType; message: string }> = [
	{ label: 'Success', type: 'success', message: 'Project saved successfully' },
	{ label: 'Warning', type: 'warning', message: 'Check required fields' },
	{ label: 'Error', type: 'error', message: 'Something went wrong' },
	{ label: 'Info', type: 'info', message: 'New update is available' },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.toast') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.toast.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="toast" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
		<ExampleBlock path="app.vue" :code="appCode" :preview="false" />
		<ExampleBlock path="Example.vue" :code="exampleCode">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Button
					v-for="item in examples"
					:key="item.type"
					variant="outlined"
					@click="toast.open(item.message, item.type)"
				>
					{{ $tn(item.label) }}
				</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="argumentTableColumns" :rows="toastApi" />
	</section>
</template>
