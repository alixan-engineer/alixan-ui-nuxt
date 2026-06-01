<script setup lang="ts">
useSeoMeta({
	title: 'OTP Input - Alixan UI',
	ogTitle: 'OTP Input - Alixan UI',
	twitterTitle: 'OTP Input - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'Length', href: '#length' },
	{ label: 'API Reference', href: '#api-reference' },
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
		<h1 class="text-4xl font-semibold">OTP Input</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			A small one-time password input inspired by shadcn-vue, simplified for
			Nuxt auto-import and direct output events.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<InstallCommandBlock component="otp" />
	</section>

	<section id="usage" class="space-y-5">
		<h2 class="text-2xl font-semibold">Usage</h2>
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
		<h2 class="text-2xl font-semibold">Length</h2>
		<ExampleBlock :code="examples.length">
			<div class="grid gap-4">
				<OtpInput v-model="lengthValue" :length="4" />
				<OtpInput :length="8" />
			</div>
		</ExampleBlock>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Prop</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Default</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in otpProps" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.default }}
						</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="overflow-hidden rounded-xl border">
			<table class="w-full text-left text-sm">
				<thead class="border-b bg-secondary text-muted-foreground">
					<tr>
						<th class="px-4 py-3 font-medium">Event</th>
						<th class="px-4 py-3 font-medium">Type</th>
						<th class="px-4 py-3 font-medium">Description</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					<tr v-for="item in otpEvents" :key="item.name">
						<td class="px-4 py-3 font-medium">{{ item.name }}</td>
						<td class="px-4 py-3 text-muted-foreground">{{ item.type }}</td>
						<td class="px-4 py-3 text-muted-foreground">
							{{ item.description }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>
