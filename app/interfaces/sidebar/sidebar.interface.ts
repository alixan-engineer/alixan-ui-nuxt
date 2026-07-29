export interface IMenuItem {
	labelKey: string;
	to: string;
	new?: boolean;
}

export interface IMenuSection {
	labelKey: string;
	items: IMenuItem[];
}
