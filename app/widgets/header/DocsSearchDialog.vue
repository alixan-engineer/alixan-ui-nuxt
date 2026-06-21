<script setup lang="ts">
import type { IMenuItem } from '~/interfaces/sidebar/sidebar.interface';
import { menuSections } from '~/widgets/sidebar/menu';

const props = defineProps<{
	close: () => void;
}>();

const { t } = useI18n();
const localePath = useLocalePath();
const router = useRouter();

const query = ref<string>('');

const pages = computed<IMenuItem[]>(() =>
	menuSections.flatMap(section => section.items),
);

const normalizedQuery = computed(() => query.value.trim().toLocaleLowerCase());

const filteredPages = computed(() => {
	if (!normalizedQuery.value) return pages.value;
	return pages.value.filter(page => {
		const title = t(page.labelKey).toLocaleLowerCase();
		const slug = page.to.replace('/', '').toLocaleLowerCase();
		return (
			title.includes(normalizedQuery.value) ||
			slug.includes(normalizedQuery.value)
		);
	});
});

const openPage = async (to: string): Promise<void> => {
	props.close();
	await router.push(localePath(to));
};
</script>

<template>
	<div class="size-full flex flex-col">
		<div class="p-4">
			<Search
				autofocus
				v-model="query"
				:debounce="0"
				:placeholder="$t('docsSearch.placeholder')"
			/>
		</div>

		<div v-if="filteredPages.length" class="flex-1 overflow-auto p-2">
			<p class="text-sm text-muted-foreground ml-4 mb-1.5">
				{{ $t('docsSearch.hint') }}:
			</p>
			<Button
				v-for="page in filteredPages"
				:key="page.to"
				variant="ghost"
				class="w-full justify-start gap-3"
				@click="openPage(page.to)"
			>
				<template #leading>
					<div
						class="border-muted-foreground aspect-square size-4 rounded-full border border-dashed"
					/>
				</template>
				{{ $t(page.labelKey) }}
			</Button>
		</div>

		<Empty
			v-else
			title="docsSearch.empty"
			description="docsSearch.empty"
			button="docsSearch.reset"
			button-color="secondary"
			@action="query = ''"
		/>
	</div>
</template>
