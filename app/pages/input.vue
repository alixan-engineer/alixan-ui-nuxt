<script setup lang="ts">
import { Eye, EyeOff, Lock, Mail } from '@lucide/vue';

useSeoMeta({
	title: 'Input - Alixan UI',
	ogTitle: 'Input - Alixan UI',
	twitterTitle: 'Input - Alixan UI',
});

const tocLinks = [
	{ label: 'Installation', href: '#installation' },
	{ label: 'Usage', href: '#usage' },
	{ label: 'State', href: '#state' },
	{ label: 'Validation', href: '#validation' },
	{ label: 'Length', href: '#length' },
	{ label: 'With Icon', href: '#with-icon' },
	{ label: 'Variants', href: '#variants' },
	{ label: 'Email', href: '#variant-email', child: true },
	{ label: 'Password', href: '#variant-password', child: true },
	{ label: 'Phone', href: '#variant-phone', child: true },
	{ label: 'Username', href: '#variant-username', child: true },
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
const requiredValue = ref('');
const emailExampleValue = ref('');
const passwordExampleValue = ref('');
const lengthExampleValue = ref('');
const phoneValue = ref('');
const usernameValue = ref('');

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
		name: 'autofocus',
		type: 'boolean',
		default: 'false',
		description: 'Focuses the input on mount.',
	},
	{
		name: 'required',
		type: 'boolean',
		default: 'false',
		description: 'Shows "Заполните поле" after blur when the value is empty.',
	},
	{
		name: 'min',
		type: 'number',
		default: '-',
		description: 'Minimum text length validation shown after blur.',
	},
	{
		name: 'max',
		type: 'number',
		default: '-',
		description: 'Maximum text length validation shown after blur.',
	},
	{
		name: 'mask',
		type: 'string',
		default: '-',
		description:
			'Digit mask where # is a digit. When mask is set, the floating label is hidden.',
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
	{
		name: 'hasClearButton',
		type: 'boolean',
		default: 'true',
		description:
			'Shows a clear button when the input has a value and no trailing slot.',
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
	requiredExample: `<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <Input v-model="value" label="Username" required :min="3" :max="20" />
</template>`,
	emailExample: `<script setup lang="ts">
const email = ref('')
<\/script>

<template>
  <EmailInput v-model="email" required />
</template>`,
	passwordExample: `<script setup lang="ts">
const password = ref('')
<\/script>

<template>
  <PasswordInput
    v-model="password"
    required
    :min="8"
    :max="32"
  />
</template>`,
	lengthExample: `<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <Input v-model="value" label="Code" :min="6" :max="12" hint="6-12 characters" />
</template>`,
	phoneExample: `<script setup lang="ts">
const phone = ref('')
<\/script>

<template>
  <PhoneInput
    v-model="phone"
    country-code="+7"
    placeholder="777 777 77 77"
  />
</template>`,
	usernameExample: `<script setup lang="ts">
const username = ref('')
<\/script>

<template>
  <UsernameInput v-model="username" />
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
		<InstallCommandBlock component="input" />
		<p class="text-sm leading-7 text-muted-foreground">
			This command installs only the base <code>Input</code> component with
			built-in validation props.
		</p>
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

	<section id="validation" class="space-y-4">
		<h2 class="text-2xl font-semibold">Validation</h2>
		<ExampleBlock :code="examples.requiredExample">
			<div class="w-full max-w-sm">
				<Input
					v-model="requiredValue"
					label="Username"
					required
					:min="3"
					:max="20"
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="length" class="space-y-4">
		<h2 class="text-2xl font-semibold">Length</h2>
		<ExampleBlock :code="examples.lengthExample">
			<div class="w-full max-w-sm">
				<Input
					v-model="lengthExampleValue"
					label="Code"
					:min="6"
					:max="12"
					hint="6-12 characters"
				/>
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

	<section id="variants" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">Variants</h2>
			<p class="text-muted-foreground leading-7">
				Install focused wrappers when you want a dedicated component for a
				specific input pattern.
			</p>
		</div>

		<div class="grid min-w-0 gap-5">
			<div id="variant-email" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-3">
					<h3 class="text-lg font-semibold">Email Input</h3>
					<InstallCommandBlock component="email-input" />
				</div>
				<ExampleBlock :code="examples.emailExample">
					<div class="w-full max-w-sm mx-auto">
						<EmailInput v-model="emailExampleValue" required />
					</div>
				</ExampleBlock>
			</div>

			<div id="variant-password" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-3">
					<h3 class="text-lg font-semibold">Password Input</h3>
					<InstallCommandBlock component="password-input" />
				</div>
				<ExampleBlock :code="examples.passwordExample">
					<div class="w-full max-w-sm mx-auto">
						<PasswordInput
							v-model="passwordExampleValue"
							required
							:min="8"
							:max="32"
						/>
					</div>
				</ExampleBlock>
			</div>

			<div id="variant-phone" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-2">
					<h3 class="text-lg font-semibold">Phone Input</h3>
					<InstallCommandBlock component="phone-input" />
					<p class="text-muted-foreground leading-7">
						Default country code is <code>+7</code>. The input keeps it as a
						prefix and applies <code>### ### ## ##</code> to the number.
					</p>
				</div>
				<ExampleBlock :code="examples.phoneExample">
					<div class="w-full max-w-sm mx-auto">
						<PhoneInput
							v-model="phoneValue"
							country-code="+7"
							placeholder="777 777 77 77"
						/>
					</div>
				</ExampleBlock>
			</div>

			<div id="variant-username" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-3">
					<h3 class="text-lg font-semibold">Username Input</h3>
					<InstallCommandBlock component="username-input" />
				</div>
				<ExampleBlock :code="examples.usernameExample">
					<div class="w-full max-w-sm mx-auto">
						<UsernameInput v-model="usernameValue" />
					</div>
				</ExampleBlock>
			</div>
		</div>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">API Reference</h2>
		<div class="overflow-x-auto rounded-xl border">
			<table class="w-full min-w-180 text-left text-sm">
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
