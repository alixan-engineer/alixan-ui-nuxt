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
const localePath = useLocalePath();
const { t } = useI18n();

onMounted(() => setToc(buttonPageToc));

const showGlobalLoader = (): void => {
	loader.show({ label: 'componentDocs.button.savingChanges' });
	window.setTimeout(() => {
		loader.hide();
	}, 3000);
};

const openDisableAlert = (): void => {
	dialog.open(AlertDialog, {
		width: '360px',
		height: '280px',
		data: {
			title: t('componentDocs.button.actionUnavailable'),
			description: t('componentDocs.button.exportUnavailable'),
			buttonLabel: t('componentDocs.button.gotIt'),
		},
	});
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
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="button" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('componentDocs.button.usageDescription') }}
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
							{{ $t(`variants.${variant}`) }}
						</p>
						<div class="flex flex-wrap items-center gap-2">
							<Button
								v-for="color in buttonColors"
								:key="`${variant}-${color}`"
								:variant="variant"
								:color="color"
							>
								{{ $t(`colors.${color}`) }}
							</Button>
						</div>
					</div>
				</div>
			</ExampleBlock>
		</div>
	</section>

	<section id="size" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">
			{{ $t('docsSections.size') }}
		</h2>
		<ExampleBlock :code="buttonExamples.size">
			<div class="flex items-center gap-2">
				<Button size="sm">{{ $t('componentDocs.button.small') }}</Button>
				<Button>{{ $t('componentDocs.button.default') }}</Button>
				<Button size="lg">{{ $t('componentDocs.button.large') }}</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="navigation" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">
			{{ $t('docsSections.navigation') }}
		</h2>
		<ExampleBlock :code="buttonExamples.navigation">
			<div class="flex flex-wrap items-center gap-2">
				<Button :to="localePath('/icon-button')">
					{{ $t('componentDocs.button.nuxtLink') }}
				</Button>
				<Button href="https://github.com" target="_blank" variant="outlined">
					{{ $t('componentDocs.button.externalLink') }}
				</Button>
			</div>
		</ExampleBlock>
	</section>

	<section id="with-icon" class="space-y-4">
		<h2 class="text-2xl font-semibold tracking-normal">
			{{ $t('docsSections.withIcon') }}
		</h2>
		<ExampleBlock :code="buttonExamples.withIcon">
			<div class="flex flex-wrap items-center gap-2">
				<Button variant="outlined">
					<template #leading>
						<GitBranch class="size-5" />
					</template>
					{{ $t('componentDocs.button.newBranch') }}
				</Button>

				<Button variant="outlined">
					{{ $t('componentDocs.button.continue') }}
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
				{{ $t('docsSections.loading') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('componentDocs.button.loadingDescription') }}
			</p>
		</div>
		<ExampleBlock :code="buttonExamples.loading">
			<Button @click="showGlobalLoader">
				{{ $t('componentDocs.button.saveChanges') }}
			</Button>
		</ExampleBlock>
	</section>

	<section id="disable" class="space-y-4">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold tracking-normal">
				{{ $t('docsSections.disabled') }}
			</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('componentDocs.button.disabledDescription') }}
			</p>
		</div>
		<ExampleBlock :code="buttonExamples.disable">
			<Button variant="outlined" @click="openDisableAlert">
				{{ $t('componentDocs.button.exportReport') }}
			</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="buttonApiRows" />
	</section>
</template>
