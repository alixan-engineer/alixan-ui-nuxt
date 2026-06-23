<script setup lang="ts">
import { dropdownProps } from '~/shared/examples/dropdown-menu/api-reference';
import { dropdownMenuPageToc } from '~/shared/examples/dropdown-menu/page-toc';
import { code } from '~/shared/examples/dropdown-menu/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.dropdownMenu.metaTitle',
	description: 'componentDocs.dropdownMenu.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(dropdownMenuPageToc));

const isOpen = ref<boolean>(false);
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.dropdownMenu') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.dropdownMenu.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="dropdown-menu" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
		<ExampleBlock :code="code">
			<DropdownMenu
				v-model:open="isOpen"
				width="260px"
				height="320px"
				position="bottomLeft"
			>
				<template #trigger>
					<Button variant="outlined">
						{{ $t('dropdownPreview.openMenu') }}
					</Button>
				</template>

				<template #default>
					<div class="p-1">
						<Button class="w-full justify-start" size="sm" variant="ghost">
							{{ $t('dropdownPreview.profile') }}
						</Button>
						<Button class="w-full justify-start" size="sm" variant="ghost">
							{{ $t('dropdownPreview.settings') }}
						</Button>
						<Button
							class="w-full justify-start"
							size="sm"
							variant="ghost"
							color="destructive"
						>
							{{ $t('dropdownPreview.deleteWorkspace', { name: 'Alixan UI' }) }}
						</Button>
						<Button
							class="mt-1 w-full"
							size="sm"
							variant="ghost"
							@click="isOpen = false"
						>
							{{ $t('actions.close') }}
						</Button>
					</div>
				</template>
			</DropdownMenu>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="dropdownProps" />
	</section>
</template>
