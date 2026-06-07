<script setup lang="ts">
import { switchProps } from '~/shared/examples/switch/api-reference';
import { switchPageToc } from '~/shared/examples/switch/page-toc';
import { examples } from '~/shared/examples/switch/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.switch.metaTitle',
	description: 'componentDocs.switch.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(switchPageToc));

const checked = ref<boolean>(false);
const disabledChecked = ref<boolean>(true);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.switch') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.switch.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="switch" />
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				Use <code>v-model</code> to bind the boolean state.
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-col gap-4">
				<Switch v-model="checked" label="Airplane Mode" />
				<Switch v-model="disabledChecked" label="Disabled" disabled />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="switchProps" />
	</section>
</template>
