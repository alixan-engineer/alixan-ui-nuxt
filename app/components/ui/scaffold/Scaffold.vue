<template>
	<div class="size-full flex flex-col">
		<slot name="app-bar" />

		<div class="flex-1 relative">
			<div class="absolute inset-0 z-0 overflow-y-auto md:p-6 max-md:p-4">
				<slot name="body" />
			</div>
		</div>

		<slot name="bottom-navigation-bar" />
	</div>
</template>
