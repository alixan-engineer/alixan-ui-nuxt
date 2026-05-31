<script setup lang="ts">
import { Copy } from '@lucide/vue';

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

const items = [
	{ label: 'Profile', value: 'profile' },
	{ label: 'Settings', value: 'settings' },
	{ label: 'Delete', value: 'delete', destructive: true },
];

const selected = ref('No action selected');

function handleSelect(item: { label: string }): void {
	selected.value = item.label;
}

const dropdownProps = [
	{ name: 'items', type: 'DropdownMenuItem[]', default: '[]', description: 'Action items rendered inside the menu.' },
	{ name: 'label', type: 'string', default: "'Options'", description: 'Default trigger label.' },
	{ name: 'align', type: "'left' | 'right' | 'center'", default: "'right'", description: 'Menu alignment relative to trigger.' },
];
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Dropdown Menu</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A teleported action menu that closes safely on outside click.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<div class="island">
			<div class="px-4 py-3 flex items-center gap-4 border-b text-m">
				<span class="font-medium">npm</span>
				<div class="flex-1" />
				<Copy class="size-5 text-muted-foreground" />
			</div>
			<p class="p-4 text-md">npx alixan-ui-nuxt add dropdown-menu</p>
		</div>
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
		<ExampleBlock code="<DropdownMenu :items=&quot;items&quot; @select=&quot;handleSelect&quot; />">
			<div class="space-y-3">
				<DropdownMenu :items="items" @select="handleSelect" />
				<p class="text-sm text-muted-foreground">{{ selected }}</p>
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<tbody class="divide-y">
					<tr v-for="item in dropdownProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.default }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.description }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
