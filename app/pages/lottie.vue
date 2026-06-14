<script setup lang="ts">
import errorLottieUrl from '~/assets/lottie/error.json?url';
import successLottieUrl from '~/assets/lottie/success.json?url';
import { lottiePageToc } from '~/shared/examples/lottie/page-toc';
import {
	configCode,
	emptyCode,
	folderCode,
	installCode,
	usageCode,
} from '~/shared/examples/lottie/usage-examples';

usePageMeta({
	title: 'lottiePage.metaTitle',
});

const { setToc } = usePageToc();

onMounted(() => setToc(lottiePageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('lottiePage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('lottiePage.description') }}
		</p>
		<Info>
			{{ $tn('app.infoPrefix') }}
			<TextLink href="https://nuxt.com/modules/lottie" target="_blank">
				{{ $tn('lottiePage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('lottiePage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode" :preview="false" />
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('lottiePage.configurationTitle') }}
		</h2>
		<ExampleBlock path="nuxt.config.ts" :code="configCode" :preview="false" />
		<ExampleBlock :code="folderCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('lottiePage.folderPreviewStart') }}
				<code>app/assets/lottie</code>.
			</div>
		</ExampleBlock>
		<Info>
			{{ $tn('lottiePage.folderExamplesPrefix') }}
			<TextLink :href="errorLottieUrl" download="error.json">
				<code>app/assets/lottie/error.json</code>
			</TextLink>
			{{ $tn('lottiePage.folderExamplesMiddle') }}
			<TextLink :href="successLottieUrl" download="success.json">
				<code>app/assets/lottie/success.json</code> </TextLink
			>.
		</Info>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('lottiePage.usageTitle') }}</h2>
		<ExampleBlock :code="usageCode">
			<Lottie name="error" :loop="false" width="160px" height="140px" />
		</ExampleBlock>
	</section>

	<section id="with-empty" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('lottiePage.withEmptyTitle') }}
		</h2>
		<ExampleBlock :code="emptyCode">
			<Empty
				:title="$tn('lottiePage.emptyTitle')"
				:description="$tn('lottiePage.emptyDescription')"
				:button="$tn('lottiePage.emptyButton')"
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
