<script setup lang="ts">
import { propsTableColumns } from '~/shared/examples/table-columns';
import { stepperProps } from '~/shared/examples/stepper/api-reference';
import { stepperPageToc } from '~/shared/examples/stepper/page-toc';
import { examples } from '~/shared/examples/stepper/usage-examples';

usePageMeta({
	title: 'componentDocs.stepper.metaTitle',
	description: 'componentDocs.stepper.description',
});

const { setToc } = usePageToc();
onMounted(() => setToc(stepperPageToc));

const steps = [
	{ id: 1, label: 'componentDocs.stepper.demo.details' },
	{ id: 2, label: 'componentDocs.stepper.demo.payment' },
	{ id: 3, label: 'componentDocs.stepper.demo.confirmation' },
];
const selectedIndex = ref(1);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.stepper') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.stepper.description') }}
		</p>
	</header>
	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="stepper" />
	</section>
	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="w-full space-y-6">
				<Stepper :steps="steps" :selected="steps[selectedIndex]" />
				<div class="flex justify-center gap-2">
					<Button size="sm" variant="outlined" :disabled="selectedIndex === 0" @click="selectedIndex--">
						{{ $t('componentDocs.stepper.demo.previous') }}
					</Button>
					<Button size="sm" :disabled="selectedIndex === steps.length - 1" @click="selectedIndex++">
						{{ $t('componentDocs.stepper.demo.next') }}
					</Button>
				</div>
			</div>
		</ExampleBlock>
	</section>
	<section id="vertical" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('componentDocs.stepper.vertical') }}</h2>
		<ExampleBlock :code="examples.vertical">
			<Stepper :steps="steps" :selected="steps[selectedIndex]" direction="vertical" />
		</ExampleBlock>
	</section>
	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table :columns="propsTableColumns" :rows="stepperProps" />
	</section>
</template>
