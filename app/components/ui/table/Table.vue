<script setup lang="ts">
interface Props<T> {
	columns: TableColumnT[];
	rows: T[];
}

interface TableColumnT {
	label: string;
	value: (row: T, rowIndex: number) => unknown;
}

defineProps<Props<T>>();
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
