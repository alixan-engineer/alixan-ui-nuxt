<script setup lang="ts">
import { CheckCircle } from '@lucide/vue';
import successIcon from '~/assets/icons/success.svg';
import AlertDialog from '~/components/ui/alert-dialog/AlertDialog.vue';
import { alertDialogProps } from '~/shared/examples/alert-dialog/api-reference';
import { alertDialogPageToc } from '~/shared/examples/alert-dialog/page-toc';
import {
	errorCode,
	iconCode,
	imageCode,
	successCode,
} from '~/shared/examples/alert-dialog/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.alertDialog.metaTitle',
	description: 'componentDocs.alertDialog.description',
});

const dialog = useDialog();
const { setToc } = usePageToc();

onMounted(() => setToc(alertDialogPageToc));

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
			description:
				'Use the native img tag when the dialog needs a static image.',
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
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
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
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="alertDialogProps" />
	</section>
</template>
