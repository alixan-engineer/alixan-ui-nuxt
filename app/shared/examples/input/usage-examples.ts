export const examples = {
	usage: `<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'

const control = useXControl('')
<\/script>

<template>
  <Input :control="control" label="Name" />
</template>`,
	state: `<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'

const readonlyControl = useXControl('readonly@example.com')
const disabledControl = useXControl('')
const errorControl = useXControl('')
<\/script>

<template>
  <div class="grid w-full gap-3">
    <Input :control="readonlyControl" label="Readonly" readonly />
    <Input :control="disabledControl" label="Disabled" disabled />
    <Input :control="errorControl" label="Required" error="Required field" />
 </div>
</template>`,
	withIcon: `<script setup lang="ts">
import { Eye, EyeOff, Lock, Mail } from '@lucide/vue'
import EmailInput from '@/components/ui/input/EmailInput.vue'
import IconButton from '@/components/ui/icon-button/IconButton.vue'
import Input from '@/components/ui/input/Input.vue'

const emailControl = useXControl('')
const passwordControl = useXControl('')
const isPasswordVisible = ref(false)
<\/script>

<template>
  <div class="grid w-full gap-3">
    <EmailInput :control="emailControl">
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
</template>`,
	requiredExample: `<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'

const control = useXControl('')

const check = () => {
  control.validate()
}
<\/script>

<template>
  <Input :control="control" label="Username" required :min="3" :max="20" />
  <Button @click="check">{{ $t('inputValidation.check') }}</Button>
  <span>
    {{ $t('inputValidation.parentInvalid') }}: {{ control.invalid }}
  </span>
</template>`,
	emailExample: `<script setup lang="ts">
import EmailInput from '@/components/ui/input/EmailInput.vue'

const control = useXControl('')
<\/script>

<template>
  <EmailInput :control="control" required />
</template>`,
	passwordExample: `<script setup lang="ts">
import PasswordInput from '@/components/ui/input/PasswordInput.vue'

const control = useXControl('')
<\/script>

<template>
  <PasswordInput
    :control="control"
    required
    :min="8"
    :max="32"
  />
</template>`,
	lengthExample: `<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue'

const control = useXControl('')
<\/script>

<template>
  <Input :control="control" label="Code" :min="6" :max="12" hint="6-12 characters" />
</template>`,
	phoneExample: `<script setup lang="ts">
import PhoneInput from '@/components/ui/input/PhoneInput.vue'

const control = useXControl('')
<\/script>

<template>
  <PhoneInput
    :control="control"
    country-code="+7"
    placeholder="777 777 77 77"
  />
</template>`,
	usernameExample: `<script setup lang="ts">
import UsernameInput from '@/components/ui/input/UsernameInput.vue'

const control = useXControl('')
<\/script>

<template>
  <UsernameInput :control="control" />
</template>`,
	iinExample: `<script setup lang="ts">
import IinInput from '@/components/ui/input/IinInput.vue'

const control = useXControl('')
<\/script>

<template>
  <IinInput :control="control" required />
</template>`,
};
