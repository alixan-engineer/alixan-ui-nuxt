<script setup lang="ts">
import { dropdownMenuPageToc } from '~/shared/page-docs/dropdown-menu/page-toc';
import { dropdownProps } from '~/shared/page-docs/dropdown-menu/api-reference';
import { code } from '~/shared/page-docs/dropdown-menu/usage-examples';
import { propsTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.dropdownMenu.metaTitle'),
	description: t('componentDocs.dropdownMenu.description'),
});

const tocLinks = dropdownMenuPageToc(t);
const apiColumns = propsTableColumns(t);

usePageTocLinks(tocLinks);

const isOpen = ref(false);
const menuData = {
	workspace: 'Alixan UI',
};
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
					<Button variant="outlined">Open menu</Button>
				</template>

				<template #default>
					<div class="p-1">
						<button
							class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md hover:bg-secondary"
						>
							Profile
						</button>
						<button
							class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md hover:bg-secondary"
						>
							Settings
						</button>
						<button
							class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md text-destructive hover:bg-destructive/10"
						>
							Delete {{ menuData.workspace }}
						</button>
						<Button
							class="mt-1 w-full"
							size="sm"
							variant="ghost"
							@click="isOpen = false"
						>
							Close
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
		<Table
			:columns="apiColumns"
			:rows="dropdownProps"
		/>
	</section>
</template>
