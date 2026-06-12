<script setup lang="ts">
import { cardProps } from '~/shared/examples/card/api-reference';
import { cardPageToc } from '~/shared/examples/card/page-toc';
import { examples } from '~/shared/examples/card/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.card.metaTitle',
	description: 'componentDocs.card.description',
});

const { setToc } = usePageToc();
const toast = useToast();

onMounted(() => setToc(cardPageToc));

const onTap = () => {
	toast.open('card.addedToCard', 'success');
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.card') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.card.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="card" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-sm">
				<Card
					image="/mac.webp"
					title="card.demoTitle"
					description="card.demoDescription"
					price="$640"
					button="card.addToCart"
					@on-tap="onTap"
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="cardProps" />
	</section>
</template>
