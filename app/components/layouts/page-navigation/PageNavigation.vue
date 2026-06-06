<script setup lang="ts">
import { ArrowLeft, ArrowRight } from '@lucide/vue';
import { computed } from 'vue';
import { menuSections } from '~/components/layouts/sidebar/menu';

const route = useRoute();
const localePath = useLocalePath();
const { t } = useI18n();

const normalizePath = (path: string): string => {
	const normalizedPath = path.split('#')[0]?.replace(/\/$/, '') || '/';

	return normalizedPath || '/';
};

const pages = computed(() =>
	menuSections.flatMap(section =>
		section.items.map(item => {
			const path = localePath(item.to);

			return {
				label: t(item.labelKey),
				path,
				normalizedPath: normalizePath(path),
			};
		}),
	),
);

const currentIndex = computed(() =>
	pages.value.findIndex(
		page => page.normalizedPath === normalizePath(route.path),
	),
);

const previousPage = computed(() =>
	currentIndex.value > 0 ? pages.value[currentIndex.value - 1] : null,
);

const nextPage = computed(() =>
	currentIndex.value >= 0 && currentIndex.value < pages.value.length - 1
		? pages.value[currentIndex.value + 1]
		: null,
);

const showNavigation = computed(
	() => currentIndex.value > 0 && Boolean(previousPage.value || nextPage.value),
);
</script>

<template>
	<nav
		v-if="showNavigation"
		class="pt-8 flex items-center gap-3 border-t"
	>
		<Button
			v-if="previousPage"
			:to="previousPage.path"
			variant="outlined"
			class="flex-1"
		>
			<template #leading>
				<ArrowLeft />
			</template>
			{{ previousPage.label }}
		</Button>
		<Button
			v-if="nextPage"
			:to="nextPage.path"
			variant="filled"
			color="primary"
			class="flex-1"
		>
			{{ nextPage.label }}
			<template #trailing>
				<ArrowRight />
			</template>
		</Button>
	</nav>
</template>
