export const tableUsageCode = `<script setup lang="ts">
const columns = [
  { label: 'Name', getValue: row => row.name },
  { label: 'Type', getValue: row => row.type },
  {
    label: 'Status',
    getValue: row => row.status.toUpperCase(),
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
	{ label: 'Name', getValue: (row: Record<string, unknown>) => row.name },
	{ label: 'Type', getValue: (row: Record<string, unknown>) => row.type },
	{
		label: 'Status',
		getValue: (row: Record<string, unknown>) =>
			String(row.status).toUpperCase(),
	},
];

export const tableUsageRows = [
	{ id: 1, name: 'Button', type: 'Component', status: 'Ready' },
	{ id: 2, name: 'Input', type: 'Form', status: 'Ready' },
	{ id: 3, name: 'Toast', type: 'Overlay', status: 'Beta' },
];
