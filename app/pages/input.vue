<script setup lang="ts">
import { Eye, EyeOff, Lock, Mail } from '@lucide/vue';
import { inputProps } from '~/shared/examples/input/api-reference';
import { inputPageToc } from '~/shared/examples/input/page-toc';
import { examples } from '~/shared/examples/input/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.input.metaTitle',
	description: 'componentDocs.input.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(inputPageToc));

const usageValue = ref<string>('');
const stateValue = ref<string>('readonly@example.com');
const iconValue = ref<string>('');
const passwordValue = ref<string>('');
const isPasswordVisible = ref<boolean>(false);
const requiredValue = ref<string>('');
const emailExampleValue = ref<string>('');
const passwordExampleValue = ref<string>('');
const lengthExampleValue = ref<string>('');
const phoneValue = ref<string>('');
const usernameValue = ref<string>('');
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $tn('component.input') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $tn('componentDocs.input.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="input" />
		<p class="text-sm leading-7 text-muted-foreground">
			This command installs only the base <code>Input</code> component with
			built-in validation props.
		</p>
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				The label moves when the input is focused or has a value. Use
				<code>v-model</code> for two-way binding.
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-sm">
				<EmailInput v-model="usageValue" />
			</div>
		</ExampleBlock>
	</section>

	<section id="state" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.state') }}</h2>
		<ExampleBlock :code="examples.state">
			<div class="grid w-full max-w-sm gap-3">
				<Input v-model="stateValue" label="Readonly" readonly />
				<Input label="Disabled" disabled />
				<Input label="Required" error="Required field" />
			</div>
		</ExampleBlock>
	</section>

	<section id="validation" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.validation') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.length') }}</h2>
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
		<h2 class="text-2xl font-semibold">{{ $tn('docsSections.withIcon') }}</h2>
		<ExampleBlock :code="examples.withIcon">
			<div class="grid w-full max-w-sm gap-3">
				<EmailInput v-model="iconValue">
					<template #leading>
						<Mail class="size-5" />
					</template>
				</EmailInput>

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
			<h2 class="text-2xl font-semibold">{{ $tn('docsSections.variants') }}</h2>
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
		<h2 class="text-2xl font-semibold">
			{{ $tn('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="inputProps" />
	</section>
</template>
