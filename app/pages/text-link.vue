<script setup lang="ts">
usePageMeta({
	title: 'Text Link - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'External Link', href: '#external-link' },
	{ label: 'API Reference', href: '#api-reference' },
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
		<h1 class="text-4xl font-semibold">Text Link</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			An inline content link for documentation copy, hints and external
			references without button padding or background styles.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="text-link" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="examples.usage">
			<p class="text-muted-foreground">
				Read the
				<TextLink href="/installation">installation guide</TextLink>
				before copying components.
			</p>
		</ExampleBlock>
	</section>

	<section id="external-link" class="space-y-5">
		<h2 class="text-2xl font-semibold">External Link</h2>
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
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Prop</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
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
