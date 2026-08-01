export const examples = {
	usage: `<script setup lang="ts">
import TextLink from '@/components/ui/text-link/TextLink.vue';
</script>

<template>
	<p class="text-muted-foreground">
		Read the
		<TextLink href="/installation">
			installation guide
		</TextLink>
		before copying components.
	</p>
</template>`,
	externalLink: `<script setup lang="ts">
import InfoBox from '@/components/ui/info-box/InfoBox.vue';
import TextLink from '@/components/ui/text-link/TextLink.vue';
</script>

<template>
	<InfoBox>
		For more detailed information, visit the
		<TextLink
			href="https://i18n.nuxtjs.org/"
			target="_blank"
		>
			Nuxt i18n documentation.
		</TextLink>
	</InfoBox>
</template>`,
};
