<script setup lang="ts">
import { ArrowRight, Copy, Terminal } from '@lucide/vue';

const tocLinks = [
	{ label: 'Create Project', href: '#create-project' },
	{ label: 'Add Tailwind CSS', href: '#add-tailwind-css' },
	{ label: 'Install Component', href: '#install-component' },
	{ label: 'Use Component', href: '#use-component' },
	{ label: 'CLI Commands', href: '#cli-commands' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const commands = {
	createProject: 'npx nuxi@latest init my-app',
	installDeps: 'npm install',
	addTailwind: 'npm install tailwindcss @tailwindcss/vite -D',
	addButton: 'npx alixan-ui-nuxt add button',
	list: 'npx alixan-ui-nuxt list',
	force: 'npx alixan-ui-nuxt add button --force',
};

const tailwindCss = `@import "tailwindcss";`;

const nuxtConfig = `import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [tailwindcss()],
  },
})`;

const usageCode = `<template>
  <Button>
    Save changes
  </Button>
</template>`;
</script>

<template>
	<header class="space-y-3">
			<h1 class="text-4xl font-semibold">Installation</h1>
			<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
				Install Alixan UI in a Nuxt project. Components are copied directly
				into your app, so you own the source code and can customize it freely.
			</p>
		</header>

		<section id="create-project" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Create Project</h2>
				<p class="text-muted-foreground leading-7">
					Start with a Nuxt 4 project. If you already have one, you can skip
					this step.
				</p>
			</div>

			<div class="island">
				<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
					<Terminal class="size-5 text-muted-foreground" />
					<span class="font-medium">Terminal</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<pre class="p-4 text-md"><code>{{ commands.createProject }}</code></pre>
				<pre class="border-t p-4 text-md"><code>{{ commands.installDeps }}</code></pre>
			</div>
		</section>

		<section id="add-tailwind-css" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Add Tailwind CSS</h2>
				<p class="text-muted-foreground leading-7">
					Alixan UI components use Tailwind CSS classes and CSS variables for
					the theme.
				</p>
			</div>

			<div class="island">
				<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
					<Terminal class="size-5 text-muted-foreground" />
					<span class="font-medium">Install Tailwind</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<pre class="p-4 text-md"><code>{{ commands.addTailwind }}</code></pre>
			</div>

			<div class="island">
				<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
					<span class="font-medium">app/assets/css/tailwind.css</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<pre class="p-4 text-sm leading-7"><code>{{ tailwindCss }}</code></pre>
			</div>

			<div class="island">
				<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
					<span class="font-medium">nuxt.config.ts</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<pre class="p-4 text-sm leading-7"><code>{{ nuxtConfig }}</code></pre>
			</div>
		</section>

		<section id="install-component" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Install Component</h2>
				<p class="text-muted-foreground leading-7">
					Run the CLI from your project root. The component and required
					utilities will be copied into your project.
				</p>
			</div>

			<div class="island">
				<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
					<Terminal class="size-5 text-muted-foreground" />
					<span class="font-medium">Add Button</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<pre class="p-4 text-md"><code>{{ commands.addButton }}</code></pre>
			</div>

			<div class="rounded-2xl border bg-secondary/50 p-4 text-sm leading-7 text-muted-foreground">
				This creates <span class="font-medium text-foreground">components/ui/Button.vue</span>
				and <span class="font-medium text-foreground">utils/cn.ts</span>.
				Nuxt auto-import handles the component after it is copied.
			</div>
		</section>

		<section id="use-component" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Use Component</h2>
				<p class="text-muted-foreground leading-7">
					Use the component directly in your Vue templates. No package import
					is required for the component itself.
				</p>
			</div>

			<div class="island">
				<div class="min-h-40 p-8 flex items-center justify-center">
					<Button>
						Save changes
						<template #trailing>
							<ArrowRight class="size-5" />
						</template>
					</Button>
				</div>
				<div class="relative border-t">
					<Copy class="absolute right-4 top-4 size-5 text-muted-foreground" />
					<pre class="p-6 pr-12 text-sm leading-7"><code>{{ usageCode }}</code></pre>
				</div>
			</div>
		</section>

		<section id="cli-commands" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">CLI Commands</h2>
				<p class="text-muted-foreground leading-7">
					Use these commands to discover available components or overwrite an
					existing local file intentionally.
				</p>
			</div>

			<div class="island">
				<div class="px-4 py-3 flex items-center gap-3 border-b text-m">
					<Terminal class="size-5 text-muted-foreground" />
					<span class="font-medium">Commands</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<pre class="p-4 text-md"><code>{{ commands.list }}</code></pre>
				<pre class="border-t p-4 text-md"><code>{{ commands.force }}</code></pre>
			</div>
		</section>
</template>
