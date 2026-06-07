export const tableUsageCode = `<script setup lang="ts">
const columns = [
  { label: 'Name', value: row => row.name },
  { label: 'Type', value: row => row.type },
  {
    label: 'Status',
    value: row => row.status.toUpperCase(),
  },
]

const rows = [
  { id: 1, name: 'Button', type: 'Component', status: 'Ready' },
  { id: 2, name: 'Input', type: 'Form', status: 'Ready' },
  { id: 3, name: 'Toast', type: 'Overlay', status: 'Beta' },
]

<\/script>

<template>
  <Table
    :columns="columns"
    :rows="rows"
  />
</template>`;

export const tableUsageColumns = [
	{ label: 'Name', value: (row: Record<string, unknown>) => row.name },
	{ label: 'Type', value: (row: Record<string, unknown>) => row.type },
	{
		label: 'Status',
		value: (row: Record<string, unknown>) =>
			String(row.status).toUpperCase(),
	},
];

export const tableUsageRows = [
	{ id: 1, name: 'Button', type: 'Component', status: 'Ready' },
	{ id: 2, name: 'Input', type: 'Form', status: 'Ready' },
	{ id: 3, name: 'Toast', type: 'Overlay', status: 'Beta' },
];
