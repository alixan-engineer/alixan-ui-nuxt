export const code = `<script setup lang="ts">
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue'

const dialog = useDialog()

const openConfirm = () => {
  dialog.open(ConfirmDialog, {
    width: '360px',
    height: '240px',
    data: {
      title: 'Delete item?',
      description: 'This action cannot be undone.',
      cancelLabel: 'Cancel',
      submitLabel: 'Delete',
      submitColor: 'destructive',
      onSubmit: () => console.log('confirmed'),
    },
  })
}
<\/script>

<template>
  <Button color="destructive" @click="openConfirm">
    Delete
  </Button>
</template>`;
