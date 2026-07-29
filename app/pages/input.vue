<script setup lang="ts">
import { Eye, EyeOff, Lock, Mail } from '@lucide/vue';
import { inputProps, xControlApiRows } from '~/shared/examples/input/api-reference';
import { inputPageToc } from '~/shared/examples/input/page-toc';
import { examples } from '~/shared/examples/input/usage-examples';
import { propsTableColumns } from '~/shared/examples/table-columns';

usePageMeta({
	title: 'componentDocs.input.metaTitle',
	description: 'componentDocs.input.description',
});

const { setToc } = usePageToc();

onMounted(() => setToc(inputPageToc));

const usageControl = useXControl('');
const readonlyControl = useXControl('readonly@example.com');
const disabledControl = useXControl('');
const errorControl = useXControl('');
const iconControl = useXControl('');
const passwordControl = useXControl('');
const isPasswordVisible = ref<boolean>(false);
const validationControl = useXControl('');
const emailControl = useXControl('');
const passwordExampleControl = useXControl('');
const lengthControl = useXControl('');
const phoneControl = useXControl('');
const usernameControl = useXControl('');
const iinControl = useXControl('');

const checkFromParent = (): void => {
	validationControl.validate();
};
</script>

<template>
	<header class="space-y-3">
		<h1 class="text-4xl font-semibold">{{ $t('component.input') }}</h1>
		<p class="max-w-2xl text-lg leading-8 text-muted-foreground">
			{{ $t('componentDocs.input.description') }}
		</p>
	</header>

	<section id="installation" class="space-y-5">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.installation') }}
		</h2>
		<InstallCommandBlock component="input" />
		<p class="text-sm leading-7 text-muted-foreground">
			This command installs only the base <code>Input</code> component with
			built-in validation props.
		</p>
	</section>

	<section id="usage" class="space-y-5">
		<div class="space-y-2">
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.usage') }}</h2>
			<p class="text-muted-foreground leading-7">
				{{ $t('inputValidation.usageDescription') }}
			</p>
		</div>
		<ExampleBlock :code="examples.usage">
			<div class="w-full max-w-sm">
				<Input :control="usageControl" label="Name" />
			</div>
		</ExampleBlock>
	</section>

	<section id="state" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.state') }}</h2>
		<ExampleBlock :code="examples.state">
			<div class="grid w-full max-w-sm gap-3">
				<Input :control="readonlyControl" label="Readonly" readonly />
				<Input :control="disabledControl" label="Disabled" disabled />
				<Input :control="errorControl" label="Required" error="Required field" />
			</div>
		</ExampleBlock>
	</section>

	<section id="validation" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.validation') }}</h2>
		<ExampleBlock :code="examples.requiredExample">
			<div class="w-full max-w-sm space-y-3">
				<Input
					:control="validationControl"
					label="Username"
					required
					:min="3"
					:max="20"
				/>
				<div class="flex items-center gap-3">
					<Button size="sm" @click="checkFromParent">
						{{ $t('inputValidation.check') }}
					</Button>
					<span class="text-sm text-muted-foreground">
						{{ $t('inputValidation.parentInvalid') }}:
						{{ validationControl.invalid }}
					</span>
				</div>
			</div>
		</ExampleBlock>
	</section>

	<section id="length" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.length') }}</h2>
		<ExampleBlock :code="examples.lengthExample">
			<div class="w-full max-w-sm">
				<Input
					:control="lengthControl"
					label="Code"
					:min="6"
					:max="12"
					hint="6-12 characters"
				/>
			</div>
		</ExampleBlock>
	</section>

	<section id="with-icon" class="space-y-4">
		<h2 class="text-2xl font-semibold">{{ $t('docsSections.withIcon') }}</h2>
		<ExampleBlock :code="examples.withIcon">
			<div class="grid w-full max-w-sm gap-3">
				<EmailInput :control="iconControl">
					<template #leading>
						<Mail class="size-5" />
					</template>
				</EmailInput>

				<Input
					:control="passwordControl"
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
			<h2 class="text-2xl font-semibold">{{ $t('docsSections.variants') }}</h2>
			<p class="text-muted-foreground leading-7">
				Install focused wrappers when you want a dedicated component for a
				specific input pattern.
			</p>
		</div>

		<div class="grid min-w-0 gap-5">
			<div id="variant-username" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-3">
					<h3 class="text-lg font-semibold">Username Input</h3>
					<InstallCommandBlock component="username-input" />
				</div>
				<ExampleBlock :code="examples.usernameExample">
					<div class="w-full max-w-sm mx-auto">
						<UsernameInput :control="usernameControl" />
					</div>
				</ExampleBlock>
			</div>

			<div id="variant-email" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-3">
					<h3 class="text-lg font-semibold">Email Input</h3>
					<InstallCommandBlock component="email-input" />
				</div>
				<ExampleBlock :code="examples.emailExample">
					<div class="w-full max-w-sm mx-auto">
						<EmailInput :control="emailControl" required />
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
							:control="passwordExampleControl"
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
							:control="phoneControl"
							country-code="+7"
							placeholder="777 777 77 77"
						/>
					</div>
				</ExampleBlock>
			</div>

			<div id="variant-iin" class="min-w-0 scroll-mt-24 space-y-3">
				<div class="space-y-3">
					<h3 class="text-lg font-semibold">{{ $t('inputLabels.iin') }}</h3>
					<InstallCommandBlock component="iin-input" />
				</div>
				<ExampleBlock :code="examples.iinExample">
					<div class="w-full max-w-sm mx-auto">
						<IinInput :control="iinControl" required />
					</div>
				</ExampleBlock>
			</div>
		</div>
	</section>

	<section id="api-reference" class="space-y-4">
		<h2 class="text-2xl font-semibold">
			{{ $t('docsSections.apiReference') }}
		</h2>
		<Table :columns="propsTableColumns" :rows="inputProps" />
		<h3 class="pt-4 text-xl font-semibold">
			{{ $t('inputValidation.xControlApi') }}
		</h3>
		<Table :columns="propsTableColumns" :rows="xControlApiRows" />
	</section>
</template>
