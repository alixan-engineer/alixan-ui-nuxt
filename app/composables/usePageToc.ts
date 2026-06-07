import type { IPageToc } from '~/interfaces/page-toc/page-toc.interface';

export const usePageToc = () => {
	const links = useState<IPageToc[]>('page-toc-links', () => []);

	const setToc = (value: IPageToc[]) => (links.value = value);

	const clearToc = () => (links.value = []);

	return {
		links,
		setToc,
		clearToc,
	};
};
