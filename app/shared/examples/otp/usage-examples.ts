export const examples = {
	usage: `<script setup lang="ts">
import OtpInput from '@/components/ui/otp-input/OtpInput.vue'

const code = ref('')

const verify = (value: string) => {
  console.log('submit', value)
}
<\/script>

<template>
  <OtpInput v-model="code" :length="6" @submit="verify" />
</template>`,
	length: `<script setup lang="ts">
import OtpInput from '@/components/ui/otp-input/OtpInput.vue'
<\/script>

<template>
  <div class="grid gap-4">
    <OtpInput :length="4" />
    <OtpInput :length="8" />
  </div>
</template>`,
};
