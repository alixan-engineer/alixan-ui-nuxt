<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.textLink.metaTitle'),
	description: t('componentDocs.textLink.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.externalLink'), href: '#external-link' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.externalLink') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.prop') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.type') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.default') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.description') }}</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in textLinkProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.default }}
						</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
