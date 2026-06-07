type Translate = (key: string) => string;

export const stylesPageToc = (t: Translate) => [
	{ label: t('stylesPage.tailwind.title'), href: '#tailwind-css' },
	{ label: t('stylesPage.textSize.title'), href: '#text-size' },
	{ label: t('stylesPage.island.title'), href: '#island' },
	{ label: t('stylesPage.backdrop.title'), href: '#backdrop' },
] as const;
