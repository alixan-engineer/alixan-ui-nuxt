const contactsCode = `const contacts = [
  { title: 'list.contacts.aruzhan', description: 'list.contacts.aruzhanPhone', image: '/examples/contact-avatar.webp' },
  { title: 'list.contacts.daniyar', description: 'list.contacts.daniyarPhone', image: '/examples/contact-daniyar.webp' },
  { title: 'list.contacts.aidana', description: 'list.contacts.aidanaPhone', image: '/examples/contact-aidana.webp' },
];`;

const clickSetup = `<script setup lang="ts">
import { ChevronRight } from '@lucide/vue';

${contactsCode}

const toast = useToast();
const openContact = () => toast.open('list.profileOpened', 'info');
<\/script>

`;

const borderSetup = `<script setup lang="ts">
${contactsCode}
<\/script>

`;

const actionsSetup = `<script setup lang="ts">
import { Pencil, Trash2 } from '@lucide/vue';

${contactsCode}

const toast = useToast();
const editProfile = () => toast.open('list.editStarted', 'info');
const deleteProfile = () => toast.open('list.deleteStarted', 'warning');
<\/script>

`;

const contactLeading = `    <template #leading>
      <img :src="contact.image" alt="" class="size-12 rounded-full object-cover" />
    </template>`;

export const examples = {
	inset: `${clickSetup}<List divider="inset">
  <ListTile
    v-for="contact in contacts"
    :key="contact.title"
    :title="contact.title"
    :description="contact.description"
    @click="openContact"
  >
${contactLeading}
    <template #trailing><ChevronRight class="size-5" /></template>
  </ListTile>
</List>`,
	borderInset: `${borderSetup}<List divider="inset">
  <ListTile
    v-for="contact in contacts"
    :key="contact.title"
    :title="contact.title"
    :description="contact.description"
  >
${contactLeading}
  </ListTile>
</List>`,
	block: `${borderSetup}<List divider="block">
  <ListTile
    v-for="contact in contacts"
    :key="contact.title"
    :title="contact.title"
    :description="contact.description"
  >
${contactLeading}
  </ListTile>
</List>`,
	actions: `${actionsSetup}<List>
  <ListTile
    v-for="contact in contacts"
    :key="contact.title"
    :title="contact.title"
    :description="contact.description"
  >
${contactLeading}
    <template #trailing>
      <IconButton :tooltip="$t('list.edit')" variant="outlined" size="sm" @click="editProfile">
        <Pencil />
      </IconButton>
      <IconButton :tooltip="$t('list.delete')" variant="outlined" color="destructive" size="sm" @click="deleteProfile">
        <Trash2 />
      </IconButton>
    </template>
  </ListTile>
</List>`,
};
