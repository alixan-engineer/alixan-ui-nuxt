<script setup lang="ts">
import { checkboxProps } from '~/shared/examples/checkbox/api-reference';
import { checkboxPageToc } from '~/shared/examples/checkbox/page-toc';
import { examples } from '~/shared/examples/checkbox/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.checkbox.metaTitle',
	description: 'componentDocs.checkbox.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(checkboxPageToc));

const accepted = ref<boolean>(false);
const selectedPeriod = ref<string | null>('7d');
const selectedOptions = ref<string[]>(['email']);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.checkbox') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.checkbox.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="checkbox" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="flex flex-col gap-5">
				<Checkbox v-model="accepted" label="Accept terms" />

				<div class="flex flex-wrap gap-4">
					<Checkbox v-model="selectedPeriod" value="7d" label="7 d" />
					<Checkbox v-model="selectedPeriod" value="30d" label="30 d" />
				</div>

				<div class="flex flex-wrap gap-4">
					<Checkbox
						v-model="selectedOptions"
						mode="multiple"
						value="email"
						label="Email"
					/>
					<Checkbox
						v-model="selectedOptions"
						mode="multiple"
						value="sms"
						label="SMS"
					/>
				</div>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="checkboxProps" />
	</section>
</template>
