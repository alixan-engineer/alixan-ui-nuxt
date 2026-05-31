<script setup lang="ts">
import { ArrowRight, Copy, GitBranch } from '@lucide/vue';
import { buttonColors, buttonVariants } from '~/shared/button-options';

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Size', href: '#size' },
	{ label: 'Navigation', href: '#navigation' },
	{ label: 'With Icon', href: '#with-icon' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const buttonProps = [
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Fallback text when the default slot is not used.',
	},
	{
		name: 'variant',
		type: "'filled' | 'outlined' | 'ghost'",
		default: "'filled'",
		description: 'Surface style. Combine it with color for intent.',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Semantic intent. Works with every variant.',
	},
	{
		name: 'size',
		type: "'sm' | 'md' | 'lg'",
		default: "'md'",
		description: 'Controls height, padding and text size.',
	},
	{
		name: 'to',
		type: 'RouteLocationRaw',
		default: '-',
		description: 'Renders the button as a NuxtLink when provided.',
	},
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'Renders the button as a native anchor when provided.',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description: 'Anchor target. Works with href links.',
	},
];

const examples = {
	size: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button size="sm">
      Small
    </Button>
    <Button>
      Default
    </Button>
    <Button size="lg">
      Large
    </Button>
  </div>
</template>`,
	navigation: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button to="/icon-button">
      NuxtLink
    </Button>

    <Button
      href="https://github.com"
      target="_blank"
      variant="outlined"
      color="default"
    >
      External link
    </Button>
  </div>
</template>`,
	default: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <Button>
    Default
  </Button>
</template>`,
	outline: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <Button variant="outlined" color="default">
    Outline
  </Button>
</template>`,
	variant: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="filled" color="default">Filled</Button>
    <Button variant="outlined" color="default">Outlined</Button>
    <Button variant="ghost" color="default">Ghost</Button>
  </div>
</template>`,
	color: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button color="default">Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="destructive">Destructive</Button>
  </div>
</template>`,
	combinations: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="space-y-4">
    <div class="flex flex-wrap items-center gap-2">
      <Button variant="filled" color="default">Default</Button>
      <Button variant="filled" color="primary">Primary</Button>
      <Button variant="filled" color="secondary">Secondary</Button>
      <Button variant="filled" color="destructive">Destructive</Button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <Button variant="outlined" color="default">Default</Button>
      <Button variant="outlined" color="primary">Primary</Button>
      <Button variant="outlined" color="secondary">Secondary</Button>
      <Button variant="outlined" color="destructive">Destructive</Button>
    </div>

    <div class="flex flex-wrap items-center gap-2">
      <Button variant="ghost" color="default">Default</Button>
      <Button variant="ghost" color="primary">Primary</Button>
      <Button variant="ghost" color="secondary">Secondary</Button>
      <Button variant="ghost" color="destructive">Destructive</Button>
    </div>
  </div>
</template>`,
	withIcon: `<script setup lang="ts">
import { ArrowRight, GitBranch } from '@lucide/vue'
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="outlined">
      <template #leading>
        <GitBranch class="size-5" />
      </template>
      New Branch
    </Button>

    <Button variant="outlined">
      Continue
      <template #trailing>
        <ArrowRight class="size-5" />
      </template>
    </Button>
  </div>
</template>`,
};
</script>

<template>
	<article class="mx-auto min-w-0 max-w-[760px] space-y-12">
		<header class="space-y-3">
			<h1 class="text-4xl font-semibold">Button</h1>
			<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
				Displays a button for actions in forms, toolbars and navigation.
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
				<p class="p-4 text-md">npx alixan-ui-nuxt add button</p>
			</div>
		</section>

		<section id="usage" class="space-y-5">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold">Usage</h2>
				<p class="text-muted-foreground leading-7">
					Button styling is built from two independent props: variant chooses
					the visual weight, and color chooses the action intent. Combine them
					to get the right emphasis without changing the meaning of the action.
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
								<Button
									v-for="color in buttonColors"
									:key="`${variant}-${color}`"
									:variant="variant"
									:color="color"
								>
									{{ color }}
								</Button>
							</div>
						</div>
					</div>
				</ExampleBlock>
			</div>
		</section>

		<section id="size" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Size</h2>
			<ExampleBlock :code="examples.size">
				<div class="flex items-center gap-2">
					<Button size="sm">Small</Button>
					<Button>Default</Button>
					<Button size="lg">Large</Button>
				</div>
			</ExampleBlock>
		</section>

		<section id="navigation" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Navigation</h2>
			<ExampleBlock :code="examples.navigation">
				<div class="flex flex-wrap items-center gap-2">
					<Button to="/icon-button">NuxtLink</Button>
					<Button
						href="https://github.com"
						target="_blank"
						variant="outlined"
						color="default"
					>
						External link
					</Button>
				</div>
			</ExampleBlock>
		</section>

		<section id="with-icon" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">With Icon</h2>
			<ExampleBlock :code="examples.withIcon">
				<div class="flex flex-wrap items-center gap-2">
					<Button variant="outlined" color="default">
						<template #leading>
							<GitBranch class="size-5" />
						</template>
						New Branch
					</Button>

					<Button variant="outlined" color="default">
						Continue
						<template #trailing>
							<ArrowRight class="size-5" />
						</template>
					</Button>
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
						<tr v-for="item in buttonProps" :key="item.name">
							<td class="px-4 py-3 font-medium">{{ item.name }}</td>
							<td class="px-4 py-3 text-muted-foreground">
								{{ item.type }}
							</td>
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
	</article>
</template>
