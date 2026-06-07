export const examples = {
	usage: `<script setup lang="ts">
const value = ref('')
<\/script>

<template>
  <EmailInput v-model="value" />
</template>`,
	state: `<script setup lang="ts">
const value = ref('readonly@example.com')
<\/script>

<template>
  <div class="grid w-full gap-3">
    <Input v-model="value" label="Readonly" readonly />
    <Input label="Disabled" disabled />
    <Input label="Required" error="Required field" />
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
    <EmailInput v-model="email">
      <template #leading>
        <Mail class="size-5" />
      </template>
    </EmailInput>

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
