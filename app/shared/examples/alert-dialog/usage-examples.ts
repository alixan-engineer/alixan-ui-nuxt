export const errorCode = `<script setup lang="ts">
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

const dialog = useDialog()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'alertDialogPreview.actionUnavailable',
      description: 'alertDialogPreview.featureUnavailable',
      buttonLabel: 'alertDialogPreview.gotIt',
      buttonColor: 'destructive',
      mediaComponent: 'Lottie',
      mediaProps: {
        name: 'error',
        loop: false,
        width: '80px',
        height: '80px',
      },
    },
  })
}
<\/script>

<template>
  <Button @click="openAlert">
    {{ $t('alertDialogPreview.openAlert') }}
  </Button>
</template>`;
export const successCode = `<script setup lang="ts">
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

const dialog = useDialog()

const openSuccessAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'alertDialogPreview.projectSaved',
      description: 'alertDialogPreview.changesSaved',
      buttonLabel: 'alertDialogPreview.done',
      buttonColor: 'primary',
      mediaComponent: 'Lottie',
      mediaProps: {
        name: 'success',
        loop: false,
        width: '80px',
        height: '80px',
      },
    },
  })
}
<\/script>

<template>
  <Button color="primary" @click="openSuccessAlert">
    {{ $t('alertDialogPreview.openSuccess') }}
  </Button>
</template>`;
export const imageCode = `<script setup lang="ts">
import successIcon from '~/assets/icons/success.svg'

import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

const dialog = useDialog()

const openImageAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'alertDialogPreview.imageMedia',
      description: 'alertDialogPreview.imageMediaDescription',
      buttonLabel: 'actions.close',
      mediaComponent: 'img',
      mediaProps: {
        src: successIcon,
        alt: '',
        class: 'size-12',
      },
    },
  })
}
<\/script>

<template>
  <Button @click="openImageAlert">
    {{ $t('alertDialogPreview.openImage') }}
  </Button>
</template>`;
export const iconCode = `<script setup lang="ts">
import { CheckCircle } from '@lucide/vue'

import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

const dialog = useDialog()

const openIconAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'alertDialogPreview.iconMedia',
      description: 'alertDialogPreview.iconMediaDescription',
      buttonLabel: 'alertDialogPreview.done',
      buttonColor: 'primary',
      mediaComponent: CheckCircle,
      mediaProps: {
        class: 'size-10',
      },
    },
  })
}
<\/script>

<template>
  <Button color="primary" @click="openIconAlert">
    {{ $t('alertDialogPreview.openIcon') }}
  </Button>
</template>`;
