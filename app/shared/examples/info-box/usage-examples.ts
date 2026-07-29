export const examples = {
	usage: `<InfoBox>{{ $t('componentDocs.infoBox.demo') }}</InfoBox>`,
	withIcon: `<script setup lang="ts">
import { CircleHelp } from '@lucide/vue';
<\/script>

<InfoBox :icon="CircleHelp">{{ $t('componentDocs.infoBox.demo') }}</InfoBox>`,
};
