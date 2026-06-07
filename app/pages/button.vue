<script setup lang="ts">
import { ArrowRight, GitBranch } from '@lucide/vue';
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';
import { buttonApiRows } from '~/shared/examples/button/api-reference';
import {
	buttonColors,
	buttonVariants,
} from '~/shared/examples/button/button-options';
import { buttonPageToc } from '~/shared/examples/button/page-toc';
import { buttonExamples } from '~/shared/examples/button/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.button.metaTitle',
	description: 'componentDocs.button.description',
});

const { setToc } = usePageToc();
const loader = useGlobalLoader();
const dialog = useDialog();

onMounted(() => setToc(buttonPageToc));

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
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.button') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.button.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="button" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				Button styling is built from two independent props: variant chooses the
				visual weight, and color chooses the action intent. Combine them to get
				the right emphasis without changing the meaning of the action.
			</p>
		</div>
		<div class="space-y-4">
			<ExampleBlock :code="buttonExamples.combinations">
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
		<h2 class="text-2xl font-semibold tracking-normal">
			{{ $tn('docsSections.size') }}
		</h2>
		<ExampleBlock :code="buttonExamples.size">
			<div class="flex items-center gap-2">
				<Button size="sm">Small</Button>
				<Button>Default</Button>
				<Button size="lg">Large</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="navigation" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">
			{{ $tn('docsSections.navigation') }}
		</h2>
		<ExampleBlock :code="buttonExamples.navigation">
			<div class="flex flex-wrap items-center gap-2">
				<Button to="/icon-button">NuxtLink</Button>
				<Button href="https://github.com" target="_blank" variant="outlined">
					External link
				</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="with-icon" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">
			{{ $tn('docsSections.withIcon') }}
		</h2>
		<ExampleBlock :code="buttonExamples.withIcon">
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
			<h2 class="text-2xl font-semibold tracking-normal">
				{{ $tn('docsSections.loading') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				Button does not include a built-in spinner state. If the button keeps
				spinning inline, the user can still navigate away and lose the action
				context. A global loader blocks the surface, communicates one active
				operation, and keeps the experience easier to understand.
			</p>
		</div>
		<ExampleBlock :code="buttonExamples.loading">
			<Button @click="showGlobalLoader">Save changes</Button>
		</ExampleBlock>
	</section>

	<section id="disable" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold tracking-normal">
				{{ $tn('docsSections.disabled') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				Prefer not to disable buttons. Keep the action visible and active, then
				explain why it cannot run with a warning message. This gives the user
				feedback instead of a dead control.
			</p>
		</div>
		<ExampleBlock :code="buttonExamples.disable">
			<Button variant="outlined" @click="openDisableAlert">
				Export report
			</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="buttonApiRows" />
	</section>
</template>
