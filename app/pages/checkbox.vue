<script setup lang="ts">
import { checkboxPageToc } from '~/shared/page-docs/checkbox/page-toc';
import { checkboxProps } from '~/shared/page-docs/checkbox/api-reference';
import { examples } from '~/shared/page-docs/checkbox/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.checkbox.metaTitle'),
	description: t('componentDocs.checkbox.description'),
});

const tocLinks = checkboxPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const accepted = ref(false);
const selectedPeriod = ref<string | null>('7d');
const selectedOptions = ref<string[]>(['email']);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.checkbox') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.checkbox.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="checkbox" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-col gap-5">
				<Checkbox v-model="accepted" label="Accept terms" />

				<div class="flex flex-wrap gap-4">
					<Checkbox v-model="selectedPeriod" value="7d" label="7 d" />
					<Checkbox v-model="selectedPeriod" value="30d" label="30 d" />
				</div>

				<div class="flex flex-wrap gap-4">
					<Checkbox
						v-model="selectedOptions"
						mode="multiple"
						value="email"
						label="Email"
					/>
					<Checkbox
						v-model="selectedOptions"
						mode="multiple"
						value="sms"
						label="SMS"
					/>
				</div>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="checkboxProps"
		/>
	</section>
</template>
