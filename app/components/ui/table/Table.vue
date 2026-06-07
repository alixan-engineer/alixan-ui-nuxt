<script setup lang="ts">
interface Props {
	columns: TableColumn[];
	rows: TableRow[];
}

interface TableColumn {
	label: string;
	value: (row: TableRow, rowIndex: number) => unknown;
}

type TableRow = Record<string, unknown>;

defineProps<Props>();
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
						{{ column.label }}
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
						{{ column.value(row, rowIndex) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
