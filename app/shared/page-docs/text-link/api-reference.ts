export const textLinkProps = [
	{
		name: 'href',
		type: 'string',
		default: '-',
		description: 'Destination URL for the link.',
	},
	{
		name: 'target',
		type: "'_blank' | '_self' | '_parent' | '_top'",
		default: '-',
		description:
			'Anchor target. When set to _blank, rel is set to noopener noreferrer.',
	},
];
