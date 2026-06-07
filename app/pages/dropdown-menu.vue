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
		<h1 class="text-4xl font-semibold">{{ $tn('component.dropdownMenu') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.dropdownMenu.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="dropdown-menu" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
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
							Delete Alixan UI
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
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="dropdownProps" />
	</section>
</template>
