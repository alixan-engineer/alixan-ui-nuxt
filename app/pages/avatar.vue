<script setup lang="ts">
import { avatarApiRows } from '~/shared/examples/avatar/api-reference';
import { avatarPageToc } from '~/shared/examples/avatar/page-toc';
import { usage } from '~/shared/examples/avatar/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({ title: 'componentDocs.avatar.metaTitle', description: 'componentDocs.avatar.description' });
const { setToc } = usePageToc();
onMounted(() => setToc(avatarPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.avatar') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">{{ $t('componentDocs.avatar.description') }}</p>
	</header>
	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="avatar" />
	</section>
	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="usage"><div class="flex items-center gap-3"><Avatar name="Alixan UI" size="sm" /><Avatar name="Alixan UI" /><Avatar name="Alixan UI" size="lg" /><Avatar name="Alixan UI" img="/examples/contact-avatar.webp" size="lg" /></div></ExampleBlock>
	</section>
	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table :columns="propsTableColumns" :rows="avatarApiRows" />
	</section>
</template>
