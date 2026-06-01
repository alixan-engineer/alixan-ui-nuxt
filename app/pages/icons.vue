<script setup lang="ts">
import { Bell, ExternalLink, Search } from '@lucide/vue';

useSeoMeta({
	title: 'Icons - Alixan UI',
	ogTitle: 'Icons - Alixan UI',
	twitterTitle: 'Icons - Alixan UI',
});

const tocLinks = [
	{ label: 'Lucide Icons', href: '#lucide-icons' },
	{ label: 'Other Libraries', href: '#other-libraries' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const lucideCode = `<script setup lang="ts">
import { Bell, Search } from '@lucide/vue'
<\/script>

<template>
  <Button>
    <Search class="size-4" />
    Search
  </Button>

  <IconButton label="Notifications">
    <Bell />
  </IconButton>
</template>`;

const googleCode = `<template>
  <Button>
    <span class="material-symbols-rounded text-[20px]">search</span>
    Search
  </Button>
</template>`;

const fontAwesomeCode = `<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
<\/script>

<template>
  <IconButton label="GitHub">
    <FontAwesomeIcon :icon="faGithub" />
  </IconButton>
</template>`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Icons</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Alixan UI examples use Lucide Icons, but the components accept regular
			slots, so you can use any icon library you like.
		</p>
	</header>

	<section id="lucide-icons" class="space-y-5">
		<h2 class="text-2xl font-semibold">Lucide Icons</h2>
		<ExampleBlock :code="lucideCode">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Button>
					<Search class="size-4" />
					Search
				</Button>
				<IconButton label="Notifications">
					<Bell />
				</IconButton>
			</div>
		</ExampleBlock>
	</section>

	<section id="other-libraries" class="space-y-5">
		<h2 class="text-2xl font-semibold">Other Libraries</h2>
		<p class="text-muted-foreground leading-7">
			Use Google Icons, Font Awesome, custom SVG components, or any other icon
			source. If it renders inside a slot, it works.
		</p>

		<div class="grid gap-5">
			<ExampleBlock :code="googleCode">
				<Button>
					<span class="text-xl leading-none">search</span>
					Google Icons
				</Button>
			</ExampleBlock>

			<ExampleBlock :code="fontAwesomeCode">
				<IconButton label="GitHub">
					<ExternalLink />
				</IconButton>
			</ExampleBlock>
		</div>
	</section>
</template>
