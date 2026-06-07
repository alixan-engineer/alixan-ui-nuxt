<script setup lang="ts">
interface Props {
	columns: {
		label: string;
		getValue: (row: any, i: number) => any;
	}[];
	rows: any[];
}

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
						{{ column.getValue(row, rowIndex) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
