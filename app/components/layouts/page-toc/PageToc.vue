<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';
import { cn } from '~/utils/cn';

interface PageTocProps {
	links: readonly IPageTocLink[];
}

const props = defineProps<PageTocProps>();

const route = useRoute();

const activeHash = ref(route.hash || props.links[0]?.href || '');

const activeHref = computed(
	() => activeHash.value || props.links[0]?.href || '',
);

const syncActiveHash = (): void => {
	activeHash.value = window.location.hash || props.links[0]?.href || '';
};

watch(
	() => [props.links, route.hash],
	() => {
		activeHash.value = route.hash || props.links[0]?.href || '';
	},
	{ deep: true },
);

onMounted(() => {
	syncActiveHash();
	window.addEventListener('hashchange', syncActiveHash);
});

onBeforeUnmount(() => {
	window.removeEventListener('hashchange', syncActiveHash);
});

const setActiveLink = (href: string): void => {
	activeHash.value = href;
};
</script>

<template>
	<aside class="hidden lg:block">
		<div
			class="sticky top-14 h-[calc(100svh-3.5rem)] overflow-y-auto px-4 py-6 space-y-3"
		>
			<p class="text-sm font-medium text-muted-foreground">On This Page</p>
			<nav class="space-y-2 text-sm">
				<a
					v-for="link in links"
					:key="link.href"
					:href="link.href"
					@click="setActiveLink(link.href)"
					:class="
						cn(
							'block hover:text-foreground text-sm',
							activeHref === link.href
								? 'font-bold text-foreground'
								: 'font-normal text-muted-foreground/80',
							link.child ? 'pl-4' : '',
						)
					"
				>
					{{ link.label }}
				</a>
			</nav>
		</div>
	</aside>
</template>
