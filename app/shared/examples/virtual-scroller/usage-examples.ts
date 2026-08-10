export const products = Array.from({ length: 1000 }, (_, index) => ({
	id: index + 1,
	name: `Product ${index + 1}`,
	price: 990 + index * 10,
}));

export const usageCode = `<script setup lang="ts">
import VirtualScroller from '@/components/ui/virtual-scroller/VirtualScroller.vue'

const products = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: \`Product \${index + 1}\`,
  price: 990 + index * 10,
}))
<\/script>

<template>
  <VirtualScroller
    :items="products"
    item-key="id"
    :row-height="156"
    :min-column-width="180"
    class="h-96"
    grid-class="grid grid-cols-2 gap-3 min-[600px]:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]"
  >
    <template #default="{ item }">
      <article class="h-36 rounded-2xl border bg-card p-4">
        <p class="font-medium">{{ item.name }}</p>
        <p class="mt-2 text-sm text-muted-foreground">
          {{ item.price.toLocaleString() }} ₸
        </p>
      </article>
    </template>
  </VirtualScroller>
</template>`;
