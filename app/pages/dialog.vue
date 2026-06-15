<script setup lang="ts">
import { dialogServiceApi } from '~/shared/examples/dialog/api-reference';
import { dialogPageToc } from '~/shared/examples/dialog/page-toc';
import {
	contentCode,
	hostCode,
	openCode,
} from '~/shared/examples/dialog/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';
import DialogPreviewContent from '~/widgets/dialog-preview-content/DialogPreviewContent.vue';

usePageMeta({
	title: 'componentDocs.dialog.metaTitle',
	description: 'componentDocs.dialog.description',
});

const { setToc } = usePageToc();
const dialog = useDialog();

onMounted(() => setToc(dialogPageToc));

const projectName = ref<string>('Alixan UI');

const openDialog = (): void => {
	dialog.open(DialogPreviewContent, {
		width: '420px',
		height: '400px',
		title: 'dialogPreview.title',
		data: {
			projectName: projectName.value,
			onSave: (value: string) => {
				projectName.value = value;
			},
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.dialog') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.dialog.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>

		<div id="host" class="scroll-mt-24 space-y-3">
			<h3 class="text-xl font-semibold">{{ $tn('docsSections.host') }}</h3>
			<ExampleBlock :path="'app.vue'" :code="hostCode" :preview="false" />
		</div>

		<div id="open-dialog" class="scroll-mt-24 space-y-3">
			<h3 class="text-xl font-semibold">
				{{ $tn('docsSections.openDialog') }}
			</h3>
			<ExampleBlock path="Example.vue" :code="openCode">
				<div class="flex flex-wrap items-center justify-center gap-3">
					<Button @click="openDialog">
						{{ $tn('dialogPreview.openDialog') }}
					</Button>
					<p class="text-sm text-muted-foreground">
						{{ $tn('dialogPreview.projectName') }}:
						<span class="font-medium text-foreground">{{ projectName }}</span>
					</p>
				</div>
			</ExampleBlock>
		</div>

		<div id="dialog-content" class="scroll-mt-24 space-y-3">
			<h3 class="text-xl font-semibold">
				{{ $tn('docsSections.dialogContent') }}
			</h3>
			<ExampleBlock
				:path="'ProjectDialog.vue'"
				:code="contentCode"
				:preview="false"
			/>
		</div>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="dialogServiceApi" />
	</section>
</template>
