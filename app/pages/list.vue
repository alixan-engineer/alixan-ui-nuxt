<script setup lang="ts">
import { ChevronRight, Pencil, Trash2 } from '@lucide/vue';
import {
	listProps,
	listTileProps,
	listTileSlots,
} from '~/shared/examples/list/api-reference';
import { listPageToc } from '~/shared/examples/list/page-toc';
import { examples } from '~/shared/examples/list/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.list.metaTitle',
	description: 'componentDocs.list.description',
});

const { setToc } = usePageToc();
const toast = useToast();

onMounted(() => setToc(listPageToc));

const contacts = [
	{ title: 'list.contacts.aruzhan', description: 'list.contacts.aruzhanPhone', image: '/examples/contact-avatar.webp' },
	{ title: 'list.contacts.daniyar', description: 'list.contacts.daniyarPhone', image: '/examples/contact-daniyar.webp' },
	{ title: 'list.contacts.aidana', description: 'list.contacts.aidanaPhone', image: '/examples/contact-aidana.webp' },
];

const openContact = () => toast.open('list.profileOpened', 'info');

const editProfile = () => toast.open('list.editStarted', 'info');

const deleteProfile = () => toast.open('list.deleteStarted', 'warning');
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.list') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.list.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="list" />
	</section>

	<section id="click" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('list.clickTitle') }}</h2>
			<p class="leading-7 text-muted-foreground">
				{{ $t('list.clickDescription') }}
			</p>
		</div>
		<ExampleBlock :code="examples.inset">
			<List class="w-full max-w-md" divider="inset">
				<ListTile
					v-for="contact in contacts"
					:key="contact.title"
					:title="contact.title"
					:description="contact.description"
					@click="openContact"
				>
					<template #leading>
						<img
							:src="contact.image"
							alt=""
							loading="lazy"
							class="size-12 rounded-full object-cover"
						/>
					</template>
					<template #trailing>
						<ChevronRight class="size-5 text-muted-foreground" />
					</template>
				</ListTile>
			</List>
		</ExampleBlock>
	</section>

	<section id="actions" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('list.actionsTitle') }}</h2>
		<ExampleBlock :code="examples.actions">
			<List class="w-full max-w-md">
				<ListTile
					v-for="contact in contacts"
					:key="contact.title"
					:title="contact.title"
					:description="contact.description"
				>
					<template #leading>
						<img
							:src="contact.image"
							alt=""
							loading="lazy"
							class="size-12 rounded-full object-cover"
						/>
					</template>
					<template #trailing>
						<IconButton
							:tooltip="$t('list.edit')"
							variant="outlined"
							size="sm"
							@click="editProfile"
						>
							<Pencil />
						</IconButton>
						<IconButton
							:tooltip="$t('list.delete')"
							variant="outlined"
							color="destructive"
							size="sm"
							@click="deleteProfile"
						>
							<Trash2 />
						</IconButton>
					</template>
				</ListTile>
			</List>
		</ExampleBlock>
	</section>

	<section id="border" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('list.borderTitle') }}</h2>
			<p class="leading-7 text-muted-foreground">
				{{ $t('list.borderDescription') }}
			</p>
		</div>
		<h3 class="text-lg font-semibold">{{ $t('list.insetTitle') }}</h3>
		<ExampleBlock :code="examples.borderInset">
			<List class="w-full max-w-md" divider="inset">
				<ListTile
					v-for="contact in contacts"
					:key="contact.title"
					:title="contact.title"
					:description="contact.description"
				>
					<template #leading>
						<img
							:src="contact.image"
							alt=""
							loading="lazy"
							class="size-12 rounded-full object-cover"
						/>
					</template>
				</ListTile>
			</List>
		</ExampleBlock>
		<h3 class="text-lg font-semibold">{{ $t('list.blockTitle') }}</h3>
		<ExampleBlock :code="examples.block">
			<List class="w-full max-w-md" divider="block">
				<ListTile
					v-for="contact in contacts"
					:key="contact.title"
					:title="contact.title"
					:description="contact.description"
				>
					<template #leading>
						<img
							:src="contact.image"
							alt=""
							loading="lazy"
							class="size-12 rounded-full object-cover"
						/>
					</template>
				</ListTile>
			</List>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="listProps" />
		<Table :columns="propsTableColumns" :rows="listTileProps" />
		<Table :columns="propsTableColumns" :rows="listTileSlots" />
	</section>
</template>
