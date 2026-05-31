<script setup lang="ts">
import { ArrowRight, Copy, GitBranch, LoaderCircle } from 'lucide-vue-next';

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Preview', href: '#preview' },
	{ label: 'Variants + Colors', href: '#variants-colors' },
	{ label: 'Variant', href: '#variant', child: true },
	{ label: 'Color', href: '#color', child: true },
	{ label: 'Combinations', href: '#combinations', child: true },
	{ label: 'Size', href: '#size' },
	{ label: 'Outline', href: '#outline' },
	{ label: 'With Icon', href: '#with-icon' },
	{ label: 'Spinner', href: '#spinner' },
	{ label: 'Disabled', href: '#disabled' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const colors = ['default', 'primary', 'secondary', 'destructive'] as const;

const variants = ['filled', 'outlined', 'ghost'] as const;

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
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables pointer events and lowers opacity.',
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
import { ArrowRight, GitBranch } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="outlined" color="default" size="sm">
      <template #leading>
        <GitBranch class="size-4" />
      </template>
      New Branch
    </Button>

    <Button variant="outlined" color="default" size="sm">
      Continue
      <template #trailing>
        <ArrowRight class="size-4" />
      </template>
    </Button>
  </div>
</template>`,
	spinner: `<script setup lang="ts">
import { LoaderCircle } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <Button size="sm" variant="outlined" color="default" disabled>
    <template #leading>
      <LoaderCircle class="size-4 animate-spin" />
    </template>
    Submit
  </Button>
</template>`,
	disabled: `<script setup lang="ts">
import { Button } from '@/components/ui/button'
<\/script>

<template>
  <Button disabled>
    Button
  </Button>
</template>`,
};
</script>

<template>
	<div class="grid gap-10 lg:grid-cols-[minmax(0,760px)_260px]">
		<article class="min-w-0 space-y-12">
		<header class="space-y-3">
			<h1 class="text-4xl font-semibold tracking-normal">Button</h1>
			<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
				Displays a button for actions in forms, toolbars and navigation.
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
				><code>npx alixan-ui-nuxt add button</code></pre>
			</div>
		</section>

		<section
			id="preview"
			class="overflow-hidden rounded-xl border bg-background"
		>
			<div
				class="flex min-h-[280px] flex-wrap items-center justify-center gap-2 p-8"
			>
				<Button variant="outlined" color="default">Button</Button>
			</div>

			<div class="relative border-t bg-secondary/60">
				<Copy class="absolute right-4 top-4 size-4 text-muted-foreground" />
				<pre
					class="overflow-x-auto p-6 pr-12 text-sm leading-7"
				><code>&lt;script setup lang="ts"&gt;
import { Button } from '@/components/ui/button'
&lt;/script&gt;

&lt;template&gt;
  &lt;Button variant="outlined" color="default"&gt;
    Button
  &lt;/Button&gt;
&lt;/template&gt;</code></pre>
			</div>
		</section>

		<section id="variants-colors" class="space-y-8">
			<div class="space-y-2">
				<h2 class="text-2xl font-semibold tracking-normal">Variants + Colors</h2>
				<p class="leading-7 text-muted-foreground">
					Button styling is built from two independent props:
					<code>variant</code> chooses the visual weight, and <code>color</code>
					chooses the action intent. Combine them to get the right emphasis
					without changing the meaning of the action.
				</p>
			</div>

			<div id="variant" class="space-y-4">
				<div>
					<h3 class="text-xl font-semibold">Variant</h3>
					<p class="mt-1 leading-7 text-muted-foreground">
						Use <code>filled</code> for the strongest action on the screen,
						<code>outlined</code> for a visible secondary action, and
						<code>ghost</code> for actions that should stay quiet until hover.
					</p>
				</div>
				<ExampleBlock :code="examples.variant">
					<div class="flex flex-wrap items-center gap-2">
						<Button
							v-for="variant in variants"
							:key="variant"
							:variant="variant"
							color="default"
						>
							{{ variant }}
						</Button>
					</div>
				</ExampleBlock>
			</div>

			<div id="color" class="space-y-4">
				<div>
					<h3 class="text-xl font-semibold">Color</h3>
					<p class="mt-1 leading-7 text-muted-foreground">
						Use <code>default</code> for neutral UI actions,
						<code>primary</code> for the main path, <code>secondary</code> for
						low-priority actions, and <code>destructive</code> for dangerous
						actions.
					</p>
				</div>
				<ExampleBlock :code="examples.color">
					<div class="flex flex-wrap items-center gap-2">
						<Button
							v-for="color in colors"
							:key="color"
							:color="color"
						>
							{{ color }}
						</Button>
					</div>
				</ExampleBlock>
			</div>

			<div id="combinations" class="space-y-4">
				<div>
					<h3 class="text-xl font-semibold">Combinations</h3>
					<p class="mt-1 leading-7 text-muted-foreground">
						Every variant works with every color. The matrix below shows all
						supported combinations.
					</p>
				</div>
				<ExampleBlock :code="examples.combinations">
					<div class="space-y-4">
						<div
							v-for="variant in variants"
							:key="`matrix-${variant}`"
							class="space-y-2"
						>
							<p class="font-mono text-xs text-muted-foreground">
								{{ variant }}
							</p>
							<div class="flex flex-wrap items-center gap-2">
								<Button
									v-for="color in colors"
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

		<section id="default" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Default</h2>
			<ExampleBlock :code="examples.default">
				<Button>Default</Button>
			</ExampleBlock>
		</section>

		<section id="outline" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Outline</h2>
			<ExampleBlock :code="examples.outline">
				<Button variant="outlined" color="default">Outline</Button>
			</ExampleBlock>
		</section>

		<section id="with-icon" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">With Icon</h2>
			<ExampleBlock :code="examples.withIcon">
				<div class="flex flex-wrap items-center gap-2">
					<Button variant="outlined" color="default" size="sm">
						<template #leading>
							<GitBranch class="size-4" />
						</template>
						New Branch
					</Button>

					<Button variant="outlined" color="default" size="sm">
						Continue
						<template #trailing>
							<ArrowRight class="size-4" />
						</template>
					</Button>
				</div>
			</ExampleBlock>
		</section>

		<section id="spinner" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Spinner</h2>
			<ExampleBlock :code="examples.spinner">
				<Button size="sm" variant="outlined" color="default" disabled>
					<template #leading>
						<LoaderCircle class="size-4 animate-spin" />
					</template>
					Submit
				</Button>
			</ExampleBlock>
		</section>

		<section id="disabled" class="space-y-4">
			<h2 class="text-2xl font-semibold tracking-normal">Disabled</h2>
			<ExampleBlock :code="examples.disabled">
				<Button disabled>Button</Button>
			</ExampleBlock>
		</section>

		<section id="api-reference" class="space-y-8">
			<h2 class="text-2xl font-semibold tracking-normal">API Reference</h2>

			<div class="space-y-4">
				<h3 class="text-xl font-semibold">Button</h3>
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
