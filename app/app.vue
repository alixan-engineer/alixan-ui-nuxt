<template>
	<Header />

	<div
		class="mx-auto grid min-h-0 w-full max-w-container flex-1 grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)]"
	>
		<Sidebar />

		<main class="min-w-0 px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
			<NuxtPage />
		</main>
	</div>
</template>
