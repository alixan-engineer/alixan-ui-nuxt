<script setup lang="ts">
import { propsTableColumns } from '~/shared/examples/table-columns';
import { textLinkProps } from '~/shared/examples/text-link/api-reference';
import { textLinkPageToc } from '~/shared/examples/text-link/page-toc';
import { examples } from '~/shared/examples/text-link/usage-examples';

usePageMeta({
	title: 'componentDocs.textLink.metaTitle',
	description: 'componentDocs.textLink.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(textLinkPageToc));
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
		<Table :columns="propsTableColumns" :rows="textLinkProps" />
	</section>
</template>
