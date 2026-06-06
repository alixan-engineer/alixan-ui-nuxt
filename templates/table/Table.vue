<script setup lang="ts">
interface TableColumn {
	key: string;
	label: string;
	cellClass?: string;
	headerClass?: string;
}

type TableRow = Record<string, unknown>;

const props = withDefaults(
	defineProps<{
		columns: TableColumn[];
		rows: TableRow[];
		getValue?: (
			row: TableRow,
			column: TableColumn,
			rowIndex: number,
		) => unknown;
		rowKey?: (row: TableRow, rowIndex: number) => string | number;
		minWidth?: string;
	}>(),
	{
		getValue: undefined,
		rowKey: undefined,
		minWidth: undefined,
	},
);

const getRowKey = (row: TableRow, rowIndex: number): string | number => {
	if (props.rowKey) {
		return props.rowKey(row, rowIndex);
	}

	return typeof row.name === 'string' || typeof row.name === 'number'
		? row.name
		: rowIndex;
};

const getCellValue = (
	row: TableRow,
	column: TableColumn,
	rowIndex: number,
): unknown => {
	if (props.getValue) {
		return props.getValue(row, column, rowIndex);
	}

	return row[column.key];
};
</script>

<template>
	<div class="overflow-x-auto rounded-xl border">
		<table class="w-full text-left text-sm" :class="minWidth">
			<thead class="border-b bg-secondary text-muted-foreground">
				<tr>
					<th
						v-for="column in columns"
						:key="column.key"
						class="px-4 py-3 font-medium"
						:class="column.headerClass"
					>
						{{ column.label }}
					</th>
				</tr>
			</thead>
			<tbody class="divide-y">
				<tr v-for="(row, rowIndex) in rows" :key="getRowKey(row, rowIndex)">
					<td
						v-for="(column, columnIndex) in columns"
						:key="column.key"
						class="px-4 py-3"
						:class="
							column.cellClass ??
							(columnIndex === 0 ? 'font-medium' : 'text-muted-foreground')
						"
					>
						{{ getCellValue(row, column, rowIndex) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
