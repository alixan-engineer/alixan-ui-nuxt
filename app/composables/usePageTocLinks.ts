import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';

export const usePageTocLinks = (tocLinks: readonly IPageTocLink[]) => {
	const { setToc, clearToc } = usePageToc();

	onMounted(() => {
		setToc(tocLinks);
	});

	onBeforeUnmount(() => {
		clearToc();
	});
};
