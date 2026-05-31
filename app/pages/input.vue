<script setup lang="ts">
import { Copy, Eye, EyeOff, Lock, Mail } from '@lucide/vue';

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'State', href: '#state' },
	{ label: 'With Icon', href: '#with-icon' },
	{ label: 'API Reference', href: '#api-reference' },
] as const;

const { setToc, clearToc } = usePageToc();

onMounted(() => {
	setToc(tocLinks);
});

onBeforeUnmount(() => {
	clearToc();
});

const usageValue = ref('');
const stateValue = ref('readonly@example.com');
const iconValue = ref('');
const passwordValue = ref('');
const isPasswordVisible = ref(false);

const inputProps = [
	{
		name: 'modelValue',
		type: 'string | number | null',
		default: "''",
		description: 'Input value used by v-model.',
	},
	{
		name: 'id',
		type: 'string',
		default: '-',
		description: 'Custom id. Generated automatically when omitted.',
	},
	{
		name: 'label',
		type: 'string',
		default: '-',
		description: 'Floating label text.',
	},
	{
		name: 'type',
		type: "'text' | 'email' | 'password' | 'tel' | 'url' | 'number'",
		default: "'text'",
		description: 'Native input type.',
	},
	{
		name: 'placeholder',
		type: 'string',
		default: '-',
		description: 'Native placeholder text.',
	},
	{
		name: 'autocomplete',
		type: "'on' | 'off'",
		default: '-',
		description: 'Controls the native browser autocomplete behavior.',
	},
	{
		name: 'hint',
		type: 'string',
		default: '-',
		description: 'Helper text shown below the input.',
	},
	{
		name: 'error',
		type: 'string',
		default: '-',
		description:
			'Error message. Also switches the input into destructive state.',
	},
	{
		name: 'disabled',
		type: 'boolean',
		default: 'false',
		description: 'Disables input interaction.',
	},
	{
		name: 'readonly',
		type: 'boolean',
		default: 'false',
		description: 'Makes the input readable but not editable.',
	},
];

const examples = {
	usage: `<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <Input v-model="value" label="Email" type="email" />
</template>`,
	state: `<script setup lang="ts">
const value = ref('readonly@example.com')
<\/script>

<template>
  <div class="grid w-full gap-3">
    <Input v-model="value" label="Readonly" readonly />
    <Input label="Disabled" disabled />
    <Input label="Email" error="Enter a valid email address" />
 </div>
</template>`,
	withIcon: `<script setup lang="ts">
import { Eye, EyeOff, Lock, Mail } from '@lucide/vue'

const email = ref('')
const password = ref('')
const isPasswordVisible = ref(false)
<\/script>

<template>
  <div class="grid w-full gap-3">
    <Input v-model="email" label="Email" type="email">
      <template #leading>
        <Mail class="size-5" />
      </template>
    </Input>

    <Input
      v-model="password"
      label="Password"
      :type="isPasswordVisible ? 'text' : 'password'"
    >
      <template #leading>
        <Lock class="size-5" />
      </template>
      <template #trailing>
        <IconButton
          variant="ghost"
          color="default"
          size="sm"
          :label="isPasswordVisible ? 'Hide password' : 'Show password'"
          @click="isPasswordVisible = !isPasswordVisible"
        >
          <EyeOff v-if="isPasswordVisible" />
          <Eye v-else />
        </IconButton>
      </template>
    </Input>
  </div>
</template>`,
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">Input</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			Displays a form input with a floating label, clean states and slots for
			leading or trailing icons.
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">Installation</h2>
		<div class="island">
			<div class="px-4 py-3 flex items-center gap-4 border-b text-m">
				<span class="font-medium">npm</span>
				<span class="text-muted-foreground">pnpm</span>
				<span class="text-muted-foreground">yarn</span>
				<span class="text-muted-foreground">bun</span>
				<div class="flex-1" />
				<Copy class="size-5 text-muted-foreground" />
			</div>
			<p class="p-4 text-md">npx alixan-ui-nuxt add input</p>
		</div>
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">Usage</h2>
			<p class="text-muted-foreground leading-7">
				The label moves when the input is focused or has a value. Use
				<code>v-model</code> for two-way binding.
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-sm">
				<Input v-model="usageValue" label="Email" type="email" />
			</div>
		</ExampleBlock>
	</section>

	<section id="state" class="space-y-4">
		<h2 class="text-2xl font-semibold">State</h2>
		<ExampleBlock :code="examples.state">
			<div class="grid w-full max-w-sm gap-3">
				<Input v-model="stateValue" label="Readonly" readonly />
				<Input label="Disabled" disabled />
				<Input label="Email" error="Enter a valid email address" />
			</div>
		</ExampleBlock>
	</section>

	<section id="with-icon" class="space-y-4">
		<h2 class="text-2xl font-semibold">With Icon</h2>
		<ExampleBlock :code="examples.withIcon">
			<div class="grid w-full max-w-sm gap-3">
				<Input v-model="iconValue" label="Email" type="email">
					<template #leading>
						<Mail class="size-5" />
					</template>
				</Input>

				<Input
					v-model="passwordValue"
					label="Password"
					:type="isPasswordVisible ? 'text' : 'password'"
				>
					<template #leading>
						<Lock class="size-5" />
					</template>
					<template #trailing>
						<IconButton
							variant="ghost"
							color="default"
							size="sm"
							:label="isPasswordVisible ? 'Hide password' : 'Show password'"
							@click="isPasswordVisible = !isPasswordVisible"
						>
							<EyeOff v-if="isPasswordVisible" />
							<Eye v-else />
						</IconButton>
					</template>
				</Input>
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
					<tr v-for="item in inputProps" :key="item.name">
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
	</section>
</template>
