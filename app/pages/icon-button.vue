<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';
import {
	buttonColors,
	buttonVariants,
} from '~/shared/button-options/button-options';

const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.iconButton.metaTitle'),
	description: t('componentDocs.iconButton.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.size'), href: '#size' },
	{ label: t('docsSections.navigation'), href: '#navigation' },
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
	loader.show({ label: 'Saving action...' });

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
		default: "'ghost'",
		description: 'Visual style of the icon button. Ghost is used by default.',
	},
	{
		name: 'color',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'default'",
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
import IconButton from '@/components/ui/icon-button/IconButton.vue'
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
import IconButton from '@/components/ui/icon-button/IconButton.vue'
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
import IconButton from '@/components/ui/icon-button/IconButton.vue'
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
    >
      <ArrowUpRight />
    </IconButton>
  </div>
</template>`,
	loading: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const loader = useGlobalLoader()

const save = () => {
  loader.show({ label: 'Saving action...' })

  window.setTimeout(() => {
    loader.hide()
  }, 3000)
}
<\/script>

<template>
  <IconButton label="Save action" @click="save">
    <ArrowUpRight />
  </IconButton>
</template>`,
	disable: `<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

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
  <IconButton label="Export report" variant="outlined" @click="openAlert">
    <ArrowUpRight />
  </IconButton>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.iconButton') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.iconButton.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="icon-button" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				IconButton uses the same variant and color system as Button, but keeps
				the control square for icon-only actions. Always provide a label so the
				action remains clear for assistive technologies.
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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.size') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.navigation') }}</h2>
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
				>
					<ArrowUpRight />
				</IconButton>
			</div>
		</ExampleBlock>
	</section>

	<section id="loading" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.loading') }}</h2>
			<p class="text-muted-foreground leading-7">
				IconButton does not include an inline spinner. Inline loading can leave
				the user free to navigate away and lose the action context. Use a global
				loader when the operation should be treated as one blocking action.
			</p>
		</div>
		<ExampleBlock :code="examples.loading">
			<IconButton label="Save action" @click="showGlobalLoader">
				<ArrowUpRight />
			</IconButton>
		</ExampleBlock>
	</section>

	<section id="disable" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.disabled') }}</h2>
			<p class="text-muted-foreground leading-7">
				Do not make the icon action silent and unavailable. Keep it active, then
				show a warning dialog that explains what the user needs to do.
			</p>
		</div>
		<ExampleBlock :code="examples.disable">
			<IconButton
				label="Export report"
				variant="outlined"
				@click="openDisableAlert"
			>
				<ArrowUpRight />
			</IconButton>
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
