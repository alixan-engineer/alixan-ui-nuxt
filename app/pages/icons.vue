<script setup lang="ts">
import { Bell, Search } from '@lucide/vue';
import { iconsPageToc } from '~/shared/examples/icons/page-toc';
import {
	installCode,
	lucideCode,
	mdiCode,
} from '~/shared/examples/icons/usage-examples';

usePageMeta({
	title: 'iconsPage.metaTitle',
});

const { setToc } = usePageToc();

onMounted(() => setToc(iconsPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('iconsPage.title') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('iconsPage.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('iconsPage.installationTitle') }}
		</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('iconsPage.installationDescription') }}
			</div>
		</ExampleBlock>
	</section>

	<section id="lucide-icons" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('iconsPage.lucideTitle') }}</h2>
		<ExampleBlock :code="lucideCode">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Button>
					<template #leading>
						<Search class="size-5" />
					</template>
					{{ $tn('iconsPage.searchButton') }}
				</Button>
				<IconButton :label="$tn('iconsPage.notificationsLabel')">
					<Bell />
				</IconButton>
			</div>
		</ExampleBlock>
	</section>

	<section id="other-libraries" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('iconsPage.otherLibrariesTitle') }}
		</h2>
		<p class="text-muted-foreground leading-7">
			{{ $tn('iconsPage.otherLibrariesDescription') }}
		</p>

		<ExampleBlock :code="mdiCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				{{ $tn('iconsPage.mdiDescriptionPrefix') }}
				<TextLink href="https://nuxt.com/modules/nuxt-mdi" target="_blank">
					{{ $tn('iconsPage.mdiInfoLink') }}
				</TextLink>
			</div>
		</ExampleBlock>
	</section>
</template>
