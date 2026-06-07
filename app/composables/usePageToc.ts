import type { IPageTocLink } from '~/interfaces/page-toc/page-toc.interface';

export const usePageToc = () => {
	const links = useState<IPageTocLink[]>('page-toc-links', () => []);

	const setToc = (value: IPageTocLink[]) => (links.value = value);

	const clearToc = () => (links.value = []);

	return {
		links,
		setToc,
		clearToc,
	};
};
