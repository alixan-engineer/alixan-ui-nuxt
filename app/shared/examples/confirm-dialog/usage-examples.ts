export const code = `<script setup lang="ts">
import ConfirmDialog from '~/components/ui/confirm-dialog/ConfirmDialog.vue'

const dialog = useDialog()

const openConfirm = () => {
  dialog.open(ConfirmDialog, {
    width: '360px',
    height: '240px',
    data: {
      title: 'confirmDialogPreview.title',
      description: 'confirmDialogPreview.description',
      cancelLabel: 'actions.cancel',
      submitLabel: 'confirmDialogPreview.delete',
      submitColor: 'destructive',
      onSubmit: () => console.log('confirmed'),
    },
  })
}
<\/script>

<template>
  <Button color="destructive" @click="openConfirm">
    {{ $t('confirmDialogPreview.delete') }}
  </Button>
</template>`;
