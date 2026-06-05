<script setup lang="ts">
usePageMeta({
	title: 'Divider - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const usageCode = `<template>
  <div class="space-y-4">
    <p>Account</p>
    <Divider />
    <p>Billing</p>
  </div>
</template>`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Divider</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A simple horizontal rule for separating groups of content.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="divider" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="usageCode">
			<div class="w-full max-w-sm space-y-4 text-muted-foreground">
				<p>Account</p>
				<Divider />
				<p>Billing</p>
			</div>
		</ExampleBlock>
	</section>
</template>
