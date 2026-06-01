<script setup lang="ts">
useSeoMeta({
	title: 'Dropdown Menu - Alixan UI',
	ogTitle: 'Dropdown Menu - Alixan UI',
	twitterTitle: 'Dropdown Menu - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

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
		<h1 class="text-4xl font-semibold">Dropdown Menu</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A teleported popover surface with a slot trigger and fully custom
			content.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="dropdown-menu" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
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
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Prop</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in dropdownProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.default }}
						</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
