<script setup lang="ts">
usePageMeta({
	title: 'Lottie - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Configuration', href: '#configuration' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'With Empty', href: '#with-empty' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const installCode = `npx nuxi module add lottie`;

const configCode = `export default defineNuxtConfig({
  modules: ['nuxt-lottie'],
  lottie: {
    componentName: 'Lottie',
    lottieFolder: '/assets/lottie',
    autoFolderCreation: true,
  },
})`;

const folderCode = `app/
  assets/
    lottie/
      error.json`;

const usageCode = `<template>
  <Lottie name="error" :loop="false" width="160px" height="140px" />
</template>`;

const emptyCode = `<template>
  <Empty
    title="Page not found"
    description="The page you are looking for does not exist or has been moved."
    button="Go home"
    @action="navigateTo('/')"
  >
    <Lottie name="error" :loop="false" width="160px" height="140px" />
  </Empty>
</template>`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Lottie</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Use Lottie animations as lightweight media inside empty states, errors and
			other feedback surfaces.
		</p>
		<Info>
			For more detailed information, visit the
			<TextLink href="https://nuxt.com/modules/lottie" target="_blank">
				Nuxt Lottie documentation.
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Install the Nuxt Lottie module. The command adds the module to your
				project and installs the required package.
			</div>
		</ExampleBlock>
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">Configuration</h2>
		<ExampleBlock :code="configCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Configure the component name and keep animations in
				<code>app/assets/lottie</code>.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="folderCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Use the file name without <code>.json</code> when passing the
				<code>name</code> prop.
			</div>
		</ExampleBlock>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock :code="usageCode">
			<Lottie name="error" :loop="false" width="160px" height="140px" />
		</ExampleBlock>
	</section>

	<section id="with-empty" class="space-y-5">
		<h2 class="text-2xl font-semibold">With Empty</h2>
		<ExampleBlock :code="emptyCode">
			<Empty
				title="Page not found"
				description="The page you are looking for does not exist or has been moved."
				button="Go home"
			>
				<Lottie name="error" :loop="false" width="160px" height="140px" />
			</Empty>
		</ExampleBlock>
	</section>
</template>
