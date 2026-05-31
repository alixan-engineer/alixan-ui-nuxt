<script setup lang="ts">
import { ArrowUpRight, CircleFadingArrowUp, Copy, LoaderCircle, Plus } from 'lucide-vue-next';

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Preview', href: '#preview' },
	{ label: 'Size', href: '#size' },
	{ label: 'Default', href: '#default' },
	{ label: 'Outline', href: '#outline' },
	{ label: 'Ghost', href: '#ghost' },
	{ label: 'Destructive', href: '#destructive' },
	{ label: 'Rounded', href: '#rounded' },
	{ label: 'Spinner', href: '#spinner' },
	{ label: 'Disabled', href: '#disabled' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

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
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables pointer events and lowers opacity.',
	},
];

const examples = {
	size: `<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
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
	default: `<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton label="Open">
    <ArrowUpRight />
  </IconButton>
</template>`,
	outline: `<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton label="Open" variant="outlined" color="default">
    <ArrowUpRight />
  </IconButton>
</template>`,
	ghost: `<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton label="Open" variant="ghost" color="default">
    <ArrowUpRight />
  </IconButton>
</template>`,
	destructive: `<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton label="Delete" color="destructive">
    <Plus />
  </IconButton>
</template>`,
	rounded: `<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton
    label="Upload"
    variant="outlined"
    color="default"
    class="rounded-full"
  >
    <ArrowUpRight />
  </IconButton>
</template>`,
	spinner: `<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton label="Loading" variant="outlined" color="default" disabled>
    <LoaderCircle class="animate-spin" />
  </IconButton>
</template>`,
	disabled: `<script setup lang="ts">
import { Plus } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
<\/script>

<template>
  <IconButton label="Add" disabled>
    <Plus />
  </IconButton>
</template>`,
};
</script>

<template>
	<div class="grid gap-10 lg:grid-cols-[minmax(0,760px)_260px]">
		<article class="min-w-0 space-y-12">
		<header class="space-y-3">
			<h1 class="text-4xl font-semibold tracking-normal">Icon Button</h1>
			<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
				Displays an icon-only button with a required accessible label.
			</p>
		</header>

		<section id="installation" class="space-y-5">
			<h2 class="text-2xl font-semibold tracking-normal">Installation</h2>

			<div class="island">
				<div class="flex items-center justify-between border-b px-4 py-3">
					<div class="flex items-center gap-4 text-sm">
						<span class="font-medium">npm</span>
						<span class="text-muted-foreground">pnpm</span>
						<span class="text-muted-foreground">yarn</span>
						<span class="text-muted-foreground">bun</span>
					</div>
					<Copy class="size-4 text-muted-foreground" />
				</div>
				<pre
					class="overflow-x-auto p-4 text-sm"
				><code>npx alixan-ui-nuxt add icon-button</code></pre>
			</div>
		</section>

		<section
			id="preview"
			class="overflow-hidden rounded-xl border bg-background"
		>
			<div class="flex min-h-[280px] items-center justify-center p-8">
				<IconButton label="Submit" variant="outlined" color="default">
					<CircleFadingArrowUp />
				</IconButton>
			</div>

			<div class="relative border-t bg-secondary/60">
				<Copy class="absolute right-4 top-4 size-4 text-muted-foreground" />
				<pre
					class="overflow-x-auto p-6 pr-12 text-sm leading-7"
				><code>&lt;script setup lang="ts"&gt;
import { CircleFadingArrowUp } from 'lucide-vue-next'
import { IconButton } from '@/components/ui/icon-button'
&lt;/script&gt;

&lt;template&gt;
  &lt;IconButton label="Submit" variant="outlined" color="default"&gt;
    &lt;CircleFadingArrowUp /&gt;
  &lt;/IconButton&gt;
&lt;/template&gt;</code></pre>
			</div>
		</section>

		<section id="size" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Size</h2>
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

		<section id="default" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Default</h2>
			<ExampleBlock :code="examples.default">
				<IconButton label="Open">
					<ArrowUpRight />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="outline" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Outline</h2>
			<ExampleBlock :code="examples.outline">
				<IconButton label="Open" variant="outlined" color="default">
					<ArrowUpRight />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="ghost" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Ghost</h2>
			<ExampleBlock :code="examples.ghost">
				<IconButton label="Open" variant="ghost" color="default">
					<ArrowUpRight />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="destructive" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Destructive</h2>
			<ExampleBlock :code="examples.destructive">
				<IconButton label="Delete" color="destructive">
					<Plus />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="rounded" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Rounded</h2>
			<ExampleBlock :code="examples.rounded">
				<IconButton
					label="Upload"
					variant="outlined"
					color="default"
					class="rounded-full"
				>
					<ArrowUpRight />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="spinner" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Spinner</h2>
			<ExampleBlock :code="examples.spinner">
				<IconButton label="Loading" variant="outlined" color="default" disabled>
					<LoaderCircle class="animate-spin" />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="disabled" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Disabled</h2>
			<ExampleBlock :code="examples.disabled">
				<IconButton label="Add" disabled>
					<Plus />
				</IconButton>
			</ExampleBlock>
		</section>

		<section id="api-reference" class="space-y-8">
			<h2 class="text-2xl font-semibold tracking-normal">API Reference</h2>

			<div class="space-y-4">
				<h3 class="text-xl font-semibold">IconButton</h3>
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
			</div>
		</section>
		</article>

		<PageToc :links="tocLinks" />
	</div>
</template>
