<script setup lang="ts">
const { t } = useI18n();

usePageMeta({
	title: t('componentDocs.otp.metaTitle'),
	description: t('componentDocs.otp.description'),
});

const tocLinks = [
	{ label: t('docsSections.installation'), href: '#installation' },
	{ label: t('docsSections.usage'), href: '#usage' },
	{ label: t('docsSections.length'), href: '#length' },
	{ label: t('docsSections.apiReference'), href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const toast = useToast();
const otpValue = ref('');
const lengthValue = ref('');

const otpProps = [
	{
		name: 'modelValue',
		type: 'string',
		default: "''",
		description: 'OTP value used by v-model.',
	},
	{
		name: 'length',
		type: '4 | 5 | 6 | 7 | 8',
		default: '6',
		description: 'Number of OTP digits. Values are clamped between 4 and 8.',
	},
];

const otpEvents = [
	{
		name: 'change',
		type: '(value: string) => void',
		description: 'Emitted on every OTP value change.',
	},
	{
		name: 'submit',
		type: '(value: string) => void',
		description: 'Emitted when the OTP value reaches the selected length.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const code = ref('')

const verify = (value: string) => {
  console.log('submit', value)
}
<\/script>

<template>
  <OtpInput v-model="code" :length="6" @submit="verify" />
</template>`,
	length: `<template>
  <div class="grid gap-4">
    <OtpInput :length="4" />
    <OtpInput :length="8" />
  </div>
</template>`,
};

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
			:columns="[
				{ label: $t('docsTable.prop'), getValue: row => row.name },
				{ label: $t('docsTable.type'), getValue: row => row.type },
				{ label: $t('docsTable.default'), getValue: row => row.default },
				{
					label: $t('docsTable.description'),
					getValue: row => row.description,
				},
			]"
			:rows="otpProps"
		/>

		<Table
			:columns="[
				{ label: $t('docsTable.event'), getValue: row => `@${row.name}` },
				{ label: $t('docsTable.type'), getValue: row => row.type },
				{
					label: $t('docsTable.description'),
					getValue: row => row.description,
				},
			]"
			:rows="otpEvents"
		/>
	</section>
</template>
