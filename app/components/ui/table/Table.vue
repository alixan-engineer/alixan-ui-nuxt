<script setup lang="ts">
interface Props {
	columns: TableColumn[];
	rows: any[];
}

interface TableColumn {
	label: string;
	getValue: (row: any, rowIndex: number) => any;
}

defineProps<Props>();
</script>

<template>
	<div class="overflow-x-auto rounded-xl border">
		<table class="w-full text-left text-md">
			<thead class="border-b bg-secondary text-muted-foreground">
				<tr>
					<th v-for="(c, i) in columns" :key="i" class="px-4 py-3 font-medium">
						{{ c.label }}
					</th>
				</tr>
			</thead>
			<tbody class="divide-y">
				<tr v-for="(r, i) in rows" :key="i">
					<td v-for="(c, ci) in columns" :key="ci" class="px-4 py-3">
						{{ c.getValue(r, i) }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
