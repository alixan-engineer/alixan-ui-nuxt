<script setup lang="ts">
import { islandProps } from '~/shared/examples/island/api-reference';
import { islandPageToc } from '~/shared/examples/island/page-toc';
import { examples } from '~/shared/examples/island/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.island.metaTitle',
	description: 'componentDocs.island.description',
});

const { setToc } = usePageToc();

const contacts = [
	{
		title: 'list.contacts.aruzhan',
		description: 'list.contacts.aruzhanPhone',
		image: '/examples/contact-avatar.webp',
	},
	{
		title: 'list.contacts.daniyar',
		description: 'list.contacts.daniyarPhone',
		image: '/examples/contact-daniyar.webp',
	},
	{
		title: 'list.contacts.aidana',
		description: 'list.contacts.aidanaPhone',
		image: '/examples/contact-aidana.webp',
	},
];

onMounted(() => setToc(islandPageToc));
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.island') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.island.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="island" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-xl">
				<Island
					title="island.demoTitle"
					subtitle="island.demoSubtitle"
					description="island.demoDesc"
					header-position="inside"
					content-class="p-4 rounded-4xl"
				>
					<List divider="inset">
						<ListTile
							v-for="contact in contacts"
							:key="contact.title"
							:title="contact.title"
							:description="contact.description"
						>
							<template #leading>
								<img
									:src="contact.image"
									alt="img"
									loading="lazy"
									class="size-11 rounded-full object-cover"
								/>
							</template>
						</ListTile>
					</List>
				</Island>
			</div>
		</ExampleBlock>
	</section>

	<section id="outside" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('island.outsideTitle') }}</h2>
		<ExampleBlock :code="examples.outside">
			<div class="w-full max-w-xl">
				<Island
					title="island.demoTitle"
					subtitle="island.demoSubtitle"
					description="island.demoDesc"
					header-position="outside"
					content-class="p-4 rounded-4xl"
				>
					<List divider="inset">
						<ListTile
							v-for="contact in contacts"
							:key="contact.title"
							:title="contact.title"
							:description="contact.description"
						>
							<template #leading>
								<img
									:src="contact.image"
									alt="img"
									loading="lazy"
									class="size-11 rounded-full object-cover"
								/>
							</template>
						</ListTile>
					</List>
				</Island>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="islandProps" />
	</section>
</template>
