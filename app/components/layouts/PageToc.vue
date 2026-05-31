<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface TocLink {
	label: string;
	href: `#${string}`;
	child?: boolean;
}

interface PageTocProps {
	links: readonly TocLink[];
}

const props = defineProps<PageTocProps>();

const activeId = ref(props.links[0]?.href.slice(1) ?? '');
let observer: IntersectionObserver | undefined;

const activeHref = computed(() => `#${activeId.value}`);

onMounted(() => {
	if (window.location.hash) {
		activeId.value = window.location.hash.slice(1);
	}

	const sections = props.links
		.map((link) => document.getElementById(link.href.slice(1)))
		.filter((section): section is HTMLElement => Boolean(section));

	if (!sections.length) {
		return;
	}

	const scrollRoot = document.getElementById('root');

	observer = new IntersectionObserver(
		(entries) => {
			const visibleEntry = entries
				.filter((entry) => entry.isIntersecting)
				.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

			if (visibleEntry?.target.id) {
				activeId.value = visibleEntry.target.id;
			}
		},
		{
			root: scrollRoot,
			rootMargin: '-96px 0px -62% 0px',
			threshold: [0, 0.2, 0.6],
		},
	);

	for (const section of sections) {
		observer.observe(section);
	}
});

onBeforeUnmount(() => {
	observer?.disconnect();
});

function setActiveLink(href: string): void {
	activeId.value = href.slice(1);
}
</script>

<template>
	<aside class="hidden lg:block">
		<div class="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-8">
			<p class="mb-4 text-xs font-medium text-muted-foreground">On This Page</p>

			<nav class="space-y-2 text-sm">
				<a
					v-for="link in links"
					:key="link.href"
					:href="link.href"
					@click="setActiveLink(link.href)"
					class="block transition-colors hover:text-foreground"
					:class="[
						activeHref === link.href
							? 'font-medium text-foreground'
							: 'text-muted-foreground',
						link.child ? 'pl-4' : '',
					]"
				>
					{{ link.label }}
				</a>
			</nav>
		</div>
	</aside>
</template>
