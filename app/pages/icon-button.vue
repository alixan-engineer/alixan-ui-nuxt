<script setup lang="ts">
import { ArrowUpRight, Copy } from '@lucide/vue';
import { buttonColors, buttonVariants } from '~/shared/button-options';

useSeoMeta({
	title: 'Icon Button - Alixan UI',
	ogTitle: 'Icon Button - Alixan UI',
	twitterTitle: 'Icon Button - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Size', href: '#size' },
	{ label: 'Navigation', href: '#navigation' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const iconButtonProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Required accessible label for screen readers.',
	},
	{
		name: 'variant',
		type: "'filled' | 'outlined' | 'ghost'",
		default: "'filled'",
		description: 'Visual style of the icon button.',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Color intent.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls square size and icon size.',
	},
	{
		name: 'to',
		type: 'RouteLocationRaw',
		default: '-',
		description: 'Renders the icon button as a NuxtLink when provided.',
	},
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'Renders the icon button as a native anchor when provided.',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description: 'Anchor target. Works with href links.',
	},
];

const examples = {
	combinations: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center gap-2">
      <IconButton label="Default" variant="filled" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Primary" variant="filled" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Secondary" variant="filled" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Destructive" variant="filled" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <IconButton label="Default outline" variant="outlined" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Primary outline" variant="outlined" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Secondary outline" variant="outlined" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Destructive outline" variant="outlined" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <IconButton label="Default ghost" variant="ghost" color="default">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Primary ghost" variant="ghost" color="primary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Secondary ghost" variant="ghost" color="secondary">
        <ArrowUpRight />
      </IconButton>
      <IconButton label="Destructive ghost" variant="ghost" color="destructive">
        <ArrowUpRight />
      </IconButton>
    </div>
  </div>
</template>`,
	size: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <IconButton label="Small action" size="sm">
      <ArrowUpRight />
    </IconButton>
    <IconButton label="Default action">
      <ArrowUpRight />
    </IconButton>
    <IconButton label="Large action" size="lg">
      <ArrowUpRight />
    </IconButton>
  </div>
</template>`,
	navigation: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <IconButton label="Open icon button docs" to="/icon-button">
      <ArrowUpRight />
    </IconButton>

    <IconButton
      label="Open GitHub"
      href="https://github.com"
      target="_blank"
      variant="outlined"
      color="default"
    >
      <ArrowUpRight />
    </IconButton>
  </div>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
			<h1 class="text-4xl font-semibold">Icon Button</h1>
			<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
				Displays an icon-only button with a required accessible label.
			</p>
		</header>

		<section id="installation" class="space-y-5">
			<h2 class="text-2xl font-semibold">Installation</h2>
			<div class="island">
				<div class="px-4 py-3 flex items-center gap-4 border-b text-m">
					<span class="font-medium">npm</span>
					<span class="text-muted-foreground">pnpm</span>
					<span class="text-muted-foreground">yarn</span>
					<span class="text-muted-foreground">bun</span>
					<div class="flex-1" />
					<Copy class="size-5 text-muted-foreground" />
				</div>
				<p class="p-4 text-md">npx alixan-ui-nuxt add icon-button</p>
			</div>
		</section>

		<section id="usage" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Usage</h2>
				<p class="text-muted-foreground leading-7">
					IconButton uses the same variant and color system as Button, but keeps
					the control square for icon-only actions. Always provide a label so
					the action remains clear for assistive technologies.
				</p>
			</div>
			<div class="space-y-4">
				<ExampleBlock :code="examples.combinations">
					<div class="space-y-4">
						<div
							v-for="variant in buttonVariants"
							:key="`matrix-${variant}`"
							class="space-y-2"
						>
							<p class="text-sm text-muted-foreground">
								{{ variant }}
							</p>
							<div class="flex flex-wrap items-center gap-2">
								<IconButton
									v-for="color in buttonColors"
									:key="`${variant}-${color}`"
									:variant="variant"
									:color="color"
									:label="`${variant} ${color}`"
								>
									<ArrowUpRight />
								</IconButton>
							</div>
						</div>
					</div>
				</ExampleBlock>
			</div>
		</section>

		<section id="size" class="space-y-4">
			<h2 class="text-2xl font-semibold">Size</h2>
			<ExampleBlock :code="examples.size">
				<div class="flex items-center gap-2">
					<IconButton label="Small action" size="sm">
						<ArrowUpRight />
					</IconButton>
					<IconButton label="Default action">
						<ArrowUpRight />
					</IconButton>
					<IconButton label="Large action" size="lg">
						<ArrowUpRight />
					</IconButton>
				</div>
			</ExampleBlock>
		</section>

		<section id="navigation" class="space-y-4">
			<h2 class="text-2xl font-semibold">Navigation</h2>
			<ExampleBlock :code="examples.navigation">
				<div class="flex items-center gap-2">
					<IconButton label="Open icon button docs" to="/icon-button">
						<ArrowUpRight />
					</IconButton>

					<IconButton
						label="Open GitHub"
						href="https://github.com"
						target="_blank"
						variant="outlined"
						color="default"
					>
						<ArrowUpRight />
					</IconButton>
				</div>
			</ExampleBlock>
		</section>

		<section id="api-reference" class="space-y-4">
			<h2 class="text-2xl font-semibold">API Reference</h2>
			<div class="overflow-hidden rounded-xl border">
				<table class="w-full text-left text-sm">
					<thead class="border-b bg-secondary text-muted-foreground">
						<tr>
							<th class="px-4 py-3 font-medium">Prop</th>
							<th class="px-4 py-3 font-medium">Type</th>
							<th class="px-4 py-3 font-medium">Default</th>
							<th class="px-4 py-3 font-medium">Description</th>
						</tr>
					</thead>
					<tbody class="divide-y">
						<tr v-for="item in iconButtonProps" :key="item.name">
							<td class="px-4 py-3 font-medium">{{ item.name }}</td>
							<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.default }}
							</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.description }}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
</template>
