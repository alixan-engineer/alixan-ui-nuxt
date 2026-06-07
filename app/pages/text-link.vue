<script setup lang="ts">
import { textLinkPageToc } from '~/shared/page-docs/text-link/page-toc';
import { textLinkProps } from '~/shared/page-docs/text-link/api-reference';
import { examples } from '~/shared/page-docs/text-link/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.textLink.metaTitle'),
	description: t('componentDocs.textLink.description'),
});

const tocLinks = textLinkPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.textLink') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.textLink.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="text-link" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<p class="text-muted-foreground">
				Read the
				<TextLink href="/installation">installation guide</TextLink>
				before copying components.
			</p>
		</ExampleBlock>
	</section>

	<section id="external-link" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.externalLink') }}
		</h2>
		<ExampleBlock :code="examples.externalLink">
			<Info>
				For more detailed information, visit the
				<TextLink href="https://i18n.nuxtjs.org/" target="_blank">
					Nuxt i18n documentation.
				</TextLink>
			</Info>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="textLinkProps"
		/>
	</section>
</template>
