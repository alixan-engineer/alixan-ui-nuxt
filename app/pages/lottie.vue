<script setup lang="ts">
import { lottiePageToc } from '~/shared/page-docs/lottie/page-toc';
import {
	configCode,
	emptyCode,
	folderCode,
	installCode,
	usageCode,
} from '~/shared/page-docs/lottie/usage-examples';

usePageMeta({
	title: 'Lottie - Alixan UI',
});

const { setToc } = usePageToc();

onMounted(() => setToc(lottiePageToc));
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
				<div
					class="flex size-28 items-center justify-center rounded-4xl bg-secondary text-primary"
				>
					<Lottie name="error" :loop="false" width="140px" height="140px" />
				</div>
			</Empty>
		</ExampleBlock>
	</section>
</template>
