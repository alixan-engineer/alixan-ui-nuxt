<script setup lang="ts">
import { CheckCircle } from '@lucide/vue';

import successIcon from '~/assets/icons/success.svg';
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';

const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.alertDialog.metaTitle'),
	description: t('componentDocs.alertDialog.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const dialog = useDialog();

const alertDialogProps = [
	{
		name: 'data.title',
		type: 'string',
		default: '-',
		description: 'Dialog title.',
	},
	{
		name: 'data.description',
		type: 'string',
		default: '-',
		description: 'Short explanation shown under the title.',
	},
	{
		name: 'data.buttonLabel',
		type: 'string',
		default: "'OK'",
		description: 'Primary action label.',
	},
	{
		name: 'data.buttonColor',
		type: "'default' | 'primary' | 'secondary' | 'destructive'",
		default: "'primary'",
		description: 'Primary action button color.',
	},
	{
		name: 'data.mediaComponent',
		type: 'Component | string',
		default: '-',
		description: 'Optional media component, for example Lottie, img, or an icon component.',
	},
	{
		name: 'data.mediaProps',
		type: 'Record<string, unknown>',
		default: '-',
		description: 'Props passed to the media component.',
	},
	{
		name: 'data.onAction',
		type: '() => void',
		default: '-',
		description: 'Callback called before closing the dialog.',
	},
];

const errorCode = `<script setup lang="ts">
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

const successCode = `<script setup lang="ts">
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

const imageCode = `<script setup lang="ts">
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

const iconCode = `<script setup lang="ts">
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

const openAlert = (): void => {
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
	});
};

const openSuccessAlert = (): void => {
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
	});
};

const openImageAlert = (): void => {
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
	});
};

const openIconAlert = (): void => {
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
	});
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.alertDialog') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.alertDialog.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.installation') }}</h2>
		<InstallCommandBlock component="alert-dialog" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>

		<ExampleBlock :code="errorCode">
			<Button color="destructive" @click="openAlert">Open error</Button>
		</ExampleBlock>

		<ExampleBlock :code="successCode">
			<Button color="primary" @click="openSuccessAlert">Open success</Button>
		</ExampleBlock>

		<ExampleBlock :code="imageCode">
			<Button @click="openImageAlert">Open image</Button>
		</ExampleBlock>

		<ExampleBlock :code="iconCode">
			<Button color="primary" @click="openIconAlert">Open icon</Button>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.apiReference') }}</h2>
		<Table
			:columns="[
				{ key: 'name', label: $t('docsTable.prop') },
				{ key: 'type', label: $t('docsTable.type') },
				{ key: 'default', label: $t('docsTable.default') },
				{ key: 'description', label: $t('docsTable.description') },
			]"
			:rows="alertDialogProps"
		/>
	</section>
</template>
