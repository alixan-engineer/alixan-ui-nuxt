<script setup lang="ts">
import { textLinkPageToc } from '~/shared/page-docs/text-link/page-toc';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.textLink.metaTitle'),
	description: t('componentDocs.textLink.description'),
});

const tocLinks = textLinkPageToc(t);

usePageTocLinks(tocLinks);

const textLinkProps = [
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'Destination URL for the link.',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description:
			'Anchor target. When set to _blank, rel is set to noopener noreferrer.',
	},
];

const examples = {
	usage: `<template>
  <p class="text-muted-foreground">
    Read the
    <TextLink href="/installation">
      installation guide
    </TextLink>
    before copying components.
  </p>
</template>`,
	externalLink: `<template>
  <Info>
    For more detailed information, visit the
    <TextLink href="https://i18n.nuxtjs.org/" target="_blank">
      Nuxt i18n documentation.
    </TextLink>
  </Info>
</template>`,
};
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
			:columns="[
				{ label: $t('docsTable.prop'), value: row => row.name },
				{ label: $t('docsTable.type'), value: row => row.type },
				{ label: $t('docsTable.default'), value: row => row.default },
				{ label: $t('docsTable.description'), value: row => row.description },
			]"
			:rows="textLinkProps"
		/>
	</section>
</template>
