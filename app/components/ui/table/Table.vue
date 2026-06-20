<script setup lang="ts">
type TableRow = Record<string, unknown>;
type TableCellValue = string | number | boolean | null | undefined;
type TableValueGetter = (row: TableRow, i: number) => TableCellValue;

interface Props {
	columns: {
		label: string;
		getValue?: TableValueGetter;
		value?: TableValueGetter;
	}[];
	rows: TableRow[];
}

defineProps<Props>();

const getCellValue = (
	column: Props['columns'][number],
	row: TableRow,
	rowIndex: number,
): TableCellValue => {
	const getter = column.getValue ?? column.value;
	return getter?.(row, rowIndex) ?? '';
};
</script>

<template>
	<div class="overflow-x-auto rounded-xl border">
		<table class="w-full text-left text-md">
			<thead class="border-b bg-secondary text-muted-foreground">
				<tr>
					<th
						v-for="(column, columnIndex) in columns"
						:key="columnIndex"
						class="px-4 py-3 font-medium"
					>
						{{ $t(column.label) }}
					</th>
				</tr>
			</thead>
			<tbody class="divide-y">
				<tr v-for="(row, rowIndex) in rows" :key="rowIndex">
					<td
						v-for="(column, columnIndex) in columns"
						:key="columnIndex"
						class="px-4 py-3"
					>
						{{ $t(String(getCellValue(column, row, rowIndex))) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
