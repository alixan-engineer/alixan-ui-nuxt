export const examples = {
	compact: `<script setup lang="ts">
import { Menu } from '@lucide/vue';

import AppBar from '@/components/ui/app-bar/AppBar.vue';
import Avatar from '@/components/ui/avatar/Avatar.vue';
import IconButton from '@/components/ui/icon-button/IconButton.vue';
import Scaffold from '@/components/ui/scaffold/Scaffold.vue';
<\/script>

<template>
	<Scaffold>
		<template #app-bar>
			<AppBar title="appBar.dashboard">
				<template #leading>
					<IconButton>
						<Menu />
					</IconButton>
				</template>

				<template #trailing>
					<Avatar name="Alixan" />
				</template>
			</AppBar>
		</template>

		<template #body>
			<div class="h-90 mx-4 my-8 border rounded-2xl p-6 text-sm">
				Page content
			</div>
		</template>
	</Scaffold>
</template>`,

	silver: `<script setup lang="ts">
import { ArrowLeft, Ellipsis, Share } from '@lucide/vue';

import IconButton from '@/components/ui/icon-button/IconButton.vue';
import Scaffold from '@/components/ui/scaffold/Scaffold.vue';
import SilverAppBar from '@/components/ui/app-bar/SilverAppBar.vue';
<\/script>

<template>
	<Scaffold>
		<template #body>
			<SilverAppBar title="appBar.dashboard">
				<template #leading>
					<IconButton>
						<ArrowLeft />
					</IconButton>
				</template>

				<template #trailing>
					<IconButton>
						<Share />
					</IconButton>

					<IconButton>
						<Ellipsis />
					</IconButton>
				</template>

				<template #observer>
					<h1 class="m-4 text-3xl font-semibold">
						{{ $t('appBar.dashboard') }}
					</h1>
				</template>
			</SilverAppBar>

			<div class="h-90 mx-4 my-8 border rounded-2xl p-6 text-sm">
				Page content
			</div>
		</template>
	</Scaffold>
</template>`,
};
