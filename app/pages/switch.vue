<script setup lang="ts">
import { switchPageToc } from '~/shared/page-docs/switch/page-toc';
import { switchProps } from '~/shared/page-docs/switch/api-reference';
import { examples } from '~/shared/page-docs/switch/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.switch.metaTitle'),
	description: t('componentDocs.switch.description'),
});

const tocLinks = switchPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const checked = ref(false);
const disabledChecked = ref(true);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.switch') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.switch.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="switch" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				Use <code>v-model</code> to bind the boolean state.
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-col gap-4">
				<Switch v-model="checked" label="Airplane Mode" />
				<Switch v-model="disabledChecked" label="Disabled" disabled />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="switchProps"
		/>
	</section>
</template>
