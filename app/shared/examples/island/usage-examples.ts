const setup = `<script setup lang="ts">
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
  subtitle="island.demoSubtitle"
  description="island.demoDesc"
  header-position="inside"
  content-class="p-4 rounded-4xl"
>
${content}
</Island>`,
	outside: `${setup}<Island
  title="island.demoTitle"
  subtitle="island.demoSubtitle"
  description="island.demoDesc"
  header-position="outside"
  content-class="p-4 rounded-4xl"
>
${content}
</Island>`,
};
