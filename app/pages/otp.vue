<script setup lang="ts">
import { otpEvents, otpProps } from '~/shared/examples/otp/api-reference';
import { otpPageToc } from '~/shared/examples/otp/page-toc';
import { examples } from '~/shared/examples/otp/usage-examples';
import {
	eventTableColumns,
	propsTableColumns,
} from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.otp.metaTitle',
	description: 'componentDocs.otp.description',
});

const toast = useToast();
const { setToc } = usePageToc();

onMounted(() => setToc(otpPageToc));

const otpValue = ref<string>('');
const lengthValue = ref<string>('');
const handleSubmit = (value: string): void => {
	toast.open(`OTP submitted: ${value}`, 'success');
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.otp') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.otp.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="otp" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
		<ExampleBlock :code="examples.usage">
			<div class="space-y-3">
				<OtpInput v-model="otpValue" :length="6" @submit="handleSubmit" />
				<p class="text-center text-sm text-muted-foreground">
					Value: {{ otpValue || '-' }}
				</p>
			</div>
		</ExampleBlock>
	</section>

	<section id="length" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.length') }}</h2>
		<ExampleBlock :code="examples.length">
			<div class="grid gap-4">
				<OtpInput v-model="lengthValue" :length="4" />
				<OtpInput :length="8" />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="otpProps" />
		<Table :columns="eventTableColumns" :rows="otpEvents" />
	</section>
</template>
