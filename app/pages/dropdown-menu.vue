<script setup lang="ts">
import { dropdownMenuPageToc } from '~/shared/page-docs/dropdown-menu/page-toc';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.dropdownMenu.metaTitle'),
	description: t('componentDocs.dropdownMenu.description'),
});

const tocLinks = dropdownMenuPageToc(t);

usePageTocLinks(tocLinks);

const isOpen = ref(false);
const menuData = {
	workspace: 'Alixan UI',
};

const dropdownProps = [
	{
		name: 'open',
		type: 'boolean',
		default: 'false',
		description: 'Controlled open state via v-model:open.',
	},
	{
		name: 'width',
		type: 'string',
		default: "'320px'",
		description: 'Popover width.',
	},
	{
		name: 'height',
		type: 'string',
		default: "'auto'",
		description: 'Popover max-height.',
	},
	{
		name: 'position',
		type: "'topRight' | 'bottomRight' | 'bottomLeft' | 'topLeft'",
		default: "'bottomLeft'",
		description:
			'Preferred popover placement. It flips automatically when there is not enough space.',
	},
];

const code = `<script setup lang="ts">
const open = ref(false)

const data = {
  workspace: 'Alixan UI',
}
<\/script>

<template>
  <DropdownMenu
    v-model:open="open"
    width="260px"
    height="320px"
    position="bottomLeft"
  >
    <template #trigger>
      <Button variant="outlined">
        Open menu
      </Button>
    </template>

    <template #default>
      <div class="p-1">
        <button class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md hover:bg-secondary">
          Profile
        </button>
        <button class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md hover:bg-secondary">
          Settings
        </button>
        <button class="flex h-9 w-full items-center rounded-xl px-3 text-left text-md text-destructive hover:bg-destructive/10">
          Delete {{ data.workspace }}
        </button>
        <Button class="mt-1 w-full" size="sm" variant="ghost" @click="open = false">
          Close
        </Button>
      </div>
    </template>
  </DropdownMenu>
</template>`;
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
			:columns="[
				{ label: $t('docsTable.prop'), value: row => row.name },
				{ label: $t('docsTable.type'), value: row => row.type },
				{ label: $t('docsTable.default'), value: row => row.default },
				{ label: $t('docsTable.description'), value: row => row.description },
			]"
			:rows="dropdownProps"
		/>
	</section>
</template>
