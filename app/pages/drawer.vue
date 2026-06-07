<script setup lang="ts">
import { drawerServiceApi } from '~/shared/examples/drawer/api-reference';
import { drawerPageToc } from '~/shared/examples/drawer/page-toc';
import {
	appCode,
	contentCode,
	usageCode,
} from '~/shared/examples/drawer/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';
import DrawerPreviewContent from '~/widgets/drawer-preview-content/DrawerPreviewContent.vue';

usePageMeta({
	title: 'componentDocs.drawer.metaTitle',
	description: 'componentDocs.drawer.description',
});

const drawer = useDrawer();
const { setToc } = usePageToc();

onMounted(() => setToc(drawerPageToc));

const openDrawer = (): void => {
	drawer.open(DrawerPreviewContent, {
		width: '420px',
		height: '360px',
		position: 'bottom',
		title: 'Workspace settings',
		data: {
			workspaceName: 'Alixan UI',
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.drawer') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.drawer.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="drawer" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>

		<ExampleBlock :code="appCode" :preview="false" />

		<ExampleBlock :code="usageCode">
			<Button @click="openDrawer">Open drawer</Button>
		</ExampleBlock>

		<ExampleBlock :code="contentCode" :preview="false" />
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="drawerServiceApi" />
	</section>
</template>
