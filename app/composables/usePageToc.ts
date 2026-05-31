import type { IPageTocLink } from '~/interfaces/page-toc.interface';

export const usePageToc = () => {
	const links = useState<readonly IPageTocLink[]>('page-toc-links', () => []);

	const setToc = (nextLinks: readonly IPageTocLink[]) =>
		(links.value = nextLinks);

	const clearToc = () => (links.value = []);

	return {
		links,
		setToc,
		clearToc,
	};
};
