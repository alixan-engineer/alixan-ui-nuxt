<script setup lang="ts">
import { dividerPageToc } from '~/shared/examples/divider/page-toc';
import { usageCode } from '~/shared/examples/divider/usage-examples';

usePageMeta({
	title: 'componentDocs.divider.metaTitle',
	description: 'componentDocs.divider.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(dividerPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.divider') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.divider.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="divider" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-sm space-y-4 text-muted-foreground">
				<p>Account</p>
				<Divider />
				<p>Billing</p>
			</div>
		</ExampleBlock>
	</section>
</template>
