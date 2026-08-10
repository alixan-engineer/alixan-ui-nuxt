const setup = `<script setup lang="ts">
import Island from '@/components/ui/island/Island.vue'
import List from '@/components/ui/list/List.vue'
import ListTile from '@/components/ui/list/ListTile.vue'

const contacts = [
  { title: 'list.contacts.aruzhan', description: 'list.contacts.aruzhanPhone', image: '/examples/contact-avatar.webp' },
  { title: 'list.contacts.daniyar', description: 'list.contacts.daniyarPhone', image: '/examples/contact-daniyar.webp' },
  { title: 'list.contacts.aidana', description: 'list.contacts.aidanaPhone', image: '/examples/contact-aidana.webp' },
];
<\/script>

`;

const content = `  <List divider="inset">
    <ListTile
      v-for="contact in contacts"
      :key="contact.title"
      :title="contact.title"
      :description="contact.description"
    >
      <template #leading>
        <img :src="contact.image" alt="" loading="lazy" class="size-11 rounded-full object-cover" />
      </template>
    </ListTile>
  </List>`;

export const examples = {
	usage: `${setup}<Island
  title="island.demoTitle"
  description="island.demoDesc"
  header-position="inside"
>
${content}
</Island>`,
	outside: `${setup}<Island
  title="island.demoTitle"
  description="island.demoDesc"
  header-position="outside"
>
${content}
</Island>`,
};
