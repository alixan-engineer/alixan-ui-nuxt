<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';
import {
	buttonColors,
	buttonVariants,
} from '~/shared/examples/button/button-options';
import { iconButtonApiRows } from '~/shared/examples/icon-button/api-reference';
import { iconButtonPageToc } from '~/shared/examples/icon-button/page-toc';
import { iconButtonExamples } from '~/shared/examples/icon-button/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.iconButton.metaTitle',
	description: 'componentDocs.iconButton.description',
});

const loader = useGlobalLoader();
const dialog = useDialog();
const { setToc } = usePageToc();
const localePath = useLocalePath();
const { $tn } = useNuxtApp();

onMounted(() => setToc(iconButtonPageToc));

const showGlobalLoader = (): void => {
	loader.show({ label: 'componentDocs.iconButton.savingAction' });
	window.setTimeout(() => loader.hide(), 3000);
};

const openDisableAlert = (): void => {
	dialog.open(AlertDialog, {
		width: '360px',
		height: '280px',
		data: {
			title: $tn('componentDocs.iconButton.actionUnavailable'),
			description: $tn('componentDocs.iconButton.exportUnavailable'),
			buttonLabel: $tn('componentDocs.iconButton.gotIt'),
		},
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.iconButton') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.iconButton.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="icon-button" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('componentDocs.iconButton.usageDescription') }}
			</p>
		</div>
		<div class="space-y-4">
			<ExampleBlock :code="iconButtonExamples.combinations">
				<div class="space-y-4">
					<div
						v-for="variant in buttonVariants"
						:key="`matrix-${variant}`"
						class="space-y-2"
					>
						<p class="text-sm text-muted-foreground">
							{{ $tn(`variants.${variant}`) }}
						</p>
						<div class="flex flex-wrap items-center gap-2">
							<IconButton
								v-for="color in buttonColors"
								:key="`${variant}-${color}`"
								:variant="variant"
								:color="color"
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
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.size') }}</h2>
		<ExampleBlock :code="iconButtonExamples.size">
			<div class="flex items-center gap-2">
				<IconButton size="sm">
					<ArrowUpRight />
				</IconButton>
				<IconButton>
					<ArrowUpRight />
				</IconButton>
				<IconButton size="lg">
					<ArrowUpRight />
				</IconButton>
			</div>
		</ExampleBlock>
	</section>

	<section id="navigation" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.navigation') }}</h2>
		<ExampleBlock :code="iconButtonExamples.navigation">
			<div class="flex items-center gap-2">
				<IconButton :to="localePath('/icon-button')">
					<ArrowUpRight />
				</IconButton>

				<IconButton
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
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.loading') }}</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('componentDocs.iconButton.loadingDescription') }}
			</p>
		</div>
		<ExampleBlock :code="iconButtonExamples.loading">
			<IconButton @click="showGlobalLoader">
				<ArrowUpRight />
			</IconButton>
		</ExampleBlock>
	</section>

	<section id="disable" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.disabled') }}</h2>
			<p class="text-muted-foreground leading-7">
				{{ $tn('componentDocs.iconButton.disabledDescription') }}
			</p>
		</div>
		<ExampleBlock :code="iconButtonExamples.disable">
			<IconButton variant="outlined" @click="openDisableAlert">
				<ArrowUpRight />
			</IconButton>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="iconButtonApiRows" />
	</section>
</template>
