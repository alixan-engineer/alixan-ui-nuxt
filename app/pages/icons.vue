<script setup lang="ts">
import { Bell, Search } from '@lucide/vue';

usePageMeta({
	title: 'Icons - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
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

const installCode = `npm install @lucide/vue`;

const lucideCode = `<script setup lang="ts">
import { Bell, Search } from '@lucide/vue'
<\/script>

<template>
  <Button>
		<template #leading>
			<Search class="size-5" />
		</template>
		Search
	</Button>

  <IconButton label="Notifications">
    <Bell />
  </IconButton>
</template>`;

const mdiCode = `npx nuxi module add nuxt-mdi`;
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Icons</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Alixan UI examples use Lucide Icons, but the components accept regular
			slots, so you can use any icon library you like.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<ExampleBlock :code="installCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Install Lucide Vue when you want to use the same icon package as the
				documentation examples.
			</div>
		</ExampleBlock>
	</section>

	<section id="lucide-icons" class="space-y-5">
		<h2 class="text-2xl font-semibold">Lucide Icons</h2>
		<ExampleBlock :code="lucideCode">
			<div class="flex flex-wrap items-center justify-center gap-2">
				<Button>
					<template #leading>
						<Search class="size-5" />
					</template>
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
			Use Nuxt MDI, custom SVG components, or any other icon source. If it
			renders inside a slot, it works.
		</p>

		<ExampleBlock :code="mdiCode">
			<div class="max-w-md text-center text-muted-foreground leading-7">
				Nuxt MDI provides Material Design Icons as Nuxt components. See the
				<TextLink href="https://nuxt.com/modules/nuxt-mdi" target="_blank">
					Nuxt MDI module documentation.
				</TextLink>
			</div>
		</ExampleBlock>
	</section>
</template>
