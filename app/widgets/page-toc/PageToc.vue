<script setup lang="ts">
import {
	computed,
	nextTick,
	onBeforeUnmount,
	onMounted,
	ref,
	watch,
} from 'vue';
import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';
import { cn } from '~/utils/cn';

interface PageTocProps {
	links: readonly IPageTocLink[];
}

const props = defineProps<PageTocProps>();

const route = useRoute();

const activeHash = ref(route.hash || props.links[0]?.href || '');
let observer: IntersectionObserver | null = null;

const activeHref = computed(
	() => activeHash.value || props.links[0]?.href || '',
);

const syncActiveHash = (): void => {
	activeHash.value = window.location.hash || props.links[0]?.href || '';
};

const disconnectObserver = (): void => {
	observer?.disconnect();
	observer = null;
};

const observeSections = async (): Promise<void> => {
	disconnectObserver();
	await nextTick();

	const root = document.getElementById('root');
	const sectionElements = props.links
		.map(link => document.getElementById(link.href.slice(1)))
		.filter((element): element is HTMLElement => Boolean(element));

	if (!sectionElements.length) {
		return;
	}

	observer = new IntersectionObserver(
		entries => {
			const visibleEntries = entries
				.filter(entry => entry.isIntersecting)
				.sort(
					(firstEntry, secondEntry) =>
						firstEntry.boundingClientRect.top -
						secondEntry.boundingClientRect.top,
				);
			const firstVisibleEntry = visibleEntries[0];

			if (!firstVisibleEntry?.target.id) {
				return;
			}

			activeHash.value = `#${firstVisibleEntry.target.id}`;
		},
		{
			root,
			rootMargin: '-96px 0px -65% 0px',
			threshold: [0, 1],
		},
	);

	sectionElements.forEach(element => observer?.observe(element));
};

watch(
	() => [props.links, route.hash, route.path],
	() => {
		activeHash.value = route.hash || props.links[0]?.href || '';
		observeSections();
	},
	{ deep: true },
);

onMounted(() => {
	syncActiveHash();
	observeSections();
	window.addEventListener('hashchange', syncActiveHash);
});

onBeforeUnmount(() => {
	disconnectObserver();
	window.removeEventListener('hashchange', syncActiveHash);
});

const scrollToLink = (href: string): void => {
	const section = document.getElementById(href.slice(1));

	activeHash.value = href;

	if (!section) {
		return;
	}

	section.scrollIntoView({ behavior: 'smooth', block: 'start' });
	window.history.replaceState(null, '', href);
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
					@click.prevent="scrollToLink(link.href)"
					:class="
						cn(
							'block hover:text-foreground text-md',
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
