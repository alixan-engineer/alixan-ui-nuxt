<script setup lang="ts">
import { ArrowRight, GitBranch } from '@lucide/vue';
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';
import {
	buttonColors,
	buttonVariants,
} from '~/shared/button-options/button-options';

const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.button.metaTitle'),
	description: t('componentDocs.button.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.size'), href: '#size' },
	{ label: t('docsSections.navigation'), href: '#navigation' },
	{ label: t('docsSections.withIcon'), href: '#with-icon' },
	{ label: t('docsSections.loading'), href: '#loading' },
	{ label: t('docsSections.disabled'), href: '#disable' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const loader = useGlobalLoader();
const dialog = useDialog();

const showGlobalLoader = (): void => {
	loader.show({ label: 'Saving changes...' });

	window.setTimeout(() => {
		loader.hide();
	}, 3000);
};

const openDisableAlert = (): void => {
	dialog.open(AlertDialog, {
		width: '360px',
		height: '280px',
		data: {
			title: 'Action unavailable',
			description: 'Export will be available after the report is generated.',
			buttonLabel: 'Got it',
		},
	});
};

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
		description:
			'Surface style. Filled is used by default. Combine it with color for intent.',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'default'",
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
import Button from '@/components/ui/button/Button.vue'
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
import Button from '@/components/ui/button/Button.vue'
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
    >
      External link
    </Button>
  </div>
</template>`,
	default: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <Button>
    Default
  </Button>
</template>`,
	outline: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <Button variant="outlined">
    Outline
  </Button>
</template>`,
	variant: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
<\/script>

<template>
  <div class="flex items-center gap-2">
    <Button variant="filled">Filled</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
</template>`,
	color: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
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
import Button from '@/components/ui/button/Button.vue'
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
import Button from '@/components/ui/button/Button.vue'
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
	loading: `<script setup lang="ts">
const loader = useGlobalLoader()

const save = () => {
  loader.show({ label: 'Saving changes...' })

  window.setTimeout(() => {
    loader.hide()
  }, 3000)
}
<\/script>

<template>
  <Button @click="save">Save changes</Button>
</template>`,
	disable: `<script setup lang="ts">
const dialog = useDialog()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'Action unavailable',
      description: 'Export will be available after the report is generated.',
      buttonLabel: 'Got it',
    },
  })
}
<\/script>

<template>
  <Button variant="outlined" @click="openAlert">
    Export report
  </Button>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.button') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.button.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="button" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				Button styling is built from two independent props: variant chooses the
				visual weight, and color chooses the action intent. Combine them to get
				the right emphasis without changing the meaning of the action.
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
		<h2 class="text-2xl font-semibold tracking-normal">{{ $t('docsSections.size') }}</h2>
		<ExampleBlock :code="examples.size">
			<div class="flex items-center gap-2">
				<Button size="sm">Small</Button>
				<Button>Default</Button>
				<Button size="lg">Large</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="navigation" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">{{ $t('docsSections.navigation') }}</h2>
		<ExampleBlock :code="examples.navigation">
			<div class="flex flex-wrap items-center gap-2">
				<Button to="/icon-button">NuxtLink</Button>
				<Button href="https://github.com" target="_blank" variant="outlined">
					External link
				</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="with-icon" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">{{ $t('docsSections.withIcon') }}</h2>
		<ExampleBlock :code="examples.withIcon">
			<div class="flex flex-wrap items-center gap-2">
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
		</ExampleBlock>
	</section>

	<section id="loading" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold tracking-normal">{{ $t('docsSections.loading') }}</h2>
			<p class="text-muted-foreground leading-7">
				Button does not include a built-in spinner state. If the button keeps
				spinning inline, the user can still navigate away and lose the action
				context. A global loader blocks the surface, communicates one active
				operation, and keeps the experience easier to understand.
			</p>
		</div>
		<ExampleBlock :code="examples.loading">
			<Button @click="showGlobalLoader">Save changes</Button>
		</ExampleBlock>
	</section>

	<section id="disable" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold tracking-normal">{{ $t('docsSections.disabled') }}</h2>
			<p class="text-muted-foreground leading-7">
				Prefer not to disable buttons. Keep the action visible and active, then
				explain why it cannot run with a warning message. This gives the user
				feedback instead of a dead control.
			</p>
		</div>
		<ExampleBlock :code="examples.disable">
			<Button variant="outlined" @click="openDisableAlert">
				Export report
			</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.prop') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.type') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.default') }}</th>
						<th class="px-4 py-3 font-medium">{{ $t('docsTable.description') }}</th>
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
</template>
