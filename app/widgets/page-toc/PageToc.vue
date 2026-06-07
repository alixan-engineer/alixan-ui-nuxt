<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import type { IPageToc } from '~/interfaces/page-toc/page-toc.interface';
import { cn } from '~/utils/cn';

interface Props {
	links: IPageToc[];
}

const props = defineProps<Props>();

onMounted(() => {
	observeSections();
});

onBeforeUnmount(() => {
	disconnectObserver();
});

const activeHref = ref(props.links[0]?.href || '');
let observer: IntersectionObserver | null = null;

const observeSections = async () => {
	await nextTick();
	const root = document.getElementById('root');
	const sectionElements = props.links
		.map(link => document.getElementById(link.href.slice(1)))
		.filter((element): element is HTMLElement => Boolean(element));
	
		if (!sectionElements.length) return;

	observer = new IntersectionObserver(
		entries => {
			const visibleIds = entries
				.filter(entry => entry.isIntersecting)
				.map(entry => `#${entry.target.id}`);
			
				if (!visibleIds.length) return;
			
			const lastVisibleLink = props.links
				.filter(link => visibleIds.includes(link.href))
				.at(-1);

			if (lastVisibleLink) activeHref.value = lastVisibleLink.href;
		},
		{
			root,
			rootMargin: '-96px 0px -30% 0px',
			threshold: 0,
		},
	);
	sectionElements.forEach(element => observer?.observe(element));
};

const disconnectObserver = (): void => {
	observer?.disconnect();
	observer = null;
};

const scrollToLink = (href: string): void => {
	const section = document.getElementById(href.slice(1));
	activeHref.value = href;
	if (!section) return;
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
					{{ $t(link.label) }}
				</a>
			</nav>
		</div>
	</aside>
</template>
