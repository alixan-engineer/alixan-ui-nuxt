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

onMounted(() => setToc(iconButtonPageToc));

const showGlobalLoader = (): void => {
	loader.show({ label: 'Saving action...' });
	window.setTimeout(() => loader.hide(), 3000);
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
				IconButton uses the same variant and color system as Button, but keeps
				the control square for icon-only actions. Always provide a label so the
				action remains clear for assistive technologies.
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
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.size') }}</h2>
		<ExampleBlock :code="iconButtonExamples.size">
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
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.navigation') }}</h2>
		<ExampleBlock :code="iconButtonExamples.navigation">
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
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.loading') }}</h2>
			<p class="text-muted-foreground leading-7">
				IconButton does not include an inline spinner. Inline loading can leave
				the user free to navigate away and lose the action context. Use a global
				loader when the operation should be treated as one blocking action.
			</p>
		</div>
		<ExampleBlock :code="iconButtonExamples.loading">
			<IconButton label="Save action" @click="showGlobalLoader">
				<ArrowUpRight />
			</IconButton>
		</ExampleBlock>
	</section>

	<section id="disable" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.disabled') }}</h2>
			<p class="text-muted-foreground leading-7">
				Do not make the icon action silent and unavailable. Keep it active, then
				show a warning dialog that explains what the user needs to do.
			</p>
		</div>
		<ExampleBlock :code="iconButtonExamples.disable">
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
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="iconButtonApiRows" />
	</section>
</template>
