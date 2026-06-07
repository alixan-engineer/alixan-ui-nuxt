<script setup lang="ts">
import { otpPageToc } from '~/shared/page-docs/otp/page-toc';
import { otpProps, otpEvents } from '~/shared/page-docs/otp/api-reference';
import { examples } from '~/shared/page-docs/otp/usage-examples';
import { propsTableColumns, eventTableColumns } from '~/shared/page-docs/table-columns';
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.otp.metaTitle'),
	description: t('componentDocs.otp.description'),
});

const tocLinks = otpPageToc(t);
const apiColumns = propsTableColumns(t);
const eventColumns = eventTableColumns(t);

usePageTocLinks(tocLinks);

const toast = useToast();
const otpValue = ref('');
const lengthValue = ref('');

const handleSubmit = (value: string): void => {
	toast.open(`OTP submitted: ${value}`, 'success');
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.otp') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.otp.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="otp" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.length') }}</h2>
		<ExampleBlock :code="examples.length">
			<div class="grid gap-4">
				<OtpInput v-model="lengthValue" :length="4" />
				<OtpInput :length="8" />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table
			:columns="apiColumns"
			:rows="otpProps"
		/>

		<Table
			:columns="eventColumns"
			:rows="otpEvents"
		/>
	</section>
</template>
