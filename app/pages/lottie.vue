<script setup lang="ts">
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
			{{ $tn('lottiePage.infoPrefix') }}
			<TextLink href="https://nuxt.com/modules/lottie" target="_blank">
				{{ $tn('lottiePage.infoLink') }}
			</TextLink>
		</Info>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('lottiePage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('lottiePage.installationDescription') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="configuration" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('lottiePage.configurationTitle') }}
		</h2>
		<ExampleBlock :code="configCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('lottiePage.configDescription') }}
				<code>app/assets/lottie</code>.
			</div>
		</ExampleBlock>
		<ExampleBlock :code="folderCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('lottiePage.folderDescriptionStart') }}
				<code>.json</code>
				{{ $tn('lottiePage.folderDescriptionEnd') }}
			</div>
		</ExampleBlock>
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
