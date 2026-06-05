export interface IMenuItem {
	labelKey: string;
	to: string;
}

export interface IMenuSection {
	labelKey: string;
	items: IMenuItem[];
}
