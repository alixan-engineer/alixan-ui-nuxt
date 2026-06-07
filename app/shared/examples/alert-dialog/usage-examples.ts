export const errorCode = `<script setup lang="ts">
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

const dialog = useDialog()

const openAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'Action unavailable',
      description: 'This feature is not available yet. Try again later.',
      buttonLabel: 'Got it',
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
  <Button @click="openAlert">Open alert</Button>
</template>`;
export const successCode = `<script setup lang="ts">
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue'

const dialog = useDialog()

const openSuccessAlert = () => {
  dialog.open(AlertDialog, {
    width: '360px',
    height: '280px',
    data: {
      title: 'Project saved',
      description: 'Your changes were saved successfully.',
      buttonLabel: 'Done',
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
  <Button color="primary" @click="openSuccessAlert">Open success</Button>
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
      title: 'Image media',
      description: 'Use the native img tag when the dialog needs a static image.',
      buttonLabel: 'Close',
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
  <Button @click="openImageAlert">Open image</Button>
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
      title: 'Icon media',
      description: 'Pass an imported Vue component when you need an icon.',
      buttonLabel: 'Done',
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
  <Button color="primary" @click="openIconAlert">Open icon</Button>
</template>`;
