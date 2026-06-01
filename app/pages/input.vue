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
	{ label: 'With Icon', href: '#with-icon' },
	{ label: 'Examples', href: '#examples' },
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
const basicExampleValue = ref('');
const requiredValue = ref('');
const emailExampleValue = ref('');
const passwordExampleValue = ref('');
const lengthExampleValue = ref('');
const phoneValue = ref('');
const isExamplePasswordVisible = ref(false);

const isRequired = (value: string): string =>
	value.trim().length ? '' : 'This field is required';

const minLength = (value: string, length: number): string =>
	value.length >= length ? '' : `Minimum ${length} characters`;

const maxLength = (value: string, length: number): string =>
	value.length <= length ? '' : `Maximum ${length} characters`;

const isEmail = (value: string): string =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email';

const maskKazakhstanPhone = (value: string): string => {
	const digits = value.replace(/\D/g, '').replace(/^8/, '7').slice(0, 11);
	const normalized = digits.startsWith('7') ? digits : `7${digits}`;
	const parts = normalized.slice(1);
	const area = parts.slice(0, 3);
	const first = parts.slice(3, 6);
	const second = parts.slice(6, 8);
	const third = parts.slice(8, 10);

	if (!area) {
		return '+7';
	}

	if (!first) {
		return `+7 (${area}`;
	}

	if (!second) {
		return `+7 (${area}) ${first}`;
	}

	if (!third) {
		return `+7 (${area}) ${first}-${second}`;
	}

	return `+7 (${area}) ${first}-${second}-${third}`;
};

const requiredError = computed(
	() =>
		isRequired(requiredValue.value) ||
		minLength(requiredValue.value, 3) ||
		maxLength(requiredValue.value, 20),
);
const emailError = computed(() =>
	emailExampleValue.value ? isEmail(emailExampleValue.value) : '',
);
const lengthError = computed(
	() =>
		minLength(lengthExampleValue.value, 6) ||
		maxLength(lengthExampleValue.value, 12),
);

const handlePhoneInput = (event: Event): void => {
	const target = event.target as HTMLInputElement;

	phoneValue.value = maskKazakhstanPhone(target.value);
};

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
	basicExample: `<script setup lang="ts">
const name = ref('')
<\/script>

<template>
  <Input v-model="name" label="Project name" />
</template>`,
	requiredExample: `<script setup lang="ts">
const value = ref('')

const isRequired = (value: string) =>
  value.trim().length ? '' : 'This field is required'

const minLength = (value: string, length: number) =>
  value.length >= length ? '' : \`Minimum \${length} characters\`

const maxLength = (value: string, length: number) =>
  value.length <= length ? '' : \`Maximum \${length} characters\`

const error = computed(
  () => isRequired(value.value) || minLength(value.value, 3) || maxLength(value.value, 20),
)
<\/script>

<template>
  <Input v-model="value" label="Username" :error="error" />
</template>`,
	emailExample: `<script setup lang="ts">
const email = ref('')

const isEmail = (value: string) =>
  /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value) ? '' : 'Enter a valid email'

const emailError = computed(() => email.value ? isEmail(email.value) : '')
<\/script>

<template>
  <Input v-model="email" label="Email" type="email" :error="emailError" />
</template>`,
	passwordExample: `<script setup lang="ts">
import { Eye, EyeOff } from '@lucide/vue'

const password = ref('')
const visible = ref(false)
<\/script>

<template>
  <Input
    v-model="password"
    label="Password"
    :type="visible ? 'text' : 'password'"
  >
    <template #trailing>
      <IconButton
        size="sm"
        :label="visible ? 'Hide password' : 'Show password'"
        @click="visible = !visible"
      >
        <EyeOff v-if="visible" />
        <Eye v-else />
      </IconButton>
    </template>
  </Input>
</template>`,
	lengthExample: `<script setup lang="ts">
const value = ref('')

const minLength = (value: string, length: number) =>
  value.length >= length ? '' : \`Minimum \${length} characters\`

const maxLength = (value: string, length: number) =>
  value.length <= length ? '' : \`Maximum \${length} characters\`

const error = computed(() => minLength(value.value, 6) || maxLength(value.value, 12))
<\/script>

<template>
  <Input v-model="value" label="Code" :error="error" hint="6-12 characters" />
</template>`,
	phoneExample: `<script setup lang="ts">
const phone = ref('')

const maskKazakhstanPhone = (value: string): string => {
  const digits = value.replace(/\\D/g, '').replace(/^8/, '7').slice(0, 11)
  const normalized = digits.startsWith('7') ? digits : \`7\${digits}\`
  const parts = normalized.slice(1)
  const area = parts.slice(0, 3)
  const first = parts.slice(3, 6)
  const second = parts.slice(6, 8)
  const third = parts.slice(8, 10)

  if (!area) return '+7'
  if (!first) return \`+7 (\${area}\`
  if (!second) return \`+7 (\${area}) \${first}\`
  if (!third) return \`+7 (\${area}) \${first}-\${second}\`

  return \`+7 (\${area}) \${first}-\${second}-\${third}\`
}

const handlePhoneInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  phone.value = maskKazakhstanPhone(target.value)
}
<\/script>

<template>
  <Input
    v-model="phone"
    label="Phone"
    type="tel"
    placeholder="+7 (___) ___-__-__"
    @input="handlePhoneInput"
  />
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

	<section id="examples" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">Examples</h2>
			<p class="text-muted-foreground leading-7">
				Small validation and mask helpers can live near the form. No extra
				dependency is required.
			</p>
		</div>

		<div class="grid gap-5">
			<ExampleBlock :code="examples.basicExample">
				<div class="w-full max-w-sm">
					<Input v-model="basicExampleValue" label="Project name" />
				</div>
			</ExampleBlock>

			<ExampleBlock :code="examples.requiredExample">
				<div class="w-full max-w-sm">
					<Input
						v-model="requiredValue"
						label="Username"
						:error="requiredError"
					/>
				</div>
			</ExampleBlock>

			<ExampleBlock :code="examples.emailExample">
				<div class="w-full max-w-sm">
					<Input
						v-model="emailExampleValue"
						label="Email"
						type="email"
						:error="emailError"
					/>
				</div>
			</ExampleBlock>

			<ExampleBlock :code="examples.passwordExample">
				<div class="w-full max-w-sm">
					<Input
						v-model="passwordExampleValue"
						label="Password"
						:type="isExamplePasswordVisible ? 'text' : 'password'"
					>
						<template #trailing>
							<IconButton
								variant="ghost"
								color="default"
								size="sm"
								:label="
									isExamplePasswordVisible
										? 'Hide password'
										: 'Show password'
								"
								@click="isExamplePasswordVisible = !isExamplePasswordVisible"
							>
								<EyeOff v-if="isExamplePasswordVisible" />
								<Eye v-else />
							</IconButton>
						</template>
					</Input>
				</div>
			</ExampleBlock>

			<ExampleBlock :code="examples.lengthExample">
				<div class="w-full max-w-sm">
					<Input
						v-model="lengthExampleValue"
						label="Code"
						:error="lengthError"
						hint="6-12 characters"
					/>
				</div>
			</ExampleBlock>

			<ExampleBlock :code="examples.phoneExample">
				<div class="w-full max-w-sm">
					<Input
						v-model="phoneValue"
						label="Phone"
						type="tel"
						placeholder="+7 (___) ___-__-__"
						@input="handlePhoneInput"
					/>
				</div>
			</ExampleBlock>
		</div>
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
